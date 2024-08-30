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

export const ModifyConfirmButton = styled.button`
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

export const ButtonContainer = styled.div`
  display: flex;
  margin: 40px auto 0;
  background-color: black;
  width: 100%;
  height: 100px;
  position: relative;

  overflow: hidden;
  top: 0%;
  left: 0%;

  span {
    position: relative;
    z-index: 6;
    font-family: 'Bagel Fat One', sans-serif;
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    font-size: 20px;
    color: #fff;
    pointer-events: none;
  }
`

export const Button = styled.button`
  font-family: 'Bagel Fat One', sans-serif;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  font-size: 20px;
  background-color: transparent;
  border: 0.4px solid #fff;
  border-radius: 20px;
  padding: 10px 20px;
  transform-style: preserve-3d;
  transition: all 0.6s ease;

  span {
    position: relative;
    opacity: 0;
  }

  &:after {
    content: '';
    background: linear-gradient(56deg, #61dafb 0%, #d6cbf6 46%, #f2056f 100%);
    width: 80%;
    height: 20%;
    position: absolute;
    bottom: -4px;
    left: 10%;
    opacity: 0;
    filter: blur(15px);
    border-radius: 20px;
    transform: translateZ(-1px);
    transition: opacity 0.6s ease;
  }

  &:before {
    content: '';
    background: linear-gradient(56deg, #61dafb 0%, #d6cbf6 46%, #f2056f 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 20px;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transition: all 0.6s ease;
    transform: translate(-50%, -50%) scale(1.35);
    transform-origin: center;
    border: none;

    &:after {
      opacity: 1;
      transition: opacity 0.6s ease;
    }

    &:before {
      opacity: 1;
      transition: opacity 0.6s linear;
    }
  }
`
