import styled from 'styled-components'

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ObjetModel = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  height: 240px;
`

export const MiniObjetModel = styled.div`
  width: 40px;
  height: 40px;
  margin: 70px 0 0 50px;
`

export const ChooseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 20px;
  height: 40px;
  margin: 10px auto;
`

export const MoveIcon = styled.img`
  cursor: pointer;
  width: 25px;
`

export const ChooseButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: 0;
`

export const ModelIndexText = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 50px;
  color: rgba(255, 255, 255, 0.6);
`

export const Container = styled.div`
  width: 100%;
  margin-top: 70px;
  box-sizing: border-box;
  gap: 30px;
  display: flex;
  flex-direction: column;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 13px;
  width: 100%;
`

export const ItemLabel = styled.span`
  display: flex;
  flex-direction: row;
  width: 90px;
  font-size: 13px;
  font-weight: semi-bold;
  margin-right: 20px;
`

export const InputBox = styled.div<{ longtext?: boolean; img?: boolean }>`
  width: 250px;
  height: ${(props) => (props.longtext ? '90px' : '40px')};
  border-radius: 12px;
  background-color: transparent;
  border: 1px solid #e0e0e0;
  color: gray;

  input {
    background-color: transparent;
    padding: 10px;
    border: none;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    color: white;
    box-sizing: border-box;
    display: ${(props) => (props.img ? 'none' : 'block')};
  }

  .placeholder {
    color: #888;
    font-size: 14px;
  }
`

export const ObjetImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`

export const RedText = styled.span`
  font-size: 10px;
  color: red;
`

export const GenerateButton = styled(ChooseButton)``

export const UploadButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: transparent; /* 원하는 색상으로 변경 가능 */
  color: white;
  border: 1px solid #e0e0e0;
  text-align: center;
`

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
  overflow-x: scroll;
  width: 220px;
`

export const Tag = styled.span`
  padding: 3px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 12px;
  border: 1px solid #e0e0e0;
  width: fit-content;

  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
`

export const Icon = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  cursor: pointer;
`
