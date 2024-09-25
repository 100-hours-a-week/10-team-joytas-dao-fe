import styled from 'styled-components'

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`

export const CardContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  height: fit-content;
  color: black;
`

export const Line = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 0.5px;
  background-color: #272727;
`

export const User = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;

  > img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  > div {
    font-size: 17px;
    color: #dedede;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  > div {
    width: fit-content;
    font-size: 11px;
    color: #dedede;
  }
`

export const ObjetContainer = styled.div`
  width: 100%;
  height: fit-content;

  > img {
    margin-top: 20px;
    width: 100%;
  }

  > div {
    margin-top: 20px;
    color: #dedede;
    font-size: 16px;
  }
`
