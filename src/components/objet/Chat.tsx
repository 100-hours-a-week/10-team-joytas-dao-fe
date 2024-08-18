import {
  Chat,
  ChatContents,
  ContentsAndDatetime,
  MyChat,
  UserName,
} from './ChatStyles'
import sampleImg from '../../assets/images/sampleObjet.png'
import { formatDatetime } from '../../utils/formatDatetime'

interface ChattingProps {
  userName: string
  userId: number
  profileImg: string
  content: string
  datetime?: string
}

export function ChatMessage({
  userName,
  userId,
  profileImg,
  content,
  datetime,
}: ChattingProps) {
  const currentUserId = 2
  const isMyChat = userId === currentUserId

  return datetime ? (
    isMyChat ? (
      <MyChat>
        <ContentsAndDatetime>
          <div className='datetime'>{formatDatetime(datetime)}</div>
          <div className='contents'>{content}</div>
        </ContentsAndDatetime>
      </MyChat>
    ) : (
      <Chat>
        <img src={sampleImg} alt='profile' />
        <ChatContents>
          <UserName>{userName}</UserName>
          <ContentsAndDatetime>
            <div className='contents'>{content}</div>
            <div className='datetime'>{formatDatetime(datetime)}</div>
          </ContentsAndDatetime>
        </ChatContents>
      </Chat>
    )
  ) : (
    <Chat>
      <img src={sampleImg} alt='profile' />
      <span>{content}</span>
    </Chat>
  )
}
