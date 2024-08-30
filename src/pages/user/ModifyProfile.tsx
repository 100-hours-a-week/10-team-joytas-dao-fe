import { MainTitle, ModifyConfirmButton, DeleteButton } from './ProfileStyles'
import ProfileImageUploader from '../../components/user/ProfileImageUploader'
import NicknameInputField from '../../components/user/NicknameInputField'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static'
import { useState, useEffect } from 'react'
import { checkNicknameDuplicate } from '../../utils/validation'
import useUserStore from '../../store/userStore'
import { toast } from 'react-toastify'

export default function ModifyProfile() {
  const [profile, setProfile] = useState<File | null>(null)
  const [profileUrl, setProfileUrl] = useState('')
  const [imageError, setImageError] = useState('')
  const [nickname, setNickname] = useState('')
  const [nicknameError, setNicknameError] = useState('')
  const [isClickUpdate, setIsClickUpdate] = useState(false)

  const userNickname = useUserStore((state) => state.nickname)
  const userProfileImage = useUserStore((state) => state.profileImage)
  const updateProfileImage = useUserStore((state) => state.updateProfileImage)
  const updateNickname = useUserStore((state) => state.updateNickname)

  const navigate = useNavigate()

  const handleClickConfirm = async () => {
    let imageUrl = profileUrl
    setIsClickUpdate(true)
    if (profile) {
      const formData = new FormData()
      formData.append('file', profile)

      const imageResponse = await fetch(APIs.modifyProfileImage, {
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
      imageUrl = imageResponseData.data.image_url
      setProfileUrl(imageResponseData?.data?.image_url)
    }

    if (imageUrl && nickname) {
      const isValidate = await validateNickname(nickname)
      if (isValidate) {
        try {
          const updateResponse = await fetch(APIs.modifyProfile, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nickname, profile_url: imageUrl }),
          })

          if (!updateResponse.ok) {
            toast.error('프로필 변경 실패 😭')
          }
          updateProfileImage(profileUrl)
          updateNickname(nickname)
          toast.success('프로필 변경 성공 🪐')
          navigate(URL.main)
        } catch (error) {
          console.error('Error:', error)
        }
      }
    }
    setIsClickUpdate(false)
  }

  const handleClickDelete = () => {
    navigate(URL.withdraw)
  }

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

    if (nickname !== userNickname) {
      const isNicknameDuplicate = await checkNicknameDuplicate(nickname)
      if (isNicknameDuplicate) {
        setNicknameError('중복된 닉네임입니다.')
        return false
      }
    }

    return true
  }

  // 프로필 초기 로드
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
