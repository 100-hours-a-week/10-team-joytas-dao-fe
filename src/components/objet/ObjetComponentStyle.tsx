import styled from 'styled-components'

export const ObjetList = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ObjetContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`
export const ObjetImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: grey;
`

export const ObjetContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

export const ObjetTitle = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: bold;
`

export const ObjetDescription = styled.div`
  font-size: 10px;
`

export const CommunityBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
  }
`

// 모달

export const DeleteModalContainer = styled.div`
  display: flex;
  width: 230px;
  height: 140px;
  border-radius: 12px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  color: black;

  position: fixed;
  z-index: 1000;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  .btnContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 30px;
  }
`

export const DeleteModalButton = styled.button`
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
    background-color: #242424;
    color: #fff;
  }
  &.confirm {
    background-color: #d9d9d9;
  }
`

export const DeleteModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
  display: none;
`

export const MenuModalContainer = styled.div`
  position: absolute;
  top: 85px;
  right: 0;
  width: 100px;
  background-color: #d9d9d9;
  z-index: 1000;

  div {
    padding: 10px;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    color: black;

    &:hover {
      background-color: #242424;
      color: white;
      cursor: pointer;
    }
  }
`

export const ModalBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 5;
`
