import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 130px;
  height: fit-content;
  color: white;
  font-size: 23px;
  font-weight: 600;
`

export const SubTitle = styled.div`
  margin-top: 10px;
  color: white;
  font-size: 15px;
`

export const ProfileContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ImageContainer = styled.div`
  width: 165px;
  height: 165px;
  position: relative;
  border-radius: 50%;
  background-color: white;
`

export const Profile = styled.img`
  width: 165px;
  height: 165px;
  border-radius: 50%;
  object-fit: cover;
`

export const NoProfile = styled.div`
  width: 165px;
  height: 165px;
  border-radius: 50%;
  background-color: black;
  border: 1px solid white;
`

export const ProfileTitle = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  margin: 40px 0 20px;
  font-size: 16px;
  font-weight: 500;
`

export const ModifyButton = styled.label`
  cursor: pointer;
  width: 60px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: 65px;
  left: 50px;
`

export const NicknameContainer = styled.div`
  margin-top: 20px;
  padding: 0 64px;
  box-sizing: border-box;
  color: white;
  width: 100%;
`

export const NicknameTitle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-left: 10px;
  margin-top: 20px;
`

export const NicknameInput = styled.input`
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  color: black;
  box-sizing: border-box;
`

export const StartButtonContainer = styled.button`
  color: white;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  justify-content: center;
  gap: 10px;
  width: 130px;
  height: 50px;
  border-radius: 30px;
  margin: 40px auto 0;
  border: 1px dotted gray;
  background-color: transparent;
`

export const RocketImage = styled.img`
  width: 20px;
  height: 20px;
`

export const MainTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`

export const ModifyConfirmButton = styled.div`
  cursor: pointer;
  width: 150px;
  height: 30px;
  display: flex;
  margin: 20px auto 10px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
  border-radius: 10px;
  color: #b8b8b8;
  background-color: rgba(255, 255, 255, 0.3);
`

export const DeleteButton = styled.div`
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  width: fit-content;
  margin: 10px auto;
  font-size: 10px;
`

export const ImageInput = styled.input`
  display: none;
`
