import styled from 'styled-components'

export const MiddleContainer = styled.div`
  margin: 40px auto 0;
  border-radius: 10px;
  height: 475px;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-template-rows: repeat(3, 90px);
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
  margin: 20px auto 0;
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
