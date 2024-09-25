import {
  MenuContainer,
  Profile,
  Nickname,
  TopContainer,
  ProfileContainer,
  CategoryList,
  Category,
} from './MenuStyles'
import { URL, APIs } from '@/static'
import { useNavigate } from 'react-router-dom'
import useUserStore from '@store/userStore'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

const logoutRequest = async () => {
  const response = await axios.post(
    APIs.logout,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )

  if (response.status !== 200) {
    throw new Error('로그아웃 실패')
  }

  return response
}

export default function Menu() {
  const navigate = useNavigate()
  const name = useUserStore((state) => state.nickname)
  const profileImage = useUserStore((state) => state.profileImage)
  const logout = useUserStore((state) => state.logout)
  const [isClick, setIsClick] = useState(false)

  const logoutMutation = useMutation(logoutRequest, {
    onSuccess: () => {
      localStorage.removeItem('access_token')
      logout()
      toast.success('로그아웃 성공 😀')
      navigate(URL.login)
    },
    onError: () => {
      toast.error('로그아웃 실패 😭')
    },
    onSettled: () => {
      setIsClick(false)
    },
  })

  const handleClickLogout = () => {
    setIsClick(true)
    logoutMutation.mutate()
  }

  return (
    <>
      <MenuContainer>
        <TopContainer>
          <ProfileContainer>
            <Profile src={profileImage} />
            <Nickname>{name}</Nickname>
          </ProfileContainer>
        </TopContainer>
        <CategoryList>
          <Category onClick={() => navigate(URL.modifyProfile)}>
            프로필 설정
          </Category>
          <Category
            disabled={isClick || logoutMutation.isLoading}
            onClick={handleClickLogout}
          >
            {logoutMutation.isLoading ? '로그아웃 중...' : '로그아웃'}
          </Category>
        </CategoryList>
      </MenuContainer>
    </>
  )
}
