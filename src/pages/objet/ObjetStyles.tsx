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

export const ObjetImgPreview = styled.img`
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
  background-color: transparent;
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

  &.menu {
    margin-left: 20px;
    width: 5px;
    height: 20px;
  }
`

// 오브제 상세 조회, 오브제 음성 통화

export const TopContainer = styled.div`
  display: flex;
  height: fit-content;
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`

export const LeftContainer = styled.div`
  width: fit-content;
`

export const RightContainer = styled.div`
  width: fit-content;
`

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

export const ObjetDetailContainer = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

export const ObjetImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 10px 0;
`

export const ObjetDescription = styled.div`
  margin: 20px 0;
  height: 120px;
  overflow-y: scroll;
  color: white;
  font-size: 14px;
`

export const CommunityContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #383838;
  gap: 20px;
  border-radius: 10px 10px 0 0;
`

export const ChattingsWrapper = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const GoToBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`

export const CallToast = styled.div`
  background-color: #d9d9d9;
  width: 130px;
  height: 30px;
  border-radius: 20px;

  color: black;
  font-size: 14px;

  display: none;
  text-align: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
