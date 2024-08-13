import {
  Main,
  LoginImage1,
  LoginImagDiv,
  LoginImagDiv2,
  Logo,
  LoginButton,
  Text,
  Bottom,
} from './LoginStyles'
import { Link } from 'react-router-dom'
import login1 from '../../assets/images/login1.png'
import login2 from '../../assets/images/login2.png'
import login from '../../assets/images/login.png'
import { URL } from '../../static'

export default function Login() {
  return (
    <Main>
      <LoginImagDiv>
        <LoginImage1 src={login1} />
      </LoginImagDiv>
      <Logo>DAO</Logo>
      <LoginImagDiv2>
        <LoginImage1 src={login2} />
      </LoginImagDiv2>
      <LoginButton>
        <img src={login} />
      </LoginButton>
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
