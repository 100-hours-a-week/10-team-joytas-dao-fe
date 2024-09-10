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
`

export const Logo = styled.div`
  text-shadow: 0px 4px 10px #707070;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Mini = styled.div`
  width: 195px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  font-family: 'Cormorant', serif;
  animation:
    typing 3.5s steps(40, end),
    blink-caret 0.75s step-end infinite;

  overflow: hidden;
  border-right: 0.15em solid #575fff;
  white-space: nowrap;
  margin: 0 auto;
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 195px;
    }
  }
`

export const LoginButton = styled.button`
  color: black;
  bottom: 20%;
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

export const TopContainer = styled.div`
  position: relative;
  height: 100%;

  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;

  @media (min-width: 600px) {
    video {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }
`

export const MiddleContainer = styled.div`
  padding: 30px 0 0;
  box-sizing: border-box;
  background-color: #181817;
  height: 100vh;
`

export const ContainerTitle = styled.div`
  padding: 70px 32px 0;
  font-size: 35px;
  color: #8d8d8d;
  font-weight: 600;
`

export const ContainerSubTitle = styled.div`
  padding-left: 32px;
  margin-top: 7px;
  font-size: 15px;
  font-weight: 600;
  color: #5f5f5f;
`

export const OnBoarding = styled.div`
  width: 100%;
  height: calc(100% - 280px);
  margin-top: 35px;
  overflow-x: auto;

  /* ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none; */
`

export const CardList = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  width: fit-content;
  padding-right: 32px;
`

export const Card = styled.div`
  width: 326px;
  height: fit-content;
  border-radius: 20px;
  background-color: black;

  @media (min-width: 564px) {
    width: 500px;
  }
`

export const CardTitle = styled.div`
  width: fit-content;
  font-size: 13px;
  font-weight: bold;
  margin: 40px auto 20px;
  color: rgba(255, 255, 255, 0.7);

  @media (min-width: 564px) {
    font-size: 17px;
  }
`

export const CardButton = styled.button`
  width: 100px;
  margin: 16px 32px 0;
  border-radius: 10px;
  margin-left: 32px;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 600;
  background-color: #fee502;
  opacity: 0.7;
  color: black;

  &:hover {
    opacity: 1;
  }
`

export const CardImage = styled.img`
  width: 100%;
  padding: 20px 32px;

  @media (min-width: 564px) {
    padding: 30px 64px;
  }
`

export const MiddleContainer2 = styled.div`
  padding: 30px 0 0;
  box-sizing: border-box;
  background-color: black;
  height: 100vh;
`

export const CardDescription = styled.div`
  padding: 30px 30px 0;
  color: #8d8d8d;
  font-size: 17px;
  line-height: 2;
  font-weight: 500;

  strong {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  @media (min-width: 564px) {
    font-size: 20px;
  }
`

export const CardModelImageContainer = styled.div`
  display: flex;
  width: 100%;
`

export const CardModelImage = styled.img`
  width: 170px;

  @media (min-width: 564px) {
    width: 270px;
  }
`

export const ScrollIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const BottomContainer = styled.div`
  border-top: 0.5px dotted #8d8d8d;
  padding: 30px 32px;
  height: 100px;
  background-color: #000000;
  color: #8d8d8d;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
  }

  img {
    width: 70px;
    opacity: 0.5;
  }
`
