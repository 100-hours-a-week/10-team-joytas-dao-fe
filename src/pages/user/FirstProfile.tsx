import { Title, SubTitle, Button, ButtonContainer } from './ProfileStyles'
import { GloablContainer32 } from '../../global/globalStyles'
import { useState } from 'react'
import { APIs, URL } from '../../static'
import { useNavigate } from 'react-router-dom'
import ProfileImageUploader from '../../components/user/ProfileImageUploader'
import { checkNicknameDuplicate } from '../../utils/validation'
import NicknameInputField from '../../components/user/NicknameInputField'
import { useEffect } from 'react'
import useUserStore from '../../store/userStore'
import { toast } from 'react-toastify'

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

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await fetch(APIs.profile, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const responseData = await response.json()
        if (responseData.data.user_status !== 'ACTIVE_FIRST_LOGIN') {
          toast.info('이미 프로필을 설정했습니다 😊')
          navigate(-1)
        }
      }
    }

    fetchUserInfo()
  }, [])

  // 닉네임 유효성 검사 함수
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

  const handleClickStart = async () => {
    if (profile && nickname) {
      setIsClick(true)
      const isValidate = await validateNickname(nickname)
      if (isValidate) {
        try {
          const formData = new FormData()
          formData.append('file', profile)

          const imageResponse = await fetch(APIs.uploadImage, {
            method: 'POST',
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: formData,
          })

          if (!imageResponse.ok) {
            toast.error('프로필 이미지 변경 실패 😭')
            return
          }

          const imageResponseData = await imageResponse.json()
          const profileUrl = imageResponseData?.data?.image_url

          updateProfileImage(profileUrl)

          try {
            const updateResponse = await fetch(APIs.modifyProfile, {
              method: 'PATCH',
              credentials: 'include',
              headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ nickname, profile_url: profileUrl }),
            })

            if (!updateResponse.ok) {
              toast.error('프로필 변경 실패 😭')
              return
            }

            updateNickname(nickname)
            toast.success('프로필 변경 성공 🪐')
            navigate(URL.main)
          } catch (error) {
            console.error('Error:', error)
          }
        } catch (error) {
          console.error('Error:', error)
        } finally {
          setIsClick(false)
        }
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
        <Button disabled={isStartButtonDisabled}>
          <span className='ok'>START</span>
        </Button>
        <span className='ok'>START</span>
      </ButtonContainer>
    </GloablContainer32>
  )
}
