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
import { useNavigate } from 'react-router-dom'
import { URL } from '../../static'

interface UserListProps {
  type: string
  user: { userId: number; nickname: string; profileImage: string }
}

export default function UserListItem({ type, user }: UserListProps) {
  const navigate = useNavigate()
  const PickUser = () => {}

  const handleUserClick = () => {
    navigate(`${URL.userDetail}/${user.userId}`)
  }

  return (
    <UserListItemContainer key={user.userId}>
      <ProfileContainer onClick={handleUserClick}>
        <ProfileImageContainer>
          <ProfileImage />
          <ProfileActive />
        </ProfileImageContainer>
        <ProfileNickname>{user.nickname}</ProfileNickname>
      </ProfileContainer>
      {type === 'lounge' ? (
        <InviteButton>초대하기</InviteButton>
      ) : type === 'users' ? (
        <Icon src={PickImg} onClick={PickUser} />
      ) : null}
    </UserListItemContainer>
  )
}
