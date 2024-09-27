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
import { useRef, useState, useEffect } from 'react'
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
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

export default function Objet() {
  const path = useLocation().pathname
  const isObjetDetail = path.includes('objet')
  const isChatting = path.includes('chatting')

  const objetId = useParams().oid
  const myUserId = useUserStore((state) => state.userId)

  const dropRef = useRef<HTMLDivElement>(null)
  const [isDropVisible, setIsDropVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)

  const navigate = useNavigate()
  const chatToken = useObjetStore((state) => state.chatToken)

  const { data: objetData, isLoading } = useQuery(
    ['objetData', objetId],
    async () => {
      const response = await axios.get(`${APIs.objet}/${objetId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })

      return response.data.data
    },
    {
      onError: () => {
        toast.error('해당 오브제를 찾을 수 없습니다 😅')
        navigate(`${URL.lounge}`)
      },
    }
  )

  const mutation = useMutation(
    async () => {
      await axios.delete(`${APIs.objet}/${objetId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })
    },
    {
      onSuccess: () => {
        toast.success('오브제 삭제 성공 🪐')
        navigate(`${URL.lounge}/${objetData.lounge_id}`)
      },
      onError: () => {
        toast.error('오브제 삭제 실패 😭')
      },
    }
  )

  const handleDeleteObjet = () => {
    mutation.mutate()
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
                  <Name>{objetData.owner.nickname}</Name>
                </ObjetMaker>
                |
                <ObjetDate>
                  {extractYearMonthDate(objetData.created_at)}
                </ObjetDate>
              </CreatedInfo>
            </LeftContainer>
            <RightContainer>
              {isObjetDetail &&
              myUserId === objetData.owner.user_id &&
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
