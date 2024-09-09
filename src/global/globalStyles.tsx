import styled, { css } from 'styled-components'

export const GloablContainer16 = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  color: white;
`

export const GloablContainer32 = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  overflow-y: auto;
`

export const GlobalTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;

  img {
    width: 25px;
    height: 25px;
    margin-right: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`

export const GlobalSubTitle = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: semi-bold;
`

export const GlobalBlankContainerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #6a6a6a;
  font-size: 18px;
  line-height: 30px;
`

export const GlobalWidth = css`
  width: 100%;
  @media (min-width: 600px) {
    width: 600px;
  }
`
