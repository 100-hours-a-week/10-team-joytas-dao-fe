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
  user: { user_id: number; nickname: string; profile_url: string }
}

export default function UserListItem({ type, user }: UserListProps) {
  const navigate = useNavigate()
  const PickUser = () => {}

  const handleUserClick = () => {
    navigate(`${URL.userDetail}/${user.user_id}`)
  }

  return (
    <UserListItemContainer key={user.user_id}>
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
