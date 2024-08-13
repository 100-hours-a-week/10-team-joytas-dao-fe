import {
  Main,
  Title,
  SubTitle,
  ProfileContainer,
  ImageContainer,
  Profile,
  ModifyButton,
  ProfileTitle,
  NicknameContainer,
  NicknameInput,
  NicknameTitle,
  StartButtonContainer,
  RocketImage,
} from './ProfileStyle'
import profile from '../../assets/images/profile.png'
import rocket from '../../assets/images/rocket.png'

export default function FirstProfile() {
  const handleClickStart = () => {}
  return (
    <Main>
      <Title>
        <div>잠깐! </div>
        <div>프로필 설정을 해주세요!</div>
      </Title>
      <SubTitle>사용하실 이미지와 닉네임을 확인해주세요 ☺️</SubTitle>
      <ProfileContainer>
        <ProfileTitle>프로필 이미지</ProfileTitle>
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
      <StartButtonContainer onClick={handleClickStart}>
        <RocketImage src={rocket} />
        START
      </StartButtonContainer>
    </Main>
  )
}
