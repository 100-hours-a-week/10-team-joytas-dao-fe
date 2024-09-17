import {
  Icon,
  HeaderContainer,
  LogoImage,
  HeaderRight,
  HamburgerIcon,
  LogoWrapper,
} from './LayoutStyles'
import rocket from '@assets/lotties/rocket.json'
import logo from '@assets/images/DAO.webp'
import bell from '@assets/images/bell.webp'
import { useLocation, useNavigate } from 'react-router-dom'
import { URL } from '@/static'
import { useState } from 'react'
import Menu from './Menu'
import { Squash as Hamburger } from 'hamburger-react'
import Lottie from 'lottie-react'

export default function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = useLocation().pathname

  return (
    <>
      <HeaderContainer>
        <LogoWrapper onClick={() => navigate(URL.main)}>
          <Lottie
            animationData={rocket}
            loop={true}
            autoplay={true}
            style={{ width: 40, height: 40 }}
          />
          <LogoImage src={logo} />
        </LogoWrapper>
        <HeaderRight>
          {!pathname.includes('notification') && (
            <Icon src={bell} onClick={() => navigate(URL.notification)} />
          )}
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
