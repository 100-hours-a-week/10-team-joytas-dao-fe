import styled from 'styled-components'
export const Main = styled.div`
  width: 100%;
  height: 100vh;

  @media (min-width: 600px) {
    width: 600px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  position: relative;
  /* top: 0px; */
  padding-left: 15px;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  background-color: rgb(23, 23, 23);
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
`

export const LogoImage = styled.img`
  width: 60px;
  height: 20px;
  cursor: pointer;
`

export const HeaderRight = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  right: 5px;
`

export const Icon = styled.img`
  cursor: pointer;
  width: 40px;
  height: fit-content;
  padding: 12.5px;

  &:hover {
    transform-origin: 50% 0%;
    animation-name: shake;
    animation-duration: 2s;
    animation-delay: 0.1s;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(16deg);
    }
    20% {
      transform: rotate(-16deg);
    }
    30% {
      transform: rotate(12deg);
    }
    40% {
      transform: rotate(-12deg);
    }
    50% {
      transform: rotate(8deg);
    }
    60% {
      transform: rotate(-8deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`

export const HamburgerIcon = styled.div`
  z-index: 1001;
`

export const FooterDiv = styled.div`
  box-sizing: border-box;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(23, 23, 23);
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (min-width: 600px) {
    height: 60px;
    width: 600px;
  }
`

export const IconDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IconImg = styled.img<{ $isMyRoom?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  object-fit: cover;

  ${(props) => props.$isMyRoom && `border: 1px solid white;`}
`

export const IconText = styled.div`
  margin-top: 8px;
  color: white;
  font-size: 8px;

  @media (min-width: 600px) {
    font-size: 10px;
  }
`

export const ChildrenDiv = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  height: calc(100% - 110px);
`
