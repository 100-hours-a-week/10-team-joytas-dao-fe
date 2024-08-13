import {
  AlarmIcon,
  HeaderContainer,
  LogoImage,
  HeaderLeft,
  MenuIcon,
} from './LayoutStyle'
import logo from '../assets/images/logo.png'
import bell from '../assets/images/bell.png'
import burger from '../assets/images/burger.png'
import { useNavigate } from 'react-router-dom'
import { URL } from '../static'

export default function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <LogoImage
        onClick={() => {
          navigate(URL.main)
        }}
        src={logo}
      />
      <HeaderLeft>
        <AlarmIcon src={bell} />
        <MenuIcon src={burger} />
      </HeaderLeft>
    </HeaderContainer>
  )
}
