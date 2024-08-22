export interface UserProps {
  user_id: number
  created_at: string
  deleted_at: string | null
  updated_at: string
  kakao_id: string
  nickname: string
  profile_url: string | null
  status: string
}

export const MOCK_USERS: UserProps[] = [
  {
    user_id: 1,
    created_at: '2024-08-22 16:13:48.927009',
    deleted_at: null,
    updated_at: '2024-08-22 16:33:11.179943',
    kakao_id: '3670315073',
    nickname: '홍은신이에요',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/c33c2899-6d35-4d53-9f4d-fe16389e3898',
    status: 'DELETED',
  },
  {
    user_id: 2,
    created_at: '2024-08-22 16:13:48.926285',
    deleted_at: null,
    updated_at: '2024-08-22 16:21:38.841360',
    kakao_id: '3665526301',
    nickname: '홍은신이다',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/d21c9e65-20c6-47b3-9a65-473582de0d82',
    status: 'ACTIVE',
  },
  {
    user_id: 3,
    created_at: '2024-08-22 16:15:50.909226',
    deleted_at: null,
    updated_at: '2024-08-22 16:16:25.541529',
    kakao_id: '3670669999',
    nickname: '제이미짱',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/16350f04-7e4c-4097-b515-59390745a5c3',
    status: 'ACTIVE',
  },
]
