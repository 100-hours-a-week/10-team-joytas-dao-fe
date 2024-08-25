import { Avatar } from 'antd'
import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  TopContainer,
  LeftContainer,
  RightContainer,
  CallTitle,
  CallSubTitle,
  ObjetMaker,
  ObjetActive,
  Active,
  Name,
  ObjetDetailContainer,
  ObjetImg,
  ObjetDescription,
  GoToBtnWrapper,
  CommunityContainer,
  ChattingsWrapper,
  Icon,
  CallToast,
  IconContainer,
} from './ObjetStyles'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import MenuImg from '../../assets/images/menu.png'
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

export default function ObjetDetail() {
  const loungeId = useParams().lid
  const objetId = useParams().oid
  const loggedInUserId = useUserStore((state) => state.userId)

  const [isLoading, setIsLoading] = useState(true)
  const dropRef = useRef<HTMLDivElement>(null)

  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [callingPeople, setCallingPeople] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [creatorId, setCreatorId] = useState(0)

  const [isDropVisible, setIsDropVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isToastVisible, setIsToastVisible] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      fetchData()
      setIsLoading(false)
    }, 1000)
  }, [])

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
      const response = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const data = await response.json()

        setCreator(data.data.nickname)
        setName(data.data.name)
        setDescription(data.data.description)
        setImageUrl(data.data.objet_image)
        setCallingPeople(data.data.calling_user_num)
        setIsActive(data.data.is_active)
        setCreatorId(data.data.user_id)

        // TODO: 오브제 viewers 정보 가져오기
        // TODO: 오브제 채팅 정보 가져오기
      }
    } catch (error) {
      console.log('오브제 정보 가져오기 실패: ', error)
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

      if (response.ok) {
        const data = await response.json()
        console.log('오브제 삭제 정보: ', data)

        alert('오브제 삭제 성공!')
        navigate(`${URL.lounge}/${loungeId}`)
      }
    } catch (error) {
      console.log('오브제 삭제 실패: ', error)
    }
  }

  const handleClickCall = () => {
    if (callingPeople === 9) {
      setTimeout(() => {
        setIsToastVisible(true)
      }, 2000)
      setIsToastVisible(false)
    } else {
      navigate(`${URL.lounge}/${loungeId}/objet/${objetId}/call`)
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
                <ObjetActive>
                  실시간 <Active isActive={isActive} />
                </ObjetActive>
              </CallSubTitle>
            </LeftContainer>
            <RightContainer>
              <Avatar.Group
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
              </Avatar.Group>

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
                            navigate(
                              `${URL.lounge}/${loungeId}/objet/${objetId}/update`
                            )
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
          <CommunityContainer>
            <ChattingsWrapper>
              <ChatMessage
                userName='jamie'
                userId={3}
                profileImg='../../assets/images/sampleObjet.png'
                content='채팅 미리보기 준비중 ~~'
              />
              <ChatMessage
                userName='jamie'
                userId={3}
                profileImg='../../assets/images/sampleObjet.png'
                content='채팅 미리보기 준비중 ~~'
              />
              <ChatMessage
                userName='jamie'
                userId={3}
                profileImg='../../assets/images/sampleObjet.png'
                content='채팅 미리보기 준비중 ~~'
              />
            </ChattingsWrapper>
            <GoToBtnWrapper>
              <GoCommunityBtn
                text='채팅 입장'
                className='chattings'
                onClick={() => {
                  navigate(URL.objetChatting)
                }}
              />
              <GoCommunityBtn
                text='음성통화'
                className='call'
                people={callingPeople}
                onClick={handleClickCall}
              />
            </GoToBtnWrapper>
          </CommunityContainer>

          {isDeleteModalVisible && (
            <DeleteModal
              onClose={() => setIsDeleteModalVisible(false)}
              handleDelete={handleDeleteObjet}
            />
          )}
          {isToastVisible && <CallToast>방이 가득찼습니다!</CallToast>}
        </GloablContainer16>
      </>
    </Layout>
  )
}
