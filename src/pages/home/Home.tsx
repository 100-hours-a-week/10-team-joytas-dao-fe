import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  Greetings,
  WelcomeMessage,
  Nickname,
  Banner,
  MyObjetContainer,
  MyObjetTitle,
} from './HomeStyles'
import ObjetPreview from '../../components/objet/ObjetPreview'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Profile } from '../../types/ProfileType'
import { APIs } from '../../static'

export default function Home() {
  const [name, setName] = useState('') // 프로필 이름을 저장할 상태
  const navigate = useNavigate()

  const fetchProfile = async (): Promise<Profile> => {
    try {
      let response = await fetch(APIs.profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.status === 401) {
        // 토큰 재발급 요청
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
      return { id: 0, name: '', profile: '' } // 오류 발생 시 기본값 반환
    }
  }

  useEffect(() => {
    const getProfile = async () => {
      const profile = await fetchProfile()
      if (profile) {
        setName(profile.name) // 받아온 프로필 데이터의 이름을 상태에 저장
      } else {
        // 오류 처리 또는 다른 로직
        navigate('/login') // 예를 들어, 로그인 페이지로 리디렉트
      }
    }

    getProfile()
  }, []) // 빈 의존성 배열로 컴포넌트 마운트 시 한 번만 실행

  return (
    <Layout>
      <GloablContainer16>
        <Greetings>
          <WelcomeMessage>안녕하세요 👋</WelcomeMessage>
          <Nickname>"{name}"님,</Nickname>
        </Greetings>
        <Banner>광고</Banner>
        <MyObjetContainer>
          <MyObjetTitle>👀 나에 대한 오브제가 만들어졌어요!</MyObjetTitle>
          <ObjetPreview />
        </MyObjetContainer>
      </GloablContainer16>
    </Layout>
  )
}
