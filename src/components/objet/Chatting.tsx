import { Chat } from './ObjetComponentStyle'
import sampleImg from '../../assets/images/sampleObjet.png'

interface ChattingProps {
  userName: string
  userId: number
  profileImg: string
  content: string
}

export function ChattingPreview({
  userName,
  userId,
  profileImg,
  content,
  datetime,
}: ChattingProps) {
  return (
    <Chat>
      <img src={sampleImg} alt='profile' />
      <span>{content}</span>
    </Chat>
  )
}
