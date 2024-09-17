import { useState, useEffect, useRef } from 'react'
import Layout from '../../components/Layout'
import {
  TopContainer,
  IconContainer,
  LoungeTitle,
  Objets,
  Icon,
} from './LoungeStyles'
import { Skeleton } from 'antd'
import menu from '../../assets/images/menu.webp'
import LoungeObjets from './LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '../../global/globalStyles'
import { useParams } from 'react-router-dom'
import { APIs, URL } from '../../static'
import LoadingLottie from '../../components/lotties/LoadingLottie'
import { LoungeDrop } from '../../components/dropdown/Dropdown'
import useUserStore from '../../store/userStore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {
  DeleteLoungeModal,
  WithDrawLoungeModal,
} from '../../components/modal/Modal'

export default function Lounge() {
  const { lid: loungeId } = useParams<{ lid: string }>()
  const navigate = useNavigate()
  const userId = useUserStore((state) => state.userId)

  const [loungeName, setLoungeName] = useState('')
  const [objets, setObjets] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDrop, setIsDrop] = useState(false)
  const [isOwner, setIsOwner] = useState(false)

  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isWithdrawModalVisible, setIsWithdrawModalVisible] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchLounge = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`${APIs.loungeList}/${loungeId}`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })

        if (!response.ok) {
          toast.error('해당 라운지를 찾을 수 없습니다 😅')
          navigate(`${URL.lounge}`)
        }
        const responseData = await response.json()
        setLoungeName(responseData.data.name)
        setObjets(responseData.data.objets)
        setIsOwner(responseData.data.user_id === userId)
      } catch (error) {
        console.error('Failed to fetch lounge', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLounge()
  }, [loungeId])

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

  const handleClickDelete = async () => {
    setIsClick(true)
    try {
      const response = await fetch(`${APIs.loungeList}/${loungeId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        toast.success('라운지 삭제 성공 😀')
        navigate(URL.lounge)
      } else if (response.status == 400) {
        toast.error('라운지 삭제 실패 😭')
      }
    } catch (error) {
      console.error('Failed to delete lounge', error)
    } finally {
      setIsClick(false)
    }
  }

  const handleClickWithdraw = async () => {
    setIsClick(true)
    try {
      const response = await fetch(`${APIs.loungeList}/${loungeId}/withdraw`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        toast.success('라운지 탈퇴 성공 😀')
        navigate(URL.lounge)
      } else {
        toast.error('라운지 탈퇴 실패 😭')
      }
    } catch (error) {
      console.error('Failed to withdraw lounge', error)
    } finally {
      setIsClick(false)
    }
  }

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
                loungeName
              )}
            </LoungeTitle>
            <IconContainer onClick={() => setIsDrop(!isDrop)}>
              <Icon src={menu} />
              {isDrop && (
                <div ref={dropRef}>
                  <LoungeDrop
                    setIsDeleteModalVisible={setIsDeleteModalVisible}
                    setIsWithdrawModalVisible={setIsWithdrawModalVisible}
                    isOwner={isOwner}
                  />
                </div>
              )}
            </IconContainer>
          </TopContainer>
          <GlobalSubTitle>
            친구를 초대하고 오브제로 추억을 공유해보세요!
          </GlobalSubTitle>
          <Objets>
            {isLoading ? (
              <LoadingLottie />
            ) : (
              <LoungeObjets objets={objets} loungeId={Number(loungeId)} />
            )}
          </Objets>
        </GloablContainer16>
        <DeleteLoungeModal
          isOpen={isDeleteModalVisible}
          onClose={() => setIsDeleteModalVisible(false)}
          handleDelete={handleClickDelete}
          isClick={isClick}
        />{' '}
        <WithDrawLoungeModal
          isOpen={isWithdrawModalVisible}
          onClose={() => setIsDeleteModalVisible(false)}
          handleDelete={handleClickWithdraw}
          isClick={isClick}
        />
      </>
    </Layout>
  )
}
