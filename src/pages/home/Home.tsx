import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  Greetings,
  WelcomeMessage,
  Nickname,
  Banner,
  MyObjetContainer,
  MyObjetTitle,
  LottieContainer,
} from './HomeStyles'
import ObjetPreview from '../../components/objet/ObjetPreview'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Profile } from '../../types/ProfileType'
import { APIs, URL } from '../../static'
import LoadingLottie from '../../components/lotties/LoadingLottie'
import NoPrevObjet from '../../components/objet/NoPrevObjet'

export default function Home() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const [objets, setObjets] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProfile = async (): Promise<Profile | undefined> => {
    try {
      let response = await fetch(APIs.profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.status === 401) {
        const reissueResponse = await fetch(APIs.reissueToken, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (reissueResponse.ok) {
          const reissueData = await reissueResponse.json()
          localStorage.setItem('access_token', reissueData.data.access_token)

          // 새로운 토큰으로 프로필 재요청
          response = await fetch(APIs.profile, {
            credentials: 'include',
            headers: {
              Authorization: `Bearer ${reissueData.data.access_token}`,
            },
          })
        } else {
          throw new Error('Failed to reissue token')
        }
      }

      if (!response.ok) {
        throw new Error('Failed to fetch profile')
      }

      const responseData = await response.json()
      return responseData.data
    } catch (error) {
      console.error('Failed to fetch profile', error)
      navigate(URL.home)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(APIs.objetPreview, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })

        if (response.status === 200) {
          const responseData = await response.json()
          setObjets(responseData.data?.objets)
        }
      } catch (error) {
        console.error('Failed to fetch objet preview', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const getProfile = async () => {
      const profile = await fetchProfile()
      if (profile) {
        setName(profile.nickname)

        /* TODO: delete below code
         * 상태관리 라이브러리로 변경 예정 */
        localStorage.setItem('profile', JSON.stringify(profile))
      } else {
        navigate(URL.home)
      }
    }

    getProfile()
  }, [])

  return (
    <Layout>
      <GloablContainer16>
        <Greetings>
          <WelcomeMessage>안녕하세요 👋</WelcomeMessage>
          <Nickname>"{name}"님,</Nickname>
        </Greetings>
        <Banner>광고</Banner>
        <MyObjetContainer>
          <MyObjetTitle>👀 최근 오브제를 확인해보세요!</MyObjetTitle>
          {isLoading ? (
            <LottieContainer>
              <LoadingLottie />
            </LottieContainer>
          ) : objets?.length === 0 || !objets ? (
            <NoPrevObjet />
          ) : (
            <ObjetPreview objets={objets} />
          )}
        </MyObjetContainer>
      </GloablContainer16>
    </Layout>
  )
}
