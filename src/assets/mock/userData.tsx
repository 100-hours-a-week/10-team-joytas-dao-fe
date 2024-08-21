export interface UserProps {
  user_id: number
  created_at: string
  deleted_at: string | null
  updated_at: string
  kakao_id: string
  nickname: string
  profile_url: string | null
  reason: string | null
  reason_detail: string | null
  status: string
}

export const MOCK_USERS: UserProps[] = [
  {
    user_id: 1,
    created_at: '2024-08-19 17:49:49.171721',
    deleted_at: null,
    updated_at: '2024-08-21 14:21:20.306538',
    kakao_id: '3665526301',
    nickname: '아임소해피',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/99ab4720-b0b8-4afc-85dd-7725af09e77f',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE',
  },
  {
    user_id: 2,
    created_at: '2024-08-19 17:49:57.518397',
    deleted_at: null,
    updated_at: '2024-08-21 16:15:28.844561',
    kakao_id: '3670315073',
    nickname: '홍은신이다',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/3d88b363-79f9-42d4-b4bb-ad1e974522f7',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE',
  },
  {
    user_id: 3,
    created_at: '2024-08-19 17:54:50.572114',
    deleted_at: null,
    updated_at: '2024-08-21 20:15:31.018675',
    kakao_id: '3670669999',
    nickname: '제이미',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/4cda765d-3859-414b-a578-006330eaca8d',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE',
  },
  {
    user_id: 4,
    created_at: '2024-08-19 19:29:59.639659',
    deleted_at: null,
    updated_at: '2024-08-19 19:29:59.639659',
    kakao_id: '3670788937',
    nickname: '지직지키',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/4cda765d-3859-414b-a578-006330eaca8d',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE_FIRST_LOGIN',
  },
  {
    user_id: 5,
    created_at: '2024-08-19 20:30:40.420953',
    deleted_at: null,
    updated_at: '2024-08-19 20:30:40.420953',
    kakao_id: '3670507341',
    nickname: '준투는배고파',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/4cda765d-3859-414b-a578-006330eaca8d',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE_FIRST_LOGIN',
  },
  {
    user_id: 6,
    created_at: '2024-08-20 20:07:59.224114',
    deleted_at: null,
    updated_at: '2024-08-20 20:07:59.224114',
    kakao_id: '3665693002',
    nickname: 'DAO-67053dcb',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/3d88b363-79f9-42d4-b4bb-ad1e974522f7',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE_FIRST_LOGIN',
  },
  {
    user_id: 7,
    created_at: '2024-08-21 10:40:39.296805',
    deleted_at: null,
    updated_at: '2024-08-21 10:40:39.296805',
    kakao_id: '3672900532',
    nickname: '배고파요',
    profile_url:
      'https://dao-dev-s3.s3.ap-northeast-2.amazonaws.com/99ab4720-b0b8-4afc-85dd-7725af09e77f',
    reason: null,
    reason_detail: null,
    status: 'ACTIVE_FIRST_LOGIN',
  },
]
