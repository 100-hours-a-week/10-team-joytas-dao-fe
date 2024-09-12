import { useNavigate } from 'react-router-dom'
import type { Profile } from '../types/ProfileType'
import useUserStore from '../store/userStore'
import { APIs, URL } from '../static'
import { useState } from 'react'

export const useUserInfo = () => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const { updateId, updateNickname, updateProfileImage } = useUserStore()

  const fetchProfile = async (): Promise<Profile | undefined> => {
    try {
      let response = await fetch(APIs.profile, {
        credentials: 'include',
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
          setIsLogin(true)
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
          setIsLogin(false)
          throw new Error('Failed to reissue token')
        }
      }

      if (!response.ok) {
        navigate(URL.login)
        throw new Error('Failed to fetch profile')
      }

      setIsLogin(true)
      const responseData = await response.json()
      return responseData.data
    } catch (error) {
      console.error('Failed to fetch profile', error)
      setIsLogin(false)
      navigate(URL.login)
    }
  }

  const getProfile = async () => {
    const profile = await fetchProfile()

    if (profile?.user_status === 'ACTIVE_FIRST_LOGIN') {
      navigate(URL.firstProfile)
    }

    if (profile) {
      updateNickname(profile.nickname)
      updateProfileImage(profile.profile_url)
      updateId(profile.user_id)
    } else {
      navigate(URL.login)
    }
  }

  return { isLogin, getProfile }
}
