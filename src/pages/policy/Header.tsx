import { useNavigate } from 'react-router-dom'
import backImage from '@images/back.webp'
import { HeaderDiv, BackImg } from './PolicyStyles'
import { URL } from '@/static'

export default function Header() {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate(URL.login)
  }

  return (
    <HeaderDiv>
      <BackImg onClick={handleClickBack} src={backImage} />
    </HeaderDiv>
  )
}
