import styled from 'styled-components'

export const CallTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: white;
`

export const CallSubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  color: white;
  margin-top: 10px;
  font-size: 12px;
`

export const ObjetMaker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Name = styled.div`
  color: gray;
`

export const ObjetActive = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Active = styled.div`
  background-color: #00ff0a;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`

export const TopContainer = styled.div`
  display: flex;
  height: fit-content;
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
`

export const LeftContainer = styled.div`
  width: fit-content;
`

export const RightContainer = styled.div`
  width: fit-content;
`

export const MiddleContainer = styled.div`
  margin: 40px auto 0;
  border-radius: 10px;
  height: fit-content;
  max-height: 625px;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-gap: 27px;
`

export const CallProfile = styled.div`
  display: flex;
  width: 80px;
  border-radius: 50%;
  height: 80px;
  border: 5px solid lightgray;
  background-color: gray;

  &:last-child {
    border: 5px solid #00ff0a;
  }
`

export const BottomContainer = styled.div`
  width: fit-content;
  display: flex;
  gap: 30px;

  margin: 140px auto 0;
`

export const MicButton = styled.button`
  border: 0;
  width: 80px;
  height: 80px;
  background-color: #595959;
  cursor: pointer;
  border-radius: 50%;
`

export const CallButton = styled.button`
  border: 0;
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 50%;
  background-color: #fa3c3c;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`
