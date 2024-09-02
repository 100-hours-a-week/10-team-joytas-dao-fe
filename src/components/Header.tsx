import {
  Icon,
  HeaderContainer,
  LogoImage,
  HeaderRight,
  HamburgerIcon,
} from './LayoutStyles'
import logo from '../assets/images/logo.webp'
import bell from '../assets/images/bell.webp'
import { useNavigate } from 'react-router-dom'
import { URL } from '../static'
import { useState } from 'react'
import Menu from './Menu'
import { Squash as Hamburger } from 'hamburger-react'

export default function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HeaderContainer>
        <LogoImage onClick={() => navigate(URL.main)} src={logo} />
        <HeaderRight>
          <Icon src={bell} onClick={() => navigate(URL.notification)} />
          <HamburgerIcon>
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              color='white'
              size={20}
            />
          </HamburgerIcon>
        </HeaderRight>
      </HeaderContainer>
      {menuOpen ? <Menu /> : null}
    </>
  )
}
