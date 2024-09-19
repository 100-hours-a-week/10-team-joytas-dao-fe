import styled from 'styled-components'

export const LoungeList = styled.div`
  width: 100%;
  height: 605px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  box-sizing: border-box;
  gap: 20px;
  display: flex;
  flex-direction: column;
`
export const InputTitle = styled.div`
  font-size: 13px;
  font-weight: semi-bold;
  display: flex;
  color: white;
`

export const InputContainer = styled.div`
  display: flex;
  width: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Input = styled.input`
  width: 200px;
  background-color: transparent;
  height: 30px;
  border-radius: 10px;
  color: white;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid gray;

  &::placeholder {
    font-size: 10px;
  }

  &:read-only {
    font-size: 10px;
    color: gray;
  }

  &:read-only:focus {
    outline: none;
  }
`

export const InputInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: first baseline;
`

export const LoungeModel = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  height: 240px;
`

export const ChooseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
  height: 40px;
  margin: 30px auto;
  padding-bottom: 80px;
`

export const MoveIcon = styled.img`
  cursor: pointer;
  width: 25px;
`

export const ChooseButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
`
export const ModelIndexText = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.6);
`

export const TopContainer = styled.div`
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
`

export const InviteIcon = styled.img`
  width: 24px;
  cursor: pointer;
  height: 24px;
`

export const Icon = styled.img`
  width: 5px;
  height: 20px;
  opacity: 70%;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`

export const LoungeTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const Objets = styled.div`
  border: 0.1px solid gray;
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: calc(100% - 150px);
  align-items: center;
`

export const Deem = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  line-height: 1.6;
  height: 200px;
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.6);
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`

export const RedTextLong = styled.div`
  height: 20px;
  margin-top: 10px;
  color: #d41313;
  font-size: 10px;
`

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  height: fit-content;
`

export const InnerText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
`

export const GoObjetButton = styled.button`
  width: 150px;
  margin-top: 30px;
  height: 40px;
  padding: 5px 8px;
  background-color: black;
  opacity: 0.5;
  color: white;
  border-radius: 10px;
  border: 1px dotted white;
  font-size: 12px;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const InputDeem = styled.div``
