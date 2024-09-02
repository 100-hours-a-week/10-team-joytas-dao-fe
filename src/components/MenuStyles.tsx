import styled from 'styled-components'
import { GlobalWidth } from '../global/globalStyles'

export const MenuContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  color: #6d6d6d;
  margin-top: -50px;
  z-index: 1000;
  background-color: black;
  ${GlobalWidth}
`

export const TopContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 50px 32px 0;
  align-items: center;
  justify-content: space-between;
`

export const CloseButton = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
`

export const Profile = styled.img`
  width: 44px;
  object-fit: cover;
  height: 44px;
  border-radius: 50%;
`

export const Nickname = styled.div`
  width: fit-content;
  font-size: 20px;
  font-weight: bold;
  color: white;
`

export const CategoryList = styled.div`
  display: flex;
  padding: 0 32px;
  margin-top: 50px;
  flex-direction: column;
  gap: 40px;
`

export const Category = styled.button`
  font-size: 17px;
  cursor: pointer;
  color: #6d6d6d;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  &:hover {
    color: white;
  }
`

export const ButtonContainer = styled.div`
  padding: 16px 16px 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
