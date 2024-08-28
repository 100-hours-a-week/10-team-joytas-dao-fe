import { useLocation } from 'react-router-dom'
import Layout from '../../components/Layout'
import UserListItem from '../../components/user/UserListItem'
import {
  GloablContainer16,
  GlobalBlankContainerText,
} from '../../global/globalStyles'
import {
  FullContainerForToast,
  SearchTitle,
  SearchUserInput,
  UserListContainer,
} from './UserListStyles'
import LoadingLottie from '../../components/lotties/LoadingLottie'
import { APIs } from '../../static'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

interface SearhUser {
  user_id: number
  user_status: string
  profile_url: string
  nickname: string
}

export default function UserList() {
  const type = useLocation().pathname.split('/')[1] as 'lounge' | 'users'
  const lid = useParams().lid || ''
  const [isLoading, setIsLoading] = useState(false)
  const [userList, setUserList] = useState<SearhUser[]>([])
  const [searchUser, setSearchUser] = useState('')

  const handleChangeUser = async (input: string) => {
    setIsLoading(true)
    setSearchUser(input)
    try {
      const url =
        type === 'lounge'
          ? `${APIs.searchUser}?lounge_id=${lid}&nickname=${input}`
          : `${APIs.searchUser}?nickname=${input}`

      const response = await fetch(url, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      const responseData = await response.json()

      if (!response.ok || responseData.data.length === 0) {
        setUserList([])
      }

      setUserList(responseData.data)
    } catch (error) {
      console.error('유저 검색 실패', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <FullContainerForToast>
        {/* <Toast>지직지키님을 콕 찌르셨습니다 😆</Toast>
        <Toast>이미 찌른 유저입니다 🥲</Toast> */}

        <GloablContainer16>
          <SearchTitle type={type}>
            {type === 'lounge'
              ? '라운지에 초대할 유저를 선택해주세요.'
              : '콕 찌르기는 3시간에 1번만 가능합니다 😎'}
          </SearchTitle>
          <SearchUserInput
            value={searchUser}
            placeholder='검색할 유저 닉네임을 입력해주세요!'
            maxLength={10}
            onChange={(e) => handleChangeUser(e.target.value)}
          />
          {isLoading ? (
            <LoadingLottie />
          ) : (
            <UserListContainer>
              {type === 'lounge' &&
                (userList.length === 0 || searchUser === '' ? (
                  <GlobalBlankContainerText>
                    검색 결과가 <br />
                    없습니다.
                  </GlobalBlankContainerText>
                ) : (
                  userList.map((user) => (
                    <UserListItem key={user.user_id} type={type} user={user} />
                  ))
                ))}
              {type === 'users' &&
                (userList?.length === 0 || searchUser === '' ? (
                  <GlobalBlankContainerText>
                    추억을 공유할 <br /> 유저를 찾아보세요!
                  </GlobalBlankContainerText>
                ) : (
                  userList.map((user) => (
                    <UserListItem key={user.user_id} type={type} user={user} />
                  ))
                ))}
            </UserListContainer>
          )}
        </GloablContainer16>
      </FullContainerForToast>
    </Layout>
  )
}
