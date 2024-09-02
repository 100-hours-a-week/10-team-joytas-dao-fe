import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`

export const Logo = styled.h2`
  font-size: 80px;
  position: absolute;
  top: 350px;
  text-shadow: 0px 4px 10px #707070;
  justify-content: center;
  width: fit-content;
  font-family: 'Shrikhand', serif;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 900;
`

export const Mini = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
`

export const LoginButton = styled.button`
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fee500;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  font-weight: 600;
  position: absolute;
  border: 0px;
  z-index: 10;
  box-shadow:
    0px 4px 10px rgba(0, 0, 0, 0.25),
    0px 2px 5px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translate(-50%, -60%);
    box-shadow:
      0px 8px 15px rgba(0, 0, 0, 0.25),
      0px 4px 10px rgba(0, 0, 0, 0.15);
  }
`

export const Bottom = styled.div`
  padding: 16px;
  display: flex;
  position: absolute;
  bottom: 10px;
  justify-content: flex-start;
  text-decoration: none;
  gap: 6px;
`

export const Text = styled.div`
  text-decoration: underline lightgray;
  position: relative;
  cursor: pointer;
  font-size: 10px;
  width: fit-content;
  color: lightgray;
  padding: 5px 10px;
`
