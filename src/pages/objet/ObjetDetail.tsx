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
import { ChatMessage } from '@components/objet/Chat'
import LoadingLottie from '@components/lotties/LoadingLottie'
import useObjetStore from '@store/objetStore'
import { toast } from 'react-toastify'
import { useObjetContext } from '@/utils/objetContext'
import { useQuery } from 'react-query'
import axios from 'axios'

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
  const {
    description,
    objet_image: imageUrl,
    callingPeople,
  } = objetContext || {}

  const setChatToken = useObjetStore((state) => state.setChatToken)
  const navigate = useNavigate()

  const { data: chatData, isLoading: isChatLoading } = useQuery(
    ['chatData', objetId],
    async () => {
      const chatRes = await axios.get(`${APIs.chat}/${objetId}/room-token`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })

      setChatToken(chatRes.data.data.room_token)

      const chatPreviewRes = await axios.get(
        `${APIs.chat}/${chatRes.data.data.room_token}/messages/recent`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )

      return {
        roomToken: chatRes.data.data.room_token,
        messages: chatPreviewRes.data.data.messages,
      }
    },
    {
      onError: (error) => {
        console.error('오브제 정보 가져오기 실패: ', error)
        toast.error('오브제 정보를 가져오지 못했습니다.')
      },
    }
  )

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

  if (isChatLoading) {
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
        {chatData?.messages.length < 1 ? (
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
              {chatData?.messages.map((message: Message, index: number) => (
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
