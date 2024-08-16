import {
  MenuContainer,
  Profile,
  Nickname,
  TopContainer,
  CloseButton,
  ButtonContainer,
  ProfileContainer,
  CategoryList,
  Category,
} from './MenuStyle'
import close from '../assets/images/close.png'
import profile from '../assets/images/profile.png'
import { URL } from '../static'
import { useNavigate } from 'react-router-dom'

interface MenuProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ setMenuOpen }: MenuProps) {
  const navigate = useNavigate()
  const name = 'JunPark'
  return (
    <>
      <MenuContainer>
        <ButtonContainer>
          <CloseButton src={close} onClick={() => setMenuOpen(false)} />
        </ButtonContainer>
        <TopContainer>
          <ProfileContainer>
            <Profile src={profile} />
            <Nickname>{name}</Nickname>
          </ProfileContainer>
        </TopContainer>
        <CategoryList>
          <Category onClick={() => navigate(URL.modifyProfile)}>
            프로필 설정
          </Category>
          <Category>로그아웃</Category>
        </CategoryList>
      </MenuContainer>
    </>
  )
}
