import { ChangeEvent } from 'react'
import {
  ProfileContainer,
  ImageContainer,
  Profile,
  ModifyButton,
  ProfileTitle,
  NoProfile,
} from '@pages/user/ProfileStyles'
import { RedTextLong } from '@pages/lounge/LoungeStyles'
import { RedText } from '@pages/objet/ObjetStyles'

interface ProfileImageUploaderProps {
  profile: File | null
  profileUrl: string
  imageError: string
  setProfile: (image: File) => void
  setProfileUrl: (image: string) => void
  setImageError: (error: string) => void
}

export default function ProfileImageUploader({
  profileUrl,
  imageError,
  setProfile,
  setProfileUrl,
  setImageError,
}: ProfileImageUploaderProps) {
  const handleChangeProfileImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const maxSizeInMB = 25
      if (file.size > maxSizeInMB * 1024 * 1024) {
        setImageError('파일 크기가 25MB를 초과할 수 없습니다.')
        return
      }

      setProfile(file)

      const reader = new FileReader()
      reader.onload = (data) => {
        if (data.target?.result) {
          setProfileUrl(data.target.result as string)
          setImageError('')
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <ProfileContainer>
      <ProfileTitle>
        프로필 이미지<RedText>*</RedText>
      </ProfileTitle>
      <ImageContainer>
        {profileUrl ? (
          <Profile alt='profile' src={profileUrl} />
        ) : (
          <NoProfile />
        )}
        <div>
          <ModifyButton htmlFor='imageInput'>변경</ModifyButton>
          <input
            id='imageInput'
            onChange={handleChangeProfileImage}
            type='file'
            accept='image/*'
            style={{ display: 'none' }}
          />
        </div>
      </ImageContainer>
      <RedTextLong>{imageError}</RedTextLong>
    </ProfileContainer>
  )
}
