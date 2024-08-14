import styled from 'styled-components'

export const SearchTitle = styled.div`
  padding-top: 50px;
  font-size: 20px;
  font-weight: bold;
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

export const SearchResults = styled.div`
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

export const SearchContainer = styled.div`
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
`

export const ProfileImageContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: 1px solid #746b6b;
  width: 60px;
  height: 25px;
  font-size: 10px;
  border-radius: 15px;
`
