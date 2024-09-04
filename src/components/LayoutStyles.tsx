import styled from 'styled-components'
export const Main = styled.div`
  width: 100%;
  height: 100%;
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
  top: 0px;
  padding-left: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  @media (min-width: 600px) {
    height: 70px;
  }
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
  right: 20px;
  gap: 5px;
`

export const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`

export const HamburgerIcon = styled.div`
  z-index: 1001;
`

export const FooterDiv = styled.div`
  background-color: black;
  box-sizing: border-box;
  height: 70px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 0 40px;
`

export const IconDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IconImg = styled.img<{ $isMyRoom?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;

  ${(props) => props.$isMyRoom && `border: 2px solid #575FFF;`}
`

export const IconText = styled.div`
  margin-top: 10px;
  color: white;
  font-size: 10px;
`

export const ChildrenDiv = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  height: calc(100% - 120px);

  @media (min-width: 600px) {
    height: calc(100% - 140px);
  }
`
