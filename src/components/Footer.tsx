import { FooterDiv, IconDiv, IconImg, IconText } from './LayoutStyles'
import { useNavigate, useLocation } from 'react-router-dom'
import { URL } from '../static'
import useUserStore from '../store/userStore'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../firebase'
import { HomeOutlined, TeamOutlined } from '@ant-design/icons'
import lounge from '../assets/images/footer/lounge.webp'
import loungeDark from '../assets/images/footer/loungeDark.webp'

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
        <HomeOutlined
          style={{
            color: pathname.includes('main') ? 'white' : '#888',
            fontSize: '18px',
          }}
        />
        <IconText
          style={{
            color: pathname.includes('main') ? 'white' : '#888',
          }}
        >
          홈
        </IconText>
      </IconDiv>
      <IconDiv onClick={() => handleClickFooter(URL.lounge)}>
        <IconImg
          src={
            pathname.includes('lounges') ||
            (!pathname.includes('myRoom') && pathname.includes('objets'))
              ? lounge
              : loungeDark
          }
        />
        <IconText
          style={{
            color:
              pathname.includes('lounges') ||
              (!pathname.includes('myRoom') && pathname.includes('objets'))
                ? 'white'
                : '#888',
          }}
        >
          라운지
        </IconText>
      </IconDiv>
      <IconDiv onClick={() => handleClickFooter(URL.users)}>
        <TeamOutlined
          style={{
            color: pathname.includes('users') ? 'white' : '#888',
            fontSize: '18px',
          }}
        />
        <IconText
          style={{
            color: pathname.includes('users') ? 'white' : '#888',
          }}
        >
          유저
        </IconText>
      </IconDiv>
      <IconDiv onClick={() => handleClickFooter(URL.myRoom)}>
        <IconImg
          loading='lazy'
          alt='마이룸'
          src={profileImage}
          $isMyRoom={pathname.includes('myRoom') ? true : false}
        />
        <IconText
          style={{
            color: pathname.includes('myRoom') ? 'white' : '#888',
          }}
        >
          마이룸
        </IconText>
      </IconDiv>
    </FooterDiv>
  )
}
