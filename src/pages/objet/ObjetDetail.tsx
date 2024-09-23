import {
  ObjetDetailContainer,
  ObjetImg,
  ObjetDescription,
  GoToBtnWrapper,
  CommunityContainer,
  ChattingsWrapper,
  ChattingText,
  Divider,
  NoChatting,
} from './ObjetStyles'
import GoCommunityBtn from '@components/objet/GoCommunityBtn'
import { useParams, useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'
import { useEffect, useState } from 'react'
import { ChatMessage } from '@components/objet/Chat'
import LoadingLottie from '@components/lotties/LoadingLottie'
import useObjetStore from '@store/objetStore'
import { toast } from 'react-toastify'
import { useObjetContext } from '@/utils/objetContext'

interface Message {
  id: string
  type: string
  sender_name: string
  sender_id: number
  sender_profile_url: string
  message: string
  created_at: string
}

export default function ObjetDetail() {
  const objetId = useParams().oid
  const objetContext = useObjetContext()
  const { description, imageUrl, callingPeople } = objetContext || {}

  const [isLoading, setIsLoading] = useState(true)
  const [messagePreviews, setMessagePreviews] = useState<Message[]>([])
  const setChatToken = useObjetStore((state) => state.setChatToken)
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [objetId])

  const fetchData = async () => {
    try {
      // - 채팅방 토큰 가져오기
      const chatRes = await fetch(`${APIs.chat}/${objetId}/room-token`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (chatRes.ok) {
        const data = await chatRes.json()
        setChatToken(data.data.room_token)

        // - 채팅방 미리보기 가져오기
        const chatPreviewRes = await fetch(
          `${APIs.chat}/${data.data.room_token}/messages/recent`,
          {
            method: 'GET',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          }
        )

        if (chatPreviewRes.ok) {
          const chatPreviewData = await chatPreviewRes.json()
          setMessagePreviews(chatPreviewData.data.messages)
        }
      }
    } catch (error) {
      console.error('오브제 정보 가져오기 실패: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClickChat = async () => {
    setChatToken(useObjetStore.getState().chatToken)
    navigate(`${URL.objet}/${objetId}/chatting`)
  }

  const handleClickCall = () => {
    if (callingPeople && callingPeople >= 9) {
      toast.error('방이 가득찼습니다! 🥲')
    } else {
      navigate(`${URL.objet}/${objetId}/call`)
    }
  }

  if (isLoading) {
    return (
      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <LoadingLottie />
      </div>
    )
  }

  return (
    <>
      <ObjetDetailContainer>
        <ObjetImg src={imageUrl} />
        <ObjetDescription>{description}</ObjetDescription>
      </ObjetDetailContainer>
      <Divider />

      <div style={{ paddingBottom: '80px' }}>
        <ChattingText>| &nbsp; 채팅 미리보기</ChattingText>
        {messagePreviews.length < 1 ? (
          <>
            <NoChatting>채팅 내역이 없습니다.</NoChatting>
            <GoToBtnWrapper style={{ marginTop: '30px' }}>
              <GoCommunityBtn
                text='채팅 입장'
                className='chattings'
                onClick={handleClickChat}
              />
              <GoCommunityBtn
                text='음성통화'
                className='call'
                people={callingPeople}
                onClick={handleClickCall}
              />
            </GoToBtnWrapper>
          </>
        ) : (
          <CommunityContainer>
            <ChattingsWrapper>
              {messagePreviews.map((message, index) => (
                <ChatMessage
                  userName={message.sender_name}
                  userId={message.sender_id}
                  profileImg={message.sender_profile_url}
                  content={message.message}
                  key={index}
                />
              ))}
            </ChattingsWrapper>
            <GoToBtnWrapper>
              <GoCommunityBtn
                text='채팅 입장'
                className='chattings'
                onClick={handleClickChat}
              />
              <GoCommunityBtn
                text='음성통화'
                className='call'
                people={callingPeople || 0}
                onClick={handleClickCall}
              />
            </GoToBtnWrapper>
          </CommunityContainer>
        )}
      </div>
    </>
  )
}
