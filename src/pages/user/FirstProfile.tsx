import { Title, SubTitle, Button, ButtonContainer } from './ProfileStyles'
import { GloablContainer32 } from '@global/globalStyles'
import { useState } from 'react'
import { APIs, URL } from '@/static'
import { useNavigate } from 'react-router-dom'
import ProfileImageUploader from '@components/user/ProfileImageUploader'
import { checkNicknameDuplicate } from '@utils/validation'
import NicknameInputField from '@components/user/NicknameInputField'
import useUserStore from '@store/userStore'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useMutation, useQuery } from 'react-query'
import { convertImageToWebP } from '@/utils/convertImage'

const fetchUserProfile = async () => {
  const response = await axios.get(APIs.profile, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response.data.data
}

export default function FirstProfile() {
  const [profile, setProfile] = useState<File | null>(null)
  const [profileUrl, setProfileUrl] = useState('')
  const [nickname, setNickname] = useState('')
  const [imageError, setImageError] = useState('')
  const [nicknameError, setNicknameError] = useState('')
  const [isClick, setIsClick] = useState(false)

  const updateProfileImage = useUserStore((state) => state.updateProfileImage)
  const updateNickname = useUserStore((state) => state.updateNickname)

  const navigate = useNavigate()

  const { isLoading: isProfileLoading } = useQuery(
    'userProfile',
    fetchUserProfile,
    {
      onSuccess: (data) => {
        if (data.user_status !== 'ACTIVE_FIRST_LOGIN') {
          toast.info('이미 프로필을 설정했습니다 😊')
          navigate(-1)
        }
      },
      onError: (error) => {
        console.error('유저 정보 불러오기 실패: ', error)
      },
    }
  )

  const validateNickname = async (nickname: string): Promise<boolean> => {
    const lengthValid = nickname.length >= 2 && nickname.length <= 10
    const pattern = /^[가-힣a-zA-Z]+$/
    const patternValid = pattern.test(nickname)

    setNicknameError('')

    if (!lengthValid) {
      setNicknameError('닉네임은 최소 2자, 최대 10자여야 합니다.')
      return false
    }

    if (!patternValid) {
      setNicknameError('닉네임은 한글 또는 영문자만 허용됩니다.')
      return false
    }

    const isNicknameDuplicate = await checkNicknameDuplicate(nickname)
    if (isNicknameDuplicate) {
      setNicknameError('중복된 닉네임입니다.')
      return false
    }

    return true
  }

  const uploadProfileImage = useMutation(
    async (): Promise<string | undefined> => {
      if (!profile) {
        throw new Error('Profile image is not selected')
      }

      const webpImageBlob = await convertImageToWebP(profile)

      const formData = new FormData()
      formData.append(
        'file',
        new File([webpImageBlob], 'image.webp', { type: 'image/webp' })
      )

      const response = await axios.post(APIs.uploadImage, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })

      return response.data.data.image_url
    }
  )

  const updateProfile = useMutation(
    async (imageUrl: string) => {
      await axios.patch(
        APIs.modifyProfile,
        { nickname, profile_url: imageUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )
    },
    {
      onSuccess: () => {
        updateProfileImage(profileUrl)
        updateNickname(nickname)
        toast.success('프로필 변경 성공 🪐')
        navigate(URL.main)
      },
      onError: (error) => {
        console.error('프로필 변경 실패: ', error)
        toast.error('프로필 변경 실패 😭')
      },
      onSettled: () => {
        setIsClick(false)
      },
    }
  )

  const handleClickStart = async () => {
    if (profile && nickname) {
      setIsClick(true)
      const isValidate = await validateNickname(nickname)
      if (isValidate) {
        try {
          const uploadedProfileUrl = await uploadProfileImage.mutateAsync()
          if (!uploadedProfileUrl) {
            toast.error('프로필 이미지 변경 실패 😭')
            return
          }

          updateProfile.mutate(uploadedProfileUrl)
        } catch (error) {
          console.error('Error: ', error)
          setIsClick(false)
        }
      } else {
        setIsClick(false)
      }
    }
  }

  const isStartButtonDisabled =
    !profile || !nickname || !!nicknameError || isClick

  return (
    <GloablContainer32>
      <Title>
        <div>잠깐! </div>
        <div>프로필 설정을 해주세요!</div>
      </Title>
      <SubTitle>사용하실 이미지와 닉네임을 입력해주세요 ☺️</SubTitle>
      <ProfileImageUploader
        imageError={imageError}
        profile={profile}
        profileUrl={profileUrl}
        setProfileUrl={setProfileUrl}
        setProfile={setProfile}
        setImageError={setImageError}
      />
      <NicknameInputField
        nickname={nickname}
        nicknameError={nicknameError}
        setNickname={setNickname}
        validateNickname={validateNickname}
      />

      <ButtonContainer className='home' onClick={handleClickStart}>
        <Button disabled={isStartButtonDisabled || isProfileLoading}>
          <span className='ok'>START</span>
        </Button>
        <span className='ok'>START</span>
      </ButtonContainer>
    </GloablContainer32>
  )
}
