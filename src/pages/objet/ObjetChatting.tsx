import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  CallSubTitle,
  CallTitle,
  ChatContainer,
  ChatInput,
  ChatInputBox,
  ChatSendButton,
  ChatsWrapper,
  Icon,
  LeftContainer,
  Name,
  // Active,
  // ObjetActive,
  ObjetMaker,
  RightContainer,
  TopContainer,
} from './ObjetStyles'
import { AlertUserEnter, ChatMessage } from '../../components/objet/Chat'
import SendImg from '../../assets/images/send.webp'
import LeaveImg from '../../assets/images/leave.webp'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import useObjetStore from '../../store/objetStore'
import {
  connectToRoom,
  disconnectFromRoom,
  sendMessage,
} from '../../utils/stomp'
import { APIs } from '../../static'
import useUserStore from '../../store/userStore'

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
  // const [isActive, setIsActive] = useState(false)
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const userId = useUserStore((state) => state.userId)
  const userNickname = useUserStore((state) => state.nickname)
  const objetName = useObjetStore((state) => state.objetName)
  const chatToken = useObjetStore((state) => state.chatToken)
  const creatorNickname = useObjetStore((state) => state.objetCreatorNickname)

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      await getMessages()

      if (chatToken) {
        connectToRoom(userId, userNickname, chatToken, handleIncomingMessage)
        // setIsActive(true)
      }
    }

    fetchMessages()
  }, [chatToken])

  const getMessages = async () => {
    try {
      const response = await fetch(
        `${APIs.chat}/${chatToken}/messages?all=true`,
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
        setMessages(data.data)
      }
    } catch (error) {
      console.error('채팅방 전체 메시지 불러오기 실패', error)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const scrollToBottom = () => {
    return (messagesEndRef.current as HTMLElement | null)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  useEffect(scrollToBottom, [messages])

  const handleIncomingMessage = (message: string) => {
    setMessages((prev) => [...prev, JSON.parse(message)])
  }

  const handleSendMessage = () => {
    const messageToSend = messageInput.trim()
    if (!messageToSend) return

    sendMessage(userId, chatToken, messageToSend)
    setMessageInput('')
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
              {/* <ObjetActive>
                실시간 <Active $isActive={isActive} />
              </ObjetActive> */}
            </CallSubTitle>
          </LeftContainer>
          <RightContainer>
            <Icon className='leave' src={LeaveImg} onClick={handleLeaveChat} />
          </RightContainer>
        </TopContainer>
        <ChatContainer>
          <ChatsWrapper>
            {messages.map((message, index) =>
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
                  key={index}
                />
              )
            )}
            <div ref={messagesEndRef} />
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
