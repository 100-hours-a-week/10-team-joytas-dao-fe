import { Main, Logo, LoginButton, Text, Bottom, Mini } from './LoginStyles'
import { Link } from 'react-router-dom'
import { URL } from '../../static'
import { KAKAO_AUTH } from '../../static'
import universe from '../../assets/images/DAO.mp4'
import logo from '../../assets/images/DAO.webp'

export default function Login() {
  const handleClickLogIn = () => {
    location.href = KAKAO_AUTH
  }

  return (
    <Main>
      <video autoPlay muted loop playsInline src={universe} />
      <Logo>
        <img src={logo} alt='logo' style={{ width: '300px' }} />
        <Mini>"Digital Archive of Our Memories"</Mini>
      </Logo>
      <LoginButton onClick={handleClickLogIn}>카카오 로그인</LoginButton>
      <Bottom>
        <Link to={URL.terms}>
          <Text>이용약관</Text>
        </Link>
        <Link to={URL.privacy}>
          <Text>개인정보 처리방침</Text>
        </Link>
      </Bottom>
    </Main>
  )
}
