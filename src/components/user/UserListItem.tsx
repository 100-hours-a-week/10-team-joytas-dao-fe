import {
  UserListItemContainer,
  ProfileContainer,
  ProfileImage,
  ProfileActive,
  ProfileImageContainer,
  ProfileNickname,
  InviteButton,
  Icon,
} from '../../pages/user/UserListStyle'
import PickImg from '../../assets/images/pick.png'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../static'

interface UserListProps {
  type: string
  user: { id: number; userName: string; profileImg: string }
}

export default function UserListItem({ type, user }: UserListProps) {
  const navigate = useNavigate()
  const PickUser = () => {}

  return (
    <UserListItemContainer>
      <ProfileContainer onClick={() => navigate(URL.userDetail)}>
        <ProfileImageContainer>
          <ProfileImage />
          <ProfileActive />
        </ProfileImageContainer>
        <ProfileNickname>{user.userName}</ProfileNickname>
      </ProfileContainer>
      {type === 'lounge' ? (
        <InviteButton>초대하기</InviteButton>
      ) : type === 'users' ? (
        <Icon src={PickImg} onClick={PickUser} />
      ) : null}
    </UserListItemContainer>
  )
}
