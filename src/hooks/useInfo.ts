import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import type { Profile } from '@/types/ProfileType'
import useUserStore from '@store/userStore'
import { APIs, URL } from '@/static'

export const useUserInfo = () => {
  const navigate = useNavigate()
  const { updateId, updateNickname, updateProfileImage } = useUserStore()

  const fetchProfile = async (): Promise<Profile | undefined> => {
    try {
      const response = await axios.get(APIs.profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      })

      return response.data.data
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        try {
          const reissueResponse = await axios.post(
            APIs.reissueToken,
            {},
            {
              withCredentials: true,
            }
          )

          const newAccessToken = reissueResponse.data.data.access_token
          localStorage.setItem('access_token', newAccessToken)

          const retryResponse = await axios.get(APIs.profile, {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
            },
            withCredentials: true,
          })

          return retryResponse.data.data
        } catch (error) {
          navigate(URL.login)
          return
        }
      }
    }
  }

  const getProfile = async () => {
    try {
      const profile = await fetchProfile()

      if (profile?.user_status === 'ACTIVE_FIRST_LOGIN') {
        navigate(URL.firstProfile)
      } else if (profile) {
        updateNickname(profile.nickname)
        updateProfileImage(profile.profile_url)
        updateId(profile.user_id)
      } else {
        navigate(URL.login)
      }
    } catch (error) {
      console.error('Error getting profile:', error)
      navigate(URL.login)
    }
  }

  return { getProfile }
}
