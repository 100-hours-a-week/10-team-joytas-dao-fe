import Layout from '../../components/Layout'
import LoungeObjets from '../lounge/LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '../../global/globalStyles'
import {
  IconContainer,
  LoungeTitle,
  Objets,
  TopContainer,
} from '../lounge/LoungeStyles'
import { Icon } from './MyRoomStyles'
import { useEffect, useState } from 'react'
import MoreImg from '../../assets/images/more.png'
import { ModalBackdrop } from '../../components/modal/ModalStyles'
import { LoungeListModal } from '../../components/modal/Modal'
import { APIs } from '../../static'
import LoadingLottie from '../../components/lotties/LoadingLottie'

interface Lounge {
  lounge_id: number
  name: string
  type: string
}

export default function MyRoomObjet() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [objets, setObjets] = useState([])
  const [lounges, setLounges] = useState<Lounge[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLounge, setSelectedLounge] = useState<Lounge>({
    lounge_id: 0,
    name: '전체',
    type: '전체',
  })

  useEffect(() => {
    fetchObjetsAll()
    fetchLounge()
  }, [])

  const fetchObjetsAll = async () => {
    try {
      const response = await fetch(`${APIs.objet}/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.ok) {
        const responseData = await response.json()
        setObjets(responseData.data)
      }
    } catch (error) {
      console.error('마이룸 전체 오브제 조회 실패', error)
    }
  }

  const fetchObjetsByLounge = async (loungeId: number) => {
    if (loungeId === 0) {
      // 전체
      fetchObjetsAll()
      return
    }

    try {
      const response = await fetch(
        `${APIs.objet}?lounge_id=${loungeId}&sharer=true`,
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
        const responseData = await response.json()
        setObjets(responseData.data.objets)
      }
    } catch (error) {
      console.error('마이룸 라운지별 오브제 조회 실패', error)
    }
  }

  const fetchLounge = async () => {
    try {
      const response = await fetch(`${APIs.loungeList}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const responseData = await response.json()

        setLounges([
          { lounge_id: 0, name: '전체', type: '전체' },
          ...responseData.data,
        ])
      }
    } catch (error) {
      console.error('Failed to fetch lounge', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSelectLounge = (loungeId: number) => {
    setIsModalOpen(false)
    fetchObjetsByLounge(loungeId)
    const selectedLounge = lounges.find(
      (lounge) => lounge.lounge_id === loungeId
    )
    if (selectedLounge) {
      setSelectedLounge(selectedLounge)
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
        {isModalOpen && <ModalBackdrop />}

        <GloablContainer16>
          <TopContainer>
            <LoungeTitle>{selectedLounge.name}</LoungeTitle>
            <IconContainer>
              <Icon
                src={MoreImg}
                onClick={() => {
                  setIsModalOpen(true)
                }}
              />
            </IconContainer>
          </TopContainer>
          <GlobalSubTitle>나에게 전달된 오브제를 확인해보세요!</GlobalSubTitle>
          <Objets>
            <LoungeObjets objets={objets} />
          </Objets>

          {isModalOpen && (
            <LoungeListModal
              onClose={() => setIsModalOpen(false)}
              handleSelectLounge={handleSelectLounge}
              selectedLounge={selectedLounge.lounge_id}
              lounges={lounges}
            />
          )}
        </GloablContainer16>
      </>
    </Layout>
  )
}
