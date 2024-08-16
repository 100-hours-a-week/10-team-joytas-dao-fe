import { Chat } from './ObjetComponentStyle'
import sampleImg from '../../assets/images/sampleObjet.png'

interface ChattingProps {
  userName: string
  userId: number
  profileImg: string
  text: string
  datetime: string
}

export function ChattingPreview({
  userName,
  userId,
  profileImg,
  text,
  datetime,
}: ChattingProps) {
  return (
    <Chat>
      <img src={sampleImg} alt='profile' />
      <span>{text}</span>
    </Chat>
  )
}
