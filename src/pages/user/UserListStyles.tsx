import styled from 'styled-components'

export const SearchTitle = styled.div<{ type: 'lounge' | 'users' }>`
  padding-top: 50px;
  font-size: ${(props) => (props.type === 'lounge' ? '20px' : '12px')};
  font-weight: ${(props) => (props.type === 'lounge' ? 'bold' : 'regular')};
`

export const SearchUserInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 15px;
  padding: 5px 10px;
  color: white;
  box-sizing: border-box;
  background-color: #272727;
  border: 0;
  border-radius: 10px;
`

export const UserListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 584px;
  overflow-y: auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 10px;
`

export const UserListItemContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`

export const ProfileImageContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
`

export const ProfileActive = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  right: 15px;
  top: 25px;
  border-radius: 50%;
  background-color: #00bf08;
`

export const ProfileNickname = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 500;
`

export const InviteButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid #746b6b;
  width: 60px;
  height: 25px;
  font-size: 10px;
  border-radius: 15px;

  opacity: 70%;

  &:hover {
    opacity: 100%;
  }
`

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  opacity: 70%;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`

export const Toast = styled.div`
  width: auto;
  height: 30px;
  padding: 5px 15px;
  box-sizing: border-box;
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  z-index: 1000;
  white-space: nowrap;

  color: black;
  font-size: 12px;

  border-radius: 20px;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const FullContainerForToast = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const MyRoomContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 32px;
  box-sizing: border-box;

  margin: 90px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
