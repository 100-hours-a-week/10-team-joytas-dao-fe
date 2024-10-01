import { MainTitle, ModifyConfirmButton, DeleteButton } from './ProfileStyles'
import ProfileImageUploader from '@components/user/ProfileImageUploader'
import NicknameInputField from '@components/user/NicknameInputField'
import Layout from '@components/Layout'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'
import { useState, useEffect } from 'react'
import { checkNicknameDuplicate } from '@utils/validation'
import useUserStore from '@store/userStore'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useMutation } from 'react-query'
import { convertImageToWebP } from '@/utils/convertImage' // convertImageToWebP 함수 import

export default function ModifyProfile() {
  const userNickname = useUserStore((state) => state.nickname)
  const userProfileImage = useUserStore((state) => state.profileImage)

  const [profile, setProfile] = useState<File | null>(null)
  const [profileUrl, setProfileUrl] = useState('')
  const [imageError, setImageError] = useState('')
  const [nickname, setNickname] = useState(userNickname)
  const [nicknameError, setNicknameError] = useState('')
  const [isClickUpdate, setIsClickUpdate] = useState(false)

  const updateProfileImage = useUserStore((state) => state.updateProfileImage)
  const updateNickname = useUserStore((state) => state.updateNickname)

  const navigate = useNavigate()

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

    if (nickname !== userNickname) {
      const isNicknameDuplicate = await checkNicknameDuplicate(nickname)
      if (isNicknameDuplicate) {
        setNicknameError('중복된 닉네임입니다.')
        return false
      }
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

  const updateProfile = async (imageUrl: string) => {
    const response = await axios.patch(
      APIs.modifyProfile,
      { nickname, profile_url: imageUrl },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      }
    )
    return response.data
  }

  const mutation = useMutation(
    async () => {
      let imageUrl = profileUrl
      if (profile) {
        const uploadedImageUrl = await uploadProfileImage.mutateAsync()
        if (uploadedImageUrl) {
          imageUrl = uploadedImageUrl
          setProfileUrl(uploadedImageUrl)
        } else {
          throw new Error('프로필 이미지 변경 실패')
        }
      }
      await updateProfile(imageUrl)
    },
    {
      onSuccess: () => {
        updateProfileImage(profileUrl)
        updateNickname(nickname)
        toast.success('프로필 변경 성공 🪐')
        navigate(URL.main)
      },
      onError: (error) => {
        console.error('프로필 변경 실패:', error)
        toast.error('프로필 변경 실패 😭')
      },
      onSettled: () => {
        setIsClickUpdate(false)
      },
    }
  )

  const handleClickConfirm = async () => {
    setIsClickUpdate(true)
    const isValid = await validateNickname(nickname)
    if (isValid) {
      mutation.mutate()
    } else {
      setIsClickUpdate(false)
    }
  }

  const handleClickDelete = () => {
    navigate(URL.withdraw)
  }

  useEffect(() => {
    setNickname(userNickname)
    setProfileUrl(userProfileImage)
  }, [userNickname, userProfileImage])

  return (
    <Layout>
      <>
        <MainTitle>프로필 설정</MainTitle>
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
        <ModifyConfirmButton
          disabled={isClickUpdate}
          onClick={handleClickConfirm}
        >
          수정하기
        </ModifyConfirmButton>
        <DeleteButton onClick={handleClickDelete}>회원탈퇴</DeleteButton>
      </>
    </Layout>
  )
}
