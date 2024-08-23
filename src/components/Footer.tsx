import { FooterDiv, IconDiv, IconImg, IconText } from './LayoutStyles'
import home from '../assets/images/footer/home.png'
import rocket from '../assets/images/footer/rocket.png'
import users from '../assets/images/footer/users.png'
import homePurple from '../assets/images/footer/homePurple.png'
import rocketPurple from '../assets/images/footer/rocketPurple.png'
import usersPurple from '../assets/images/footer/usersPurple.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { URL } from '../static'
import useUserStore from '../store/userStore'

export default function Footer() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const profileImage = useUserStore((state) => state.profileImage)

  return (
    <FooterDiv>
      <IconDiv onClick={() => navigate(URL.main)}>
        <IconImg src={pathname.includes('main') ? homePurple : home} />
        <IconText>홈</IconText>
      </IconDiv>
      <IconDiv onClick={() => navigate(URL.lounge)}>
        <IconImg src={pathname.includes('lounge') ? rocketPurple : rocket} />
        <IconText>라운지</IconText>
      </IconDiv>
      <IconDiv onClick={() => navigate(URL.users)}>
        <IconImg src={pathname.includes('users') ? usersPurple : users} />
        <IconText>유저</IconText>
      </IconDiv>
      <IconDiv onClick={() => navigate(URL.myRoom)}>
        <IconImg src={profileImage} />
        <IconText>마이룸</IconText>
      </IconDiv>
    </FooterDiv>
  )
}
