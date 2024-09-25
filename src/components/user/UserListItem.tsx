import {
  UserListItemContainer,
  ProfileContainer,
  ProfileImage,
  ProfileActive,
  ProfileImageContainer,
  ProfileNickname,
  InviteButton,
  Icon,
} from '@pages/user/UserListStyles'
import PickImg from '@images/pick.webp'
import { useNavigate, useParams } from 'react-router-dom'
import { URL, APIs } from '@/static'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import axios from 'axios'

interface UserListProps {
  type: string
  user: {
    user_id: number
    nickname: string
    profile_url: string
    user_status?: string
  }
}

// axios로 API 요청 처리 함수
const pokeUser = async (user_id: number) => {
  const response = await axios.post(
    APIs.poke,
    { user_id },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response
}

const inviteUser = async (user_id: number, lounge_id: number) => {
  const response = await axios.post(
    APIs.invite,
    { user_id, lounge_id },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response
}

export default function UserListItem({ type, user }: UserListProps) {
  const loungeId = useParams().lid || 0
  const navigate = useNavigate()
  const [isClick, setIsClick] = useState(false)

  const handleUserClick = () => {
    navigate(`${URL.userDetail}/${user.user_id}`)
  }

  const pokeMutation = useMutation(() => pokeUser(user.user_id), {
    onSuccess: () => {
      toast.success(`${user.nickname} 콕 찌르기 성공 😊`)
    },
    onError: (error: any) => {
      if (error.response?.status === 400) {
        toast.info(`3시간에 한번씩만 찌를 수 있어요 🙂`)
      } else {
        toast.error('콕 찌르기 실패 🥲')
      }
    },
    onSettled: () => {
      setIsClick(false)
    },
  })

  const inviteMutation = useMutation(
    () => inviteUser(user.user_id, Number(loungeId)),
    {
      onSuccess: () => {
        toast.success('유저 초대 성공 😉')
      },
      onError: (error: any) => {
        if (error.response?.status === 405) {
          toast.info('이미 라운지에 존재하는 유저입니다.')
        } else if (error.response?.status === 400) {
          toast.error('해당 유저는 이미 최대 4개의 라운지에 참여 중입니다.')
        } else {
          toast.error('유저 초대 실패 🥲')
        }
      },
      onSettled: () => {
        setIsClick(false)
      },
    }
  )

  const handleClickPoke = () => {
    setIsClick(true)
    pokeMutation.mutate()
  }

  const handleClickInvite = () => {
    setIsClick(true)
    inviteMutation.mutate()
  }

  return (
    <UserListItemContainer key={user.user_id}>
      <ProfileContainer onClick={handleUserClick}>
        <ProfileImageContainer>
          <ProfileImage src={user.profile_url} />
          <ProfileActive />
        </ProfileImageContainer>
        <ProfileNickname>{user.nickname}</ProfileNickname>
      </ProfileContainer>
      {type === 'lounges' ? (
        <InviteButton disabled={isClick} onClick={handleClickInvite}>
          초대하기
        </InviteButton>
      ) : type === 'users' ? (
        <Icon src={PickImg} onClick={handleClickPoke} />
      ) : null}
    </UserListItemContainer>
  )
}
