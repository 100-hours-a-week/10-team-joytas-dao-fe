import { useNavigate } from 'react-router-dom'
import backImage from '../../assets/images/back.png'
import { HeaderDiv, BackImg } from './Styles'

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
