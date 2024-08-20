import { Icon, HeaderContainer, LogoImage, HeaderLeft } from './LayoutStyles'
import logo from '../assets/images/logo.png'
import bell from '../assets/images/bell.png'
import burger from '../assets/images/burger.png'
import { useNavigate } from 'react-router-dom'
import { URL } from '../static'
import { useState } from 'react'
import Menu from './Menu'

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
          <Icon onClick={() => setMenuOpen(!menuOpen)} src={burger} />
        </HeaderLeft>
      </HeaderContainer>
      {menuOpen ? <Menu setMenuOpen={setMenuOpen} /> : null}
    </>
  )
}
