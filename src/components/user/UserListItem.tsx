import {
  UserListItemContainer,
  ProfileContainer,
  ProfileImage,
  ProfileActive,
  ProfileImageContainer,
  ProfileNickname,
  InviteButton,
  Icon,
} from '../../pages/user/UserListStyles'
import PickImg from '../../assets/images/pick.png'
import { useNavigate, useParams } from 'react-router-dom'
import { URL, APIs } from '../../static'
import { useState } from 'react'

interface UserListProps {
  type: string
  user: { userId: number; nickname: string; profileImage: string }
}

export default function UserListItem({ type, user }: UserListProps) {
  const loungeId = useParams().lid
  const navigate = useNavigate()
  const PickUser = () => {}
  const [isClick, setIsClick] = useState(false)

  const handleUserClick = () => {
    navigate(`${URL.userDetail}/${user.userId}`)
  }

  const handleClickInvite = async () => {
    setIsClick(true)
    try {
      const response = await fetch(APIs.poke, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ user_id: user.userId, lounge_id: loungeId }),
      })

      if (response.status === 200) {
        alert('유저 초대 성공')
      } else if (response.status === 400) {
        alert('이미 라운지에 존재하는 유저입니다.')
      } else {
        alert('유저 초대 실패')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsClick(false)
    }
  }

  return (
    <UserListItemContainer key={user.userId}>
      <ProfileContainer onClick={handleUserClick}>
        <ProfileImageContainer>
          <ProfileImage src={user.profileImage} />
          <ProfileActive />
        </ProfileImageContainer>
        <ProfileNickname>{user.nickname}</ProfileNickname>
      </ProfileContainer>
      {type === 'lounge' ? (
        <InviteButton disabled={isClick} onClick={handleClickInvite}>
          초대하기
        </InviteButton>
      ) : type === 'users' ? (
        <Icon src={PickImg} onClick={PickUser} />
      ) : null}
    </UserListItemContainer>
  )
}
