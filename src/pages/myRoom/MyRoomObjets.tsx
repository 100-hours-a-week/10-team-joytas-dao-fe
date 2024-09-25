import Layout from '@components/Layout'
import LoungeObjets from '../lounge/LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '@global/globalStyles'
import {
  IconContainer,
  LoungeTitle,
  Objets,
  TopContainer,
} from '../lounge/LoungeStyles'
import { Icon } from './MyRoomStyles'
import { useState } from 'react'
import MoreImg from '@assets/images/more.webp'
import { ModalBackdrop } from '@components/modal/ModalStyles'
import { LoungeListModal } from '@components/modal/Modal'
import { APIs } from '@/static'
import LoadingLottie from '@components/lotties/LoadingLottie'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useMediaQuery } from '@uidotdev/usehooks'
import MobileLoungeObjets from '../lounge/MobileLoungeObjets'

interface Lounge {
  lounge_id: number
  name: string
  type: string
}

export default function MyRoomObjet() {
  const isMobile = useMediaQuery('only screen and (max-width : 425px)')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedLounge, setSelectedLounge] = useState<Lounge>({
    lounge_id: 0,
    name: '전체',
    type: '전체',
  })
  const [loungeId, setLoungeId] = useState(0)

  const fetchLoungeObjets = async (loungeId: number) => {
    if (loungeId === 0) {
      const response = await axios.get(`${APIs.objet}/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })
      return response.data.data
    } else {
      const response = await axios.get(
        `${APIs.objet}?lounge_id=${loungeId}&is_owner=true`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          withCredentials: true,
        }
      )
      return response.data.data
    }
  }

  const fetchLounges = async () => {
    const response = await axios.get(APIs.loungeList, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    })
    return [{ lounge_id: 0, name: '전체', type: '전체' }, ...response.data.data]
  }

  const {
    data: objets,
    isLoading: isObjetsLoading,
    refetch: refetchObjets,
  } = useQuery(['objets', loungeId], () => fetchLoungeObjets(loungeId), {
    enabled: true,
  })

  const { data: lounges, isLoading: isLoungesLoading } = useQuery<Lounge[]>(
    'lounges',
    () => fetchLounges()
  )

  const handleSelectLounge = (loungeId: number) => {
    setIsModalOpen(false)
    const selected = lounges?.find(
      (lounge: Lounge) => lounge.lounge_id === loungeId
    )
    if (selected) {
      setSelectedLounge(selected)
      setLoungeId(loungeId)
      refetchObjets()
    }

    if (isLoungesLoading) {
      return (
        <Layout>
          <div
            style={{ display: 'flex', height: '100%', alignItems: 'center' }}
          >
            <LoadingLottie />
          </div>
        </Layout>
      )
    }
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
          {!isObjetsLoading && objets ? (
            <Objets style={{ alignItems: `${isMobile && 'flex-start'}` }}>
              {isMobile ? (
                <MobileLoungeObjets
                  objets={objets || []}
                  loungeId={Number(selectedLounge.lounge_id)}
                />
              ) : (
                <LoungeObjets
                  objets={objets || []}
                  loungeId={Number(selectedLounge.lounge_id)}
                />
              )}
            </Objets>
          ) : (
            <LoadingLottie />
          )}

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
