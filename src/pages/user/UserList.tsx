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
    {
      userId: 1,
      created_at: '2024-08-22 16:13:48.927009',
      deleted_at: null,
      updated_at: '2024-08-23 13:42:08.505541',
      kakao_id: '3670315073',
      nickname: 'jeff하이',
      profileImage:
        'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/904877c8-fbee-4f64-9f82-ae114fdd93c0',
      reason_detail: '',
      reasons: '[W0001]',
      status: 'DELETED',
    },
    {
      userId: 2,
      created_at: '2024-08-22 16:13:48.926285',
      deleted_at: null,
      updated_at: '2024-08-22 16:21:38.841360',
      kakao_id: '3665526301',
      nickname: '홍은신이다',
      profileImage:
        'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/d21c9e65-20c6-47b3-9a65-473582de0d82',
      reason_detail: '힝힝힝',
      reasons: '[W0001, W0002]',
      status: 'ACTIVE',
    },
    {
      userId: 3,
      created_at: '2024-08-22 16:15:50.909226',
      deleted_at: null,
      updated_at: '2024-08-22 16:16:25.541529',
      kakao_id: '3670669999',
      nickname: '제이미짱',
      profileImage:
        'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/16350f04-7e4c-4097-b515-59390745a5c3',
      reason_detail: null,
      reasons: null,
      status: 'ACTIVE',
    },
    {
      userId: 4,
      created_at: '2024-08-22 17:15:11.666015',
      deleted_at: null,
      updated_at: '2024-08-22 23:04:54.866370',
      kakao_id: '3670507341',
      nickname: '지끼',
      profileImage:
        'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/f7547e7b-e2f3-4cb6-a0e5-902a8d08c126',
      reason_detail: null,
      reasons: null,
      status: 'ACTIVE',
    },
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
