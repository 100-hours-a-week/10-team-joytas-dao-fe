import { FooterDiv, IconDiv, IconImg, IconText } from './LayoutStyle'
import home from '../assets/images/home.png'
import rocket from '../assets/images/rocket.png'
import users from '../assets/images/users.png'
import profile from '../assets/images/profile.png'
import { useNavigate } from 'react-router-dom'
import { URL } from '../static'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <FooterDiv>
      <IconDiv onClick={() => navigate(URL.main)}>
        <IconImg src={home} />
        <IconText>홈</IconText>
      </IconDiv>
      <IconDiv onClick={() => navigate(URL.lounge)}>
        <IconImg src={rocket} />
        <IconText>라운지</IconText>
      </IconDiv>
      <IconDiv onClick={() => navigate(URL.users)}>
        <IconImg src={users} />
        <IconText>유저</IconText>
      </IconDiv>
      <IconDiv onClick={() => navigate(URL.myRoom)}>
        <IconImg src={profile} />
        <IconText>마이룸</IconText>
      </IconDiv>
    </FooterDiv>
  )
}
