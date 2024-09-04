// import { Avatar } from 'antd'
import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  TopContainer,
  LeftContainer,
  RightContainer,
  CallTitle,
  CallSubTitle,
  ObjetMaker,
  // ObjetActive,
  // Active,
  Name,
  ObjetDetailContainer,
  ObjetImg,
  ObjetDescription,
  GoToBtnWrapper,
  CommunityContainer,
  ChattingsWrapper,
  Icon,
  IconContainer,
  ChattingText,
  Divider,
  NoChatting,
} from './ObjetStyles'
// import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import MenuImg from '../../assets/images/menu.webp'
import GoCommunityBtn from '../../components/objet/GoCommunityBtn'
import { useParams, useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static'
import { useEffect, useRef, useState } from 'react'
import { ChatMessage } from '../../components/objet/Chat'
import { DeleteModal } from '../../components/modal/Modal'
import { ModalBackdrop } from '../../components/modal/ModalStyles'
import LoadingLottie from '../../components/lotties/LoadingLottie'
import { ObjetDrop } from '../../components/dropdown/Dropdown'
import useUserStore from '../../store/userStore'
import useObjetStore from '../../store/objetStore'
import { toast } from 'react-toastify'

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
  const [loungeId, setLoungeId] = useState(0)
  const loggedInUserId = useUserStore((state) => state.userId)

  const [isLoading, setIsLoading] = useState(true)
  const dropRef = useRef<HTMLDivElement>(null)

  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [messagePreviews, setMessagePreviews] = useState<Message[]>([])
  const [callingPeople, setCallingPeople] = useState(0)
  // const [isActive, setIsActive] = useState(false)
  const [creatorId, setCreatorId] = useState(0)

  const setChatToken = useObjetStore((state) => state.setChatToken)
  const setObjetName = useObjetStore((state) => state.setObjetName)
  const setObjetCreatorNickname = useObjetStore(
    (state) => state.setObjetCreatorNickname
  )
  const setObjetCreatorId = useObjetStore((state) => state.setObjetCreatorId)

  const [isDropVisible, setIsDropVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [objetId])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
        setIsDropVisible(false)
      }
    }

    if (isDropVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropVisible])

  const fetchData = async () => {
    try {
      // 오브제 정보 가져오기
      const objRes = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (!objRes.ok) {
        toast.error('해당 오브제를 찾을수 없습니다 😅')
        navigate(`${URL.lounge}`)
      }

      const data = await objRes.json()

      setLoungeId(data.data.lounge_id)

      setCreator(data.data.nickname)
      setName(data.data.name)
      setDescription(data.data.description)
      setImageUrl(data.data.objet_image)
      setCallingPeople(data.data.calling_user_num)
      // setIsActive(data.data.is_active)
      setCreatorId(data.data.user_id)

      setObjetName(data.data.name)
      setObjetCreatorNickname(data.data.nickname)
      setObjetCreatorId(data.data.user_id)

      // 채팅 미리보기
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
          `${APIs.chat}/${data.data.room_token}/messages?all=false`,
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
          setMessagePreviews(chatPreviewData.data)
        }
      }

      // TODO: 오브제 viewers 정보 가져오기
    } catch (error) {
      console.error('오브제 정보 가져오기 실패: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteObjet = async () => {
    try {
      const response = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (!response.ok) {
        toast.error('오브제 삭제 실패 😭')
      }
      toast.success('오브제 삭제 성공 🪐')
      navigate(`${URL.lounge}/${loungeId}`)
    } catch (error) {
      console.error('오브제 삭제 실패: ', error)
    }
  }

  const handleClickChat = async () => {
    setChatToken(useObjetStore.getState().chatToken)
    navigate(`${URL.objet}/${objetId}/chatting`)
  }

  const handleClickCall = () => {
    if (callingPeople >= 9) {
      toast.error('방이 가득찼습니다! 🥲')
    } else {
      navigate(`${URL.objet}/${objetId}/call`)
    }
  }

  if (isLoading) {
    return (
      <Layout>
        <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
          <LoadingLottie />
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <>
        {isDeleteModalVisible && <ModalBackdrop />}

        <GloablContainer16>
          <TopContainer>
            <LeftContainer>
              <CallTitle>{name}</CallTitle>
              <CallSubTitle>
                <ObjetMaker>
                  만든이 <Name>{creator}</Name>
                </ObjetMaker>
                {/* <ObjetActive>
                  실시간 <Active $isActive={isActive} />
                </ObjetActive> */}
              </CallSubTitle>
            </LeftContainer>
            <RightContainer>
              {/* <Avatar.Group
                max={{
                  count: 3,
                  style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                }}
              >
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
                <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group> */}

              {loggedInUserId === creatorId && (
                <>
                  <IconContainer>
                    <Icon
                      className='menu'
                      src={MenuImg}
                      onClick={() => setIsDropVisible(!isDropVisible)}
                    />
                    {isDropVisible && (
                      <div ref={dropRef} onClick={(e) => e.stopPropagation()}>
                        <ObjetDrop
                          onClickUpdate={() =>
                            navigate(`${URL.objet}/${objetId}/update`)
                          }
                          onClickDelete={() => {
                            setIsDeleteModalVisible(true)
                            setIsDropVisible(false)
                          }}
                        />
                      </div>
                    )}
                  </IconContainer>
                </>
              )}
            </RightContainer>
          </TopContainer>
          <ObjetDetailContainer>
            <ObjetImg src={imageUrl} />
            <ObjetDescription>{description}</ObjetDescription>
          </ObjetDetailContainer>
          <Divider />
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
                  people={callingPeople}
                  onClick={handleClickCall}
                />
              </GoToBtnWrapper>
            </CommunityContainer>
          )}
          {isDeleteModalVisible && (
            <DeleteModal
              onClose={() => setIsDeleteModalVisible(false)}
              handleDelete={handleDeleteObjet}
            />
          )}
        </GloablContainer16>
      </>
    </Layout>
  )
}
