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

interface UserListProps {
  type: string
  user: { id: number; userName: string; profileImg: string }
}

export default function UserListItem({ type, user }: UserListProps) {
  const PickUser = () => {}

  return (
    <UserListItemContainer>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage />
          <ProfileActive />
        </ProfileImageContainer>
        <ProfileNickname>{user.userName}</ProfileNickname>
      </ProfileContainer>
      {type === 'lounge' ? (
        <InviteButton>초대하기</InviteButton>
      ) : (
        <Icon src={PickImg} onClick={PickUser} />
      )}
    </UserListItemContainer>
  )
}
