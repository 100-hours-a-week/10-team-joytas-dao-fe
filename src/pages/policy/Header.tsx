import { useNavigate } from 'react-router-dom'
import backImage from '@images/back.webp'
import { HeaderDiv, BackImg } from './PolicyStyles'

export default function Header() {
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate(-1)
  }

  return (
    <HeaderDiv>
      <BackImg onClick={handleClickBack} src={backImage} />
    </HeaderDiv>
  )
}
