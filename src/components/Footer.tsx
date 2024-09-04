import { FooterDiv, IconDiv, IconImg, IconText } from './LayoutStyles'
import home from '../assets/images/footer/home.webp'
import rocket from '../assets/images/footer/rocket.webp'
import users from '../assets/images/footer/users.webp'
import homePurple from '../assets/images/footer/homePurple.webp'
import rocketPurple from '../assets/images/footer/rocketPurple.webp'
import usersPurple from '../assets/images/footer/usersPurple.webp'
import { useNavigate, useLocation } from 'react-router-dom'
import { URL } from '../static'
import useUserStore from '../store/userStore'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../firebase'

export default function Footer() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const profileImage = useUserStore((state) => state.profileImage)

  const handleClickFooter = (tab: string) => {
    logEvent(analytics, 'click-footer', {
      tab,
    })
    navigate(tab)
  }

  return (
    <FooterDiv>
      <IconDiv onClick={() => handleClickFooter(URL.main)}>
        <IconImg src={pathname.includes('main') ? homePurple : home} />
        <IconText>홈</IconText>
      </IconDiv>
      <IconDiv onClick={() => handleClickFooter(URL.lounge)}>
        <IconImg
          src={
            pathname.includes('lounge') || pathname.includes('objets')
              ? rocketPurple
              : rocket
          }
        />
        <IconText>라운지</IconText>
      </IconDiv>
      <IconDiv onClick={() => handleClickFooter(URL.users)}>
        <IconImg src={pathname.includes('users') ? usersPurple : users} />
        <IconText>유저</IconText>
      </IconDiv>
      <IconDiv onClick={() => handleClickFooter(URL.myRoom)}>
        <IconImg
          loading='lazy'
          alt='마이룸'
          src={profileImage}
          $isMyRoom={pathname.includes('myRoom') ? true : false}
        />
        <IconText>마이룸</IconText>
      </IconDiv>
    </FooterDiv>
  )
}
