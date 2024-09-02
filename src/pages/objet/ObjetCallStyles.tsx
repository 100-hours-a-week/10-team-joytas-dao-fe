import styled from 'styled-components'

export const MiddleContainer = styled.div`
  margin: 40px auto 0;
  border-radius: 10px;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-template-rows: repeat(3, 120px);
  justify-content: center;
  grid-gap: 27px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 150px);
  }
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
  margin: 40px auto 20px;
`

export const MicButton = styled.button`
  border: 0;
  width: 80px;
  height: 80px;
  background-color: #595959;
  border-radius: 50%;
`

export const CallButton = styled.button`
  border: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fa3c3c;
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`
