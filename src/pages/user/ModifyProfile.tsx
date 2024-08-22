import { MainTitle, ModifyConfirmButton, DeleteButton } from './ProfileStyles'
import ProfileImageUploader from '../../components/user/ProfileImageUploader'
import NicknameInputField from '../../components/user/NicknameInputField'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static'
import { useState, useEffect } from 'react'
import { checkNicknameDuplicate } from '../../utils/validation'

export default function ModifyProfile() {
  const [profile, setProfile] = useState<File | null>(null)
  const [profileUrl, setProfileUrl] = useState('')
  const [imageError, setImageError] = useState('')
  const [nickname, setNickname] = useState('')
  const [nicknameError, setNicknameError] = useState('')

  const userNickname = localStorage.getItem('nickname') || '익명'
  const userProfileImage = localStorage.getItem('profileImage') || ''

  const navigate = useNavigate()

  const handleClickConfirm = async () => {
    console.log(profile, profileUrl, nickname)
    if ((profile || profileUrl) && nickname) {
      const isValidate = await validateNickname(nickname)
      if (isValidate) {
        try {
          const formData = new FormData()
          if (profile) {
            formData.append('profile_image', profile)
          }
          formData.append('nickname', nickname)

          const response = await fetch(APIs.modifyProfile, {
            method: 'PATCH',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: formData,
          })

          if (!response.ok) {
            throw new Error('프로필 변경 실패')
          }
          localStorage.setItem('profileImage', profileUrl)
          localStorage.setItem('nickname', nickname)
          navigate(URL.main)
        } catch (error) {
          console.error('Error:', error)
        }
      }
    } else alert('프로필 변경 실패')
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

    const isNicknameDuplicate = await checkNicknameDuplicate(nickname)
    if (isNicknameDuplicate) {
      setNicknameError('중복된 닉네임입니다.')
      return false
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
        <ModifyConfirmButton onClick={handleClickConfirm}>
          수정하기
        </ModifyConfirmButton>
        <DeleteButton onClick={handleClickDelete}>회원탈퇴</DeleteButton>
      </>
    </Layout>
  )
}
