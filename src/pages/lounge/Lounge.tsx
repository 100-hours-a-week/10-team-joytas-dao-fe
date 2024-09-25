import { useState, useEffect, useRef } from 'react'
import Layout from '@components/Layout'
import {
  TopContainer,
  IconContainer,
  LoungeTitle,
  Objets,
  Icon,
} from './LoungeStyles'
import { Skeleton } from 'antd'
import menu from '@images/menu.webp'
import LoungeObjets from './LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '@global/globalStyles'
import { useParams, useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'
import LoadingLottie from '@components/lotties/LoadingLottie'
import { LoungeDrop } from '@components/dropdown/Dropdown'
import useUserStore from '@store/userStore'
import { toast } from 'react-toastify'
import { useMediaQuery } from '@uidotdev/usehooks'
import MobileLoungeObjets from './MobileLoungeObjets'
import { DeleteLoungeModal, WithDrawLoungeModal } from '@components/modal/Modal'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const fetchLounge = async (loungeId: string) => {
  const response = await axios.get(`${APIs.loungeList}/${loungeId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response.data.data
}

const fetchLoungeObjets = async (loungeId: string) => {
  const response = await axios.get(
    `${APIs.objet}?lounge_id=${loungeId}&is_owner=false`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response.data.data
}

const deleteLounge = async (loungeId: string) => {
  const response = await axios.delete(`${APIs.loungeList}/${loungeId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response
}

const withdrawLounge = async (loungeId: string) => {
  const response = await axios.post(
    `${APIs.loungeList}/${loungeId}/withdraw`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response
}

export default function Lounge() {
  const { lid: loungeId } = useParams<{ lid: string }>()
  const isMobile = useMediaQuery('only screen and (max-width : 425px)')
  const navigate = useNavigate()
  const userId = useUserStore((state) => state.userId)
  const queryClient = useQueryClient()

  const [isDrop, setIsDrop] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isWithdrawModalVisible, setIsWithdrawModalVisible] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  const { data: loungeData, isLoading } = useQuery(
    ['lounge', loungeId],
    () => fetchLounge(loungeId!),
    {
      onError: () => {
        toast.error('해당 라운지를 찾을 수 없습니다 😅')
        navigate(`${URL.lounge}`)
      },
    }
  )

  const { data: objets } = useQuery(
    ['loungeObjet', loungeId],
    () => fetchLoungeObjets(loungeId!),
    {
      onError: () => {
        toast.error('해당 라운지의 오브제가 없습니다 😅')
      },
    }
  )

  const deleteLoungeMutation = useMutation(() => deleteLounge(loungeId!), {
    onSuccess: () => {
      toast.success('라운지 삭제 성공 😀')
      queryClient.invalidateQueries('lounge')
      navigate(URL.lounge)
    },
    onError: () => {
      toast.error('라운지 삭제 실패 😭')
    },
    onSettled: () => {
      setIsClick(false)
    },
  })

  const withdrawLoungeMutation = useMutation(() => withdrawLounge(loungeId!), {
    onSuccess: () => {
      toast.success('라운지 탈퇴 성공 😀')
      queryClient.invalidateQueries('lounge')
      navigate(URL.lounge)
    },
    onError: () => {
      toast.error('라운지 탈퇴 실패 😭')
    },
    onSettled: () => {
      setIsClick(false)
    },
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
        setIsDrop(false)
      }
    }

    if (isDrop) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDrop])

  return (
    <Layout>
      <>
        <GloablContainer16>
          <TopContainer>
            <LoungeTitle>
              {isLoading ? (
                <Skeleton.Input
                  active
                  style={{
                    backgroundColor: '#b7d1ea',
                    opacity: '70%',
                    width: '150px',
                    height: '24px',
                  }}
                />
              ) : (
                loungeData?.name
              )}
            </LoungeTitle>
            <IconContainer onClick={() => setIsDrop(!isDrop)}>
              <Icon src={menu} />
              {isDrop && (
                <div ref={dropRef}>
                  <LoungeDrop
                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                    setIsWithdrawModalVisible={setIsWithdrawModalVisible}
                    isOwner={loungeData?.user_id === userId}
                  />
                </div>
              )}
            </IconContainer>
          </TopContainer>
          <GlobalSubTitle>
            친구를 초대하고 오브제로 추억을 공유해보세요!
          </GlobalSubTitle>
          <Objets style={{ alignItems: `${isMobile && 'flex-start'}` }}>
            {isLoading ? (
              <LoadingLottie />
            ) : isMobile ? (
              <MobileLoungeObjets
                objets={objets || []}
                loungeId={Number(loungeId)}
              />
            ) : (
              <LoungeObjets objets={objets || []} loungeId={Number(loungeId)} />
            )}
          </Objets>
        </GloablContainer16>
        <DeleteLoungeModal
          isOpen={isDeleteModalVisible}
          onClose={() => setIsDeleteModalVisible(false)}
          handleDelete={() => {
            setIsClick(true)
            deleteLoungeMutation.mutate()
          }}
          isClick={isClick}
        />
        <WithDrawLoungeModal
          isOpen={isWithdrawModalVisible}
          onClose={() => setIsWithdrawModalVisible(false)}
          handleDelete={() => {
            setIsClick(true)
            withdrawLoungeMutation.mutate()
          }}
          isClick={isClick}
        />
      </>
    </Layout>
  )
}
