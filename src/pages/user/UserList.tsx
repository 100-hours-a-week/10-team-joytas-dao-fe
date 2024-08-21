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
  Toast,
  UserListContainer,
} from './UserListStyles'
import { useState } from 'react'

export default function UserList() {
  const type = useLocation().pathname.split('/')[1] as 'lounge' | 'users'
  const [searchUser, setSearchUser] = useState('')

  const userList = [
    { userId: 1, nickname: '지직지키', profileImage: '' },
    { userId: 2, nickname: '지직지키', profileImage: '' },
    { userId: 3, nickname: '지직지키', profileImage: '' },
    { userId: 4, nickname: '지직지키', profileImage: '' },
    { userId: 5, nickname: '지직지키', profileImage: '' },
    { userId: 6, nickname: '지직지키', profileImage: '' },
    { userId: 7, nickname: '지직지키', profileImage: '' },
    { userId: 8, nickname: '지직지키', profileImage: '' },
    { userId: 9, nickname: '지직지키', profileImage: '' },
    { userId: 10, nickname: '지직지키', profileImage: '' },
    { userId: 11, nickname: '지직지키', profileImage: '' },
    { userId: 12, nickname: '지직지키', profileImage: '' },
  ]

  return (
    <Layout>
      <FullContainerForToast>
        <Toast>지직지키님을 콕 찌르셨습니다 😆</Toast>
        <Toast>이미 찌른 유저입니다 🥲</Toast>

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
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <UserListContainer>
            {type === 'lounge' &&
              (userList.length === 0 ? (
                <GlobalBlankContainerText>
                  검색 결과가 <br />
                  없습니다.
                </GlobalBlankContainerText>
              ) : (
                userList.map((user) => (
                  <UserListItem key={user.userId} type={type} user={user} />
                ))
              ))}
            {type === 'users' &&
              (searchUser.length === 0 ? (
                <GlobalBlankContainerText>
                  추억을 공유할 <br /> 유저를 찾아보세요!
                </GlobalBlankContainerText>
              ) : (
                userList.map((user) => (
                  <UserListItem key={user.userId} type={type} user={user} />
                ))
              ))}
          </UserListContainer>
        </GloablContainer16>
      </FullContainerForToast>
    </Layout>
  )
}
