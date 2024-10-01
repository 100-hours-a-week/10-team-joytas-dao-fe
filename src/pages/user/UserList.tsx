import { useLocation } from 'react-router-dom'
import Layout from '@components/Layout'
import UserListItem from '@components/user/UserListItem'
import {
  GloablContainer16,
  GlobalBlankContainerText,
} from '@global/globalStyles'
import {
  FullContainerForToast,
  SearchTitle,
  SearchUserInput,
  UserListContainer,
} from './UserListStyles'
import LoadingLottie from '@components/lotties/LoadingLottie'
import { APIs } from '@/static'
import { useEffect, useRef, useState } from 'react'
import useUserStore from '@store/userStore'
import axios from 'axios'
import { useQuery } from 'react-query'

interface SearchUser {
  user_id: number
  user_status: string
  profile_url: string
  nickname: string
}

const searchUsers = async (nickname: string): Promise<SearchUser[]> => {
  const response = await axios.get(`${APIs.searchUser}?nickname=${nickname}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })

  return response.data.data
}

export default function UserList() {
  const type = useLocation().pathname.split('/')[1] as 'lounges' | 'users'
  const [searchUser, setSearchUser] = useState('')
  const [debouncedSearchUser, setDebouncedSearchUser] = useState('')
  const userId = useUserStore((state) => state.userId)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchUser(searchUser)
    }, 200)

    return () => {
      clearTimeout(handler)
    }
  }, [searchUser])

  const { data: userList = [], isLoading } = useQuery(
    ['searchUser', debouncedSearchUser],
    () => searchUsers(debouncedSearchUser),
    {
      enabled: !!debouncedSearchUser,
      onError: (error) => {
        console.error('유저 검색 실패', error)
      },
    }
  )

  return (
    <Layout>
      <FullContainerForToast>
        <GloablContainer16>
          <SearchTitle type={type}>
            {type === 'lounges'
              ? '라운지에 초대할 유저를 선택해주세요! 🙌'
              : '콕 찌르기는 3시간에 1번만 가능합니다 😎'}
          </SearchTitle>
          <SearchUserInput
            ref={searchInputRef}
            value={searchUser}
            placeholder='검색할 유저 닉네임을 입력해주세요!'
            maxLength={10}
            onChange={(e) => setSearchUser(e.target.value)}
          />
          {isLoading ? (
            <LoadingLottie />
          ) : (
            <UserListContainer>
              {userList.length === 0 || searchUser === '' ? (
                <GlobalBlankContainerText>
                  추억을 공유할 <br />
                  유저를 찾아보세요!
                </GlobalBlankContainerText>
              ) : (
                userList
                  .filter((user) => user.user_id !== userId)
                  .map((user) => (
                    <UserListItem key={user.user_id} type={type} user={user} />
                  ))
              )}
            </UserListContainer>
          )}
        </GloablContainer16>
      </FullContainerForToast>
    </Layout>
  )
}
