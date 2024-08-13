import {
  MainTitle,
  ProfileContainer,
  ImageContainer,
  Profile,
  ModifyButton,
  NicknameContainer,
  NicknameInput,
  NicknameTitle,
  ModifyConfirmButton,
  DeleteButton,
} from './ProfileStyle'
import profile from '../../assets/images/profile.png'
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../static'

export default function ModifyProfile() {
  const navigate = useNavigate()
  const handleClickStart = () => {}
  const handleClickDelete = () => {
    navigate(URL.delete)
  }
  return (
    <Layout>
      <>
        <MainTitle>프로필 설정</MainTitle>
        <ProfileContainer>
          <ImageContainer>
            <Profile src={profile} />
            <ModifyButton>변경</ModifyButton>
          </ImageContainer>
        </ProfileContainer>
        <NicknameContainer>
          <NicknameTitle>닉네임</NicknameTitle>
          <NicknameInput
            placeholder='닉네임을 입력해주세요'
            minLength={2}
            maxLength={10}
          />
        </NicknameContainer>
        <ModifyConfirmButton onClick={handleClickStart}>
          수정하기
        </ModifyConfirmButton>
        <DeleteButton onClick={handleClickDelete}>회원탈퇴</DeleteButton>
      </>
    </Layout>
  )
}
