import {
  Chat,
  ChatContents,
  ContentsAndDatetime,
  EnterAlert,
  MyChat,
  UserName,
} from './ChatStyles'
import { formatDatetime } from '../../utils/formatDatetime'
import useUserStore from '../../store/userStore'

interface ChattingProps {
  userName: string
  userId: number
  profileImg: string
  content: string
  datetime?: string
}

interface EnterAlertProps {
  message: string
}

export function ChatMessage({
  userName,
  userId,
  profileImg,
  content,
  datetime,
}: ChattingProps) {
  const myUserId = useUserStore((state) => state.userId)
  const isMyChat = userId === myUserId

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
        <img src={profileImg} alt='profile' />
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
    <Chat style={{ gap: 0 }}>
      <img src={profileImg} alt='profile' />
      <ChatContents style={{ marginLeft: '5px' }}>
        <UserName style={{ fontSize: '13px' }}>{userName}</UserName>
        <div style={{ fontSize: '12px' }} className='preview'>
          {content}
        </div>
      </ChatContents>
    </Chat>
  )
}

export function AlertUserEnter({ message }: EnterAlertProps) {
  return (
    <EnterAlert>
      <span>{message}</span>
    </EnterAlert>
  )
}
