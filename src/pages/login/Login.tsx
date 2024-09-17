import {
  Main,
  Logo,
  LoginButton,
  Text,
  Bottom,
  Mini,
  ScrollIcon,
  TopContainer,
  MiddleContainer,
  MiddleContainer2,
  ContainerTitle,
  ContainerSubTitle,
  OnBoarding,
  CardDescription,
  Card,
  CardList,
  CardTitle,
  CardButton,
  CardImage,
  BottomContainer,
} from './LoginStyles'
import { Link } from 'react-router-dom'
import { URL } from '@/static'
import { KAKAO_AUTH } from '@/static'
import universe from '@images/DAO.mp4'
import logo from '@images/DAO.webp'
import card1 from '@images/card1.png'
import card2 from '@images/card2.png'
import card3 from '@images/card3.png'
import card4 from '@images/card4.png'
import card5 from '@images/card5.png'
import scrollIcon from '@images/scrollIcon.png'

export default function Login() {
  const handleClickLogIn = () => {
    location.href = KAKAO_AUTH
  }

  return (
    <Main>
      <TopContainer>
        <video style={{}} autoPlay muted loop playsInline src={universe} />
        <Logo>
          <img src={logo} alt='logo' style={{ width: '300px' }} />
          <Mini>"Digital Archive of Our Memories"</Mini>
        </Logo>
        <LoginButton onClick={handleClickLogIn}>카카오 로그인</LoginButton>
        <ScrollIcon src={scrollIcon} />
        <Bottom>
          <Link to={URL.terms}>
            <Text>이용약관</Text>
          </Link>
          <Link to={URL.privacy}>
            <Text>개인정보 처리방침</Text>
          </Link>
        </Bottom>
      </TopContainer>
      <MiddleContainer>
        <ContainerTitle>추억을 행성으로.</ContainerTitle>
        <ContainerSubTitle>
          3D 모델로 추억을 만들고 우주를 만들어봐요
        </ContainerSubTitle>
        <CardButton onClick={handleClickLogIn}>탐험하러 가기</CardButton>
        <OnBoarding>
          <CardList>
            <Card style={{ marginLeft: '32px' }}>
              <CardTitle>원하는 3D 행성을 선택하고</CardTitle>
              <CardImage src={card1} />
            </Card>
            <Card>
              <CardTitle>공유하고 싶은 추억을 만들면</CardTitle>
              <CardImage src={card2} />
            </Card>
            <Card>
              <CardTitle>추억이 우주속에 떠다녀요</CardTitle>
              <CardImage src={card3} />
            </Card>
            <Card>
              <CardTitle>같은 추억을 보면서 채팅/통화하면서</CardTitle>
              <CardImage src={card4} />
            </Card>
            <Card>
              <CardTitle>우리들만의 멋진 우주를 만들어보아요</CardTitle>
              <CardImage src={card5} />
            </Card>
          </CardList>
        </OnBoarding>
      </MiddleContainer>
      <MiddleContainer2>
        <ContainerTitle>다르다.</ContainerTitle>
        <CardDescription>
          달라지는 <strong>기억 보관 방식.</strong> <br />
          DAO는 우리의 추억을 단순한 글이 아닌, <br />
          <strong>3D 행성</strong>으로 시각화하여 우주 속을 탐험합니다. <br />
          <br /> DAO로 여러분은 추억을 <strong>새롭게 체험</strong>합니다.
        </CardDescription>
        <CardButton onClick={handleClickLogIn}>체험하러 가기</CardButton>
      </MiddleContainer2>
      <BottomContainer>
        <img src={logo} />
        <div>
          <p>joytas.gmail.com</p>
          <p>Copyright ⓒ joytas</p>
        </div>
      </BottomContainer>
    </Main>
  )
}
