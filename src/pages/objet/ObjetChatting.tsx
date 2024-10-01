import {
  ChatContainer,
  ChatInput,
  ChatInputBox,
  ChatSendButton,
  ChatsWrapper,
  ChattingDate,
  ChattingGroupByDate,
} from './ObjetStyles'
import { AlertUserEnter, ChatMessage } from '@components/objet/Chat'
import SendImg from '@images/send.webp'
import { useEffect, useRef, useState } from 'react'
import { connectToRoom, disconnectFromRoom } from '@utils/stomp'
import { APIs } from '@/static'
import { CalendarOutlined } from '@ant-design/icons'
import { useIntersectionObserver } from '@hooks/useIntersectionObserver'
import axios from 'axios'
import useObjetStore from '@/store/objetStore'

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
  const chatToken = useObjetStore((state) => state.chatToken)
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const chatRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [hasMore, setHasMore] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(true)

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
        connectToRoom(chatToken, handleEnterChat, handleIncomingMessage)
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
      disconnectFromRoom(handleLeaveChat)
      scrollToBottom()
    }
  }, [])

  const getMessages = async () => {
    try {
      const response = await axios.get(`${APIs.chat}/${chatToken}/messages`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })

      if (response.status === 200) {
        setMessages(response.data.data.messages)
        setHasMore(response.data.data.has_next)
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
      const response = await axios.get(
        `${APIs.chat}/${chatToken}/messages?cursorId=${lastMessageId}&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        setMessages((prev) => [...response.data.data.messages, ...prev])
        setHasMore(response.data.data.has_next)

        setTimeout(() => {
          if (chatRef.current) {
            const nextScrollHeight = chatRef.current.scrollHeight
            chatRef.current.scrollTop =
              nextScrollHeight - prevScrollHeight + prevScrollTop
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
    if (!chatRef.current) return

    setIsAtBottom(chatRef.current.scrollTop >= chatRef.current.clientHeight)

    if (messages.length <= 21 || isAtBottom) {
      scrollToBottom()
    }
  }, [messages])

  const handleEnterChat = async () => {
    try {
      await axios.post(
        `${APIs.chat}/chat/greet`,
        {
          message: null,
          type: 'ENTER',
          room_token: chatToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )
    } catch (error) {
      console.error('채팅방 입장 실패', error)
    }
  }

  const handleIncomingMessage = (message: string) => {
    setMessages((prev) => [...prev, JSON.parse(message)])
  }

  const handleSendMessage = async () => {
    const messageToSend = messageInput.trim()
    if (!messageToSend) return

    if (chatToken) {
      await axios.post(
        `${APIs.chat}/chat`,
        {
          message: messageToSend,
          type: 'TALK',
          room_token: chatToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )
    }
    setMessageInput('')
    scrollToBottom()
  }

  const handleLeaveChat = async () => {
    try {
      await axios.post(
        `${APIs.chat}/chat/greet`,
        {
          message: null,
          type: 'LEAVE',
          room_token: chatToken,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )
    } catch (error) {
      console.error('채팅방 퇴장 실패', error)
    }
  }

  return (
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
