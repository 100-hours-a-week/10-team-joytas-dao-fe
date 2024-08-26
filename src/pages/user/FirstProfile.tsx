import {
  Title,
  SubTitle,
  StartButtonContainer,
  RocketImage,
} from './ProfileStyles'
import rocket from '../../assets/images/footer/rocket.png'
import { GloablContainer32 } from '../../global/globalStyles'
import { useState } from 'react'
import { APIs, URL } from '../../static'
import { useNavigate } from 'react-router-dom'
import ProfileImageUploader from '../../components/user/ProfileImageUploader'
import { checkNicknameDuplicate } from '../../utils/validation'
import NicknameInputField from '../../components/user/NicknameInputField'
import { useEffect } from 'react'
import useUserStore from '../../store/userStore'

export default function FirstProfile() {
  const [profile, setProfile] = useState<File | null>(null)
  const [profileUrl, setProfileUrl] = useState('')
  const [nickname, setNickname] = useState('')
  const [imageError, setImageError] = useState('')
  const [nicknameError, setNicknameError] = useState('')

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
        if (responseData.data.user_status !== 'ACTIVE_FIRST_LOGIN') navigate(-1)
      }
    }

    fetchUserInfo()
  })

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

  // START 버튼 클릭 핸들러
  //TODO: 이후에는 이미지는 multipart, 닉네임은 application/json으로 전송할 예정
  const handleClickStart = async () => {
    if (profile && nickname) {
      const isValidate = await validateNickname(nickname)
      if (isValidate) {
        try {
          const formData = new FormData()
          formData.append('profile_image', profile)
          formData.append('nickname', nickname)

          const response = await fetch(APIs.modifyProfile, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            body: formData,
          })

          if (!response.ok) {
            throw new Error('프로필 변경 실패')
          }

          updateProfileImage(profileUrl)
          updateNickname(nickname)
          navigate(URL.main)
        } catch (error) {
          console.error('Error:', error)
        }
      }
    }
  }

  const isStartButtonDisabled = !profile || !nickname || !!nicknameError

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
      <StartButtonContainer
        onClick={handleClickStart}
        disabled={isStartButtonDisabled}
        style={{
          opacity: isStartButtonDisabled ? 0.5 : 1,
          pointerEvents: isStartButtonDisabled ? 'none' : 'auto',
        }}
      >
        <RocketImage src={rocket} />
        START
      </StartButtonContainer>
    </GloablContainer32>
  )
}
