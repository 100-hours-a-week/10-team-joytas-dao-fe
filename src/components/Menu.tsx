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
} from './MenuStyles'
import close from '../assets/images/close.png'
import { URL, APIs } from '../static'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useUserStore from '../store/userStore'

interface MenuProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu({ setMenuOpen }: MenuProps) {
  const navigate = useNavigate()
  const name = useUserStore((state) => state.nickname)
  const profileImage = useUserStore((state) => state.profileImage)
  const logout = useUserStore((state) => state.logout)

  const [isClick, setIsClick] = useState(false)

  const handleClickLogout = async () => {
    setIsClick(true)
    try {
      const response = await fetch(APIs.logout, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        localStorage.removeItem('access_token')
        logout()
        alert('로그아웃 성공!')
        navigate(URL.login)
      } else {
        alert('로그아웃 실패')
      }
    } catch (error) {
      console.error('Failed to logout', error)
    } finally {
      setIsClick(false)
    }
  }

  return (
    <>
      <MenuContainer>
        <ButtonContainer>
          <CloseButton src={close} onClick={() => setMenuOpen(false)} />
        </ButtonContainer>
        <TopContainer>
          <ProfileContainer>
            <Profile src={profileImage} />
            <Nickname>{name}</Nickname>
          </ProfileContainer>
        </TopContainer>
        <CategoryList>
          <Category onClick={() => navigate(URL.modifyProfile)}>
            프로필 설정
          </Category>
          <Category disabled={isClick} onClick={handleClickLogout}>
            로그아웃
          </Category>
        </CategoryList>
      </MenuContainer>
    </>
  )
}
