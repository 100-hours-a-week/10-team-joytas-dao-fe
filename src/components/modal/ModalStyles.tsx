import styled, { css } from 'styled-components'

const positionCenter = css`
  position: fixed;
  z-index: 1000;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const DeleteModalContainer = styled.div`
  ${positionCenter}
  display: flex;
  width: 270px;
  border-radius: 12px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  color: black;
`

export const DeleteModalTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 10px;
`

export const DeleteModalContents = styled.div`
  span {
    font-size: 15px;
    font-weight: 300;
    line-height: 24px;
    text-align: center;
    display: block;
  }
`

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
`

export const ModalButton = styled.button`
  width: 95px;
  height: 33px;
  border-radius: 12px;
  border: none;

  font-size: 15px;
  font-weight: 200;

  &:hover {
    cursor: pointer;
  }

  &.cancel {
    background-color: #d9d9d9;
  }
  &.confirm {
    background-color: #242424;
    color: #fff;
  }
`

export const LoungeListModalContainer = styled.div`
  ${positionCenter}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 12px;
  background-color: white;

  padding: 20px;
  box-sizing: border-box;
`

export const LoungeListModalTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  color: black;
`

export const LoungeListModalContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;

  box-sizing: border-box;
  margin-top: 10px;
  overflow-y: auto;
  color: black;

  border: 0.5px solid #242424;
  border-radius: 10px;
  padding: 10px 0;
`

export const LoungeListModalItem = styled.div`
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 1px 10px;
  cursor: pointer;

  &.selected {
    background-color: #d9d9d9;
    font-weight: bold;
  }

  &:hover {
    background-color: #d9d9d9;
    font-weight: bold;
  }
`

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
`
