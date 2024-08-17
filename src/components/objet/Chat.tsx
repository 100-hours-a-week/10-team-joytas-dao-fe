import {
  Chat,
  ChatContents,
  ContentsAndDatetime,
  MyChat,
  UserName,
} from './ChatStyles'
import sampleImg from '../../assets/images/sampleObjet.png'

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

  const formatDatetime = (datetime: string) => {
    const dateObj = new Date(datetime)
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()

    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()

    const isAfternoon = hours >= 12
    const formattedHours = hours % 12 || 12 // 0시는 12시로 표시
    const period = isAfternoon ? '오후' : '오전'

    // "12시 00분"인 경우 "12시"로만 표시
    const timeString =
      minutes === 0 ? `${formattedHours}시` : `${formattedHours}시 ${minutes}분`

    return `${year}년 ${month}월 ${day}일\n${period} ${timeString}`
  }

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
