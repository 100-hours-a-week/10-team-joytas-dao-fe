import Layout from '../../components/Layout'
import {
  TopContainer,
  IconContainer,
  Icon,
  LoungeTitle,
  Objets,
} from './LoungeStyles'
import { Skeleton } from 'antd'
import invite from '../../assets/images/invite.png'
import plus from '../../assets/images/plus.png'
import LoungeObjets from './LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '../../global/globalStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { APIs, URL } from '../../static'
import { useState, useEffect } from 'react'
import LoadingLottie from '../../components/lotties/LoadingLottie'

export default function Lounge() {
  const loungeId = useParams().lid
  const navigate = useNavigate()

  const [loungeName, setLoungeName] = useState('')
  const [objets, setObjets] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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

        if (response.status === 200) {
          const responseData = await response.json()
          setLoungeName(responseData.data.name)
          setObjets(responseData.data.objets)
        }
      } catch (error) {
        console.error('Failed to fetch lounge', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLounge()
  }, [])

  return (
    <Layout>
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
          <IconContainer>
            <Icon
              src={invite}
              onClick={() => {
                navigate(URL.loungeInvite)
              }}
            />
            <Icon
              src={plus}
              onClick={() => {
                navigate(`${URL.lounge}/${loungeId}/objet/new`)
              }}
            />
          </IconContainer>
        </TopContainer>
        <GlobalSubTitle>
          친구를 초대하고 오브제로 추억을 공유해보세요!
        </GlobalSubTitle>
        <Objets>
          {isLoading ? (
            <LoadingLottie />
          ) : (
            <LoungeObjets type='lounge' objets={objets} />
          )}
        </Objets>
      </GloablContainer16>
    </Layout>
  )
}
