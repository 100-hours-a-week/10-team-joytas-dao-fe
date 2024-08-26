import {
  Icon,
  HeaderContainer,
  LogoImage,
  HeaderLeft,
  HamburgerIcon,
} from './LayoutStyles'
import logo from '../assets/images/logo.png'
import bell from '../assets/images/bell.png'
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
        <LogoImage
          onClick={() => {
            navigate(URL.main)
          }}
          src={logo}
        />
        <HeaderLeft>
          <Icon src={bell} onClick={() => navigate(URL.notification)} />
          <HamburgerIcon>
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              color='white'
              size={20}
            />
          </HamburgerIcon>
        </HeaderLeft>
      </HeaderContainer>
      {menuOpen ? <Menu /> : null}
    </>
  )
}
