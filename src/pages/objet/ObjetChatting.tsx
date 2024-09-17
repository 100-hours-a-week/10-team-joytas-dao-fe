import Layout from '@components/Layout'
import { GloablContainer16 } from '@global/globalStyles'
import {
  CallSubTitle,
  CallTitle,
  ChatContainer,
  ChatInput,
  ChatInputBox,
  ChatSendButton,
  ChatsWrapper,
  ChattingDate,
  ChattingGroupByDate,
  Icon,
  LeftContainer,
  Name,
  ObjetMaker,
  RightContainer,
  TopContainer,
} from './ObjetStyles'
import { AlertUserEnter, ChatMessage } from '@components/objet/Chat'
import SendImg from '@images/send.webp'
import LeaveImg from '@images/leave.webp'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import useObjetStore from '@store/objetStore'
import { connectToRoom, disconnectFromRoom, sendMessage } from '@utils/stomp'
import { APIs } from '@/static'
import useUserStore from '@store/userStore'
import { CalendarOutlined } from '@ant-design/icons'
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'

interface Message {
  id: string
  type: string
  sender_name: string
  sender_id: number
  sender_profile_url: string
  message: string
  created_at: string
}

export default function ObjetChatting() {
  const navigate = useNavigate()
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const userId = useUserStore((state) => state.userId)
  const userNickname = useUserStore((state) => state.nickname)
  const objetName = useObjetStore((state) => state.objetName)
  const chatToken = useObjetStore((state) => state.chatToken)
  const creatorNickname = useObjetStore((state) => state.objetCreatorNickname)

  const chatRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(false)

  const { ref: firstMessageRef } = useIntersectionObserver(
    async (entry, observer) => {
      if (entry.isIntersecting && !loading && chatRef.current) {
        observer.unobserve(entry.target)
        await getMoreMessages(
          chatRef.current.scrollHeight,
          chatRef.current.scrollTop
        )
      }
    },
    { root: chatRef.current, threshold: 1 }
  )

  useEffect(() => {
    const fetchMessages = async () => {
      if (chatToken) {
        connectToRoom(userId, userNickname, chatToken, handleIncomingMessage)
      }

      await getMessages()
    }

    fetchMessages()
  }, [chatToken])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }

    return () => {
      disconnectFromRoom(chatToken)
    }
  }, [])

  const getMessages = async () => {
    try {
      const response = await fetch(`${APIs.chat}/${chatToken}/messages`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setMessages(data.data.messages)
        setHasMore(data.data.has_next)
      }
    } catch (error) {
      console.error('채팅방 전체 메시지 불러오기 실패', error)
    } finally {
      setLoading(false)
    }
  }

  const getMoreMessages = async (
    prevScrollHeight: number,
    prevScrollTop: number
  ) => {
    const lastMessageId = messages[0].id
    if (!lastMessageId || !hasMore || loading) return

    try {
      setLoading(true)
      const response = await fetch(
        `${APIs.chat}/${chatToken}/messages?cursorId=${lastMessageId}&limit=20`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )

      if (response.ok) {
        const data = await response.json()

        setMessages((prev) => [...data.data.messages, ...prev])
        setHasMore(data.data.has_next)

        setTimeout(() => {
          if (chatRef.current) {
            const nextScrollHeight = chatRef.current.scrollHeight
            chatRef.current.scrollTop =
              nextScrollHeight - prevScrollHeight + prevScrollTop - 20
          }
        }, 0)
      }
    } catch (error) {
      console.error('이전 메시지 불러오기 실패', error)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }

  useEffect(() => {
    if (messages.length <= 21) {
      scrollToBottom()
    }
  }, [messages])

  const handleIncomingMessage = (message: string) => {
    setMessages((prev) => [...prev, JSON.parse(message)])
  }

  const handleSendMessage = () => {
    const messageToSend = messageInput.trim()
    if (!messageToSend) return

    sendMessage(userId, chatToken, messageToSend)
    setMessageInput('')
    scrollToBottom()
  }

  const handleLeaveChat = () => {
    disconnectFromRoom(chatToken)
    navigate(-1)
  }

  return (
    <Layout>
      <GloablContainer16>
        <TopContainer>
          <LeftContainer>
            <CallTitle>{objetName}</CallTitle>
            <CallSubTitle>
              <ObjetMaker>
                만든이 <Name>{creatorNickname}</Name>
              </ObjetMaker>
            </CallSubTitle>
          </LeftContainer>
          <RightContainer>
            <Icon className='leave' src={LeaveImg} onClick={handleLeaveChat} />
          </RightContainer>
        </TopContainer>
        <ChatContainer>
          <ChatsWrapper ref={chatRef}>
            {renderChattingList(messages, firstMessageRef)}
          </ChatsWrapper>
          <ChatInputBox>
            <ChatInput
              placeholder='채팅을 입력해주세요.'
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <ChatSendButton src={SendImg} onClick={handleSendMessage} />
          </ChatInputBox>
        </ChatContainer>
      </GloablContainer16>
    </Layout>
  )
}

const renderChattingList = (
  chattingList: Message[],
  firstMessageRef: React.RefObject<HTMLDivElement>
) => {
  const groupedChattings = groupByDate(chattingList)
  const dates = Object.keys(groupedChattings)

  return dates.map((date, index) => {
    return (
      dates.length > 0 && (
        <ChattingGroupByDate key={date}>
          <ChattingDate>
            <CalendarOutlined />
            &nbsp;&nbsp;
            {date}
          </ChattingDate>
          {groupedChattings[date]
            .slice()
            .map((message: Message, msgIndex) =>
              (message.message && message.type === 'ENTER') ||
              message.type === 'LEAVE' ? (
                <AlertUserEnter message={message.message} key={index} />
              ) : (
                <ChatMessage
                  userName={message.sender_name}
                  userId={message.sender_id}
                  profileImg={message.sender_profile_url}
                  content={message.message}
                  datetime={message.created_at}
                  key={message.id}
                  innerRef={msgIndex === 0 ? firstMessageRef : null}
                />
              )
            )}
        </ChattingGroupByDate>
      )
    )
  })
}

const groupByDate = (chattingList: Message[]): Record<string, Message[]> => {
  return chattingList.reduce(
    (acc: Record<string, Message[]>, message: Message) => {
      const date = new Date(message.created_at).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
      })

      const formattedDate = date.replace(/(\s)([가-힣]+)$/, ' ($2)')

      if (!acc[formattedDate]) {
        acc[formattedDate] = []
      }

      acc[formattedDate].push(message)
      return acc
    },
    {}
  )
}
