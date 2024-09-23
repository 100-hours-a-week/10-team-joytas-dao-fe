import Layout from '@components/Layout'
import { GloablContainer16 } from '@global/globalStyles'
import {
  TopContainer,
  LeftContainer,
  RightContainer,
  CallTitle,
  CreatedInfo,
  ObjetMaker,
  Name,
  Icon,
  IconContainer,
  ObjetDate,
} from './ObjetStyles'
import MenuImg from '@images/menu.webp'
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom'
import { APIs, URL } from '@/static'
import { useEffect, useRef, useState } from 'react'
import { DeleteObjetModal } from '@components/modal/Modal'
import { ModalBackdrop } from '@components/modal/ModalStyles'
import { ObjetDrop } from '@components/dropdown/Dropdown'
import useUserStore from '@store/userStore'
import useObjetStore from '@store/objetStore'
import { toast } from 'react-toastify'
import { extractYearMonthDate } from '@utils/formatDatetime'
import LeaveImg from '@images/leave.webp'
import { disconnectFromRoom } from '@utils/stomp'
import { ObjetContext } from '@utils/objetContext'

export default function Objet() {
  const path = useLocation().pathname
  const isObjetDetail = path.includes('objet')
  const isChatting = path.includes('chatting')
  const [isLoading, setIsLoading] = useState(true)

  const objetId = useParams().oid
  const myUserId = useUserStore((state) => state.userId)
  const [objetData, setObjetData] = useState({
    creator: '',
    creatorId: 0,
    name: '',
    description: '',
    imageUrl: '',
    createdAt: '',
    callingPeople: 0,
    loungeId: 0,
  })

  const dropRef = useRef<HTMLDivElement>(null)
  const [isDropVisible, setIsDropVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const navigate = useNavigate()
  const chatToken = useObjetStore((state) => state.chatToken)

  useEffect(() => {
    if (isObjetDetail) fetchData()
  }, [path])

  const fetchData = async () => {
    try {
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
      setObjetData({
        creator: data.data.owner.nickname,
        creatorId: data.data.owner.user_id,
        name: data.data.name,
        description: data.data.description,
        imageUrl: data.data.objet_image,
        createdAt: data.data.created_at,
        callingPeople: data.data.calling_user_num,
        loungeId: data.data.lounge_id,
      })
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
      navigate(`${URL.lounge}/${objetData.loungeId}`)
    } catch (error) {
      console.error('오브제 삭제 실패: ', error)
    }
  }

  const handleLeaveChat = () => {
    disconnectFromRoom(chatToken)
    navigate(`${URL.objet}/${objetId}`)
  }

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

  if (isLoading) {
    return null
  }

  return (
    <Layout>
      <>
        {isDeleteModalVisible && <ModalBackdrop />}

        <GloablContainer16>
          <TopContainer>
            <LeftContainer>
              <CallTitle>{objetData.name}</CallTitle>
              <CreatedInfo>
                <ObjetMaker>
                  <Name>{objetData.creator}</Name>
                </ObjetMaker>
                |
                <ObjetDate>
                  {extractYearMonthDate(objetData.createdAt)}
                </ObjetDate>
              </CreatedInfo>
            </LeftContainer>
            <RightContainer>
              {isObjetDetail &&
              myUserId === objetData.creatorId &&
              !isChatting ? (
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
              ) : isChatting ? (
                <Icon
                  className='leave'
                  src={LeaveImg}
                  onClick={handleLeaveChat}
                />
              ) : null}
            </RightContainer>
          </TopContainer>

          <ObjetContext.Provider value={objetData}>
            <Outlet />
          </ObjetContext.Provider>

          {isDeleteModalVisible && (
            <DeleteObjetModal
              isOpen={isDeleteModalVisible}
              onClose={() => setIsDeleteModalVisible(false)}
              handleDelete={handleDeleteObjet}
            />
          )}
        </GloablContainer16>
      </>
    </Layout>
  )
}
