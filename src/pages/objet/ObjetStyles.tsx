import styled, { css } from 'styled-components'

// 공통 스타일

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const commonBoxStyles = css`
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  color: gray;
`

// 컴포넌트 스타일

export const UpperContainer = styled.div`
  ${flexRow}
  align-items: center;
  margin-bottom: 20px;
`

export const ObjetModel = styled.div`
  ${flexCenter}
  margin-top: 30px;
  width: 100%;
  border-radius: 10px;
  height: 240px;
`

export const MiniObjetModel = styled.div`
  width: 40px;
  height: 40px;
  margin: 70px 0 0 50px;
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
  border: none;
`

export const ModelIndexText = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 50px;
  color: rgba(255, 255, 255, 0.6);
`

export const Container = styled.div`
  ${flexColumn}
  width: 100%;
  height: 540px;
  margin-top: 70px;
  box-sizing: border-box;
  gap: 2px;
  position: relative;
`

export const ItemWrapper = styled.div`
  ${flexRow}
  align-items: flex-start;
  margin-bottom: 13px;
  width: 100%;
`

export const ItemLabel = styled.span`
  ${flexRow}
  width: 90px;
  font-size: 13px;
  font-weight: semi-bold;
  margin: 10px 20px 0 0;
`

export const ItemInput = styled.div``

export const InputBox = styled.div<{
  className?: string
  longtext?: boolean
  img?: boolean
}>`
  ${() => commonBoxStyles}
  width: ${(props) => (props.img ? '120px' : '220px')};
  height: ${(props) => {
    if (props.longtext) return '90px'
    if (props.img && props.className === 'updateImg') return '120px'
    if (props.img && props.className !== 'updateImg') return 'auto'
    return '40px'
  }};
  ${(props) => props.className === 'member' && 'margin-bottom: 30px;'}
  ${(props) => props.img && 'position: relative;'}

  input,
  textarea {
    background-color: transparent;
    padding: 10px;
    border: none;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    color: white;
    box-sizing: border-box;
  }

  input {
    display: ${(props) => (props.img ? 'none' : 'block')};
  }

  textarea {
    resize: none;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    vertical-align: top;
  }
`

export const ObjetImgPreview = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
  position: relative;
`

export const RedText = styled.span`
  font-size: 11px;
  color: red;
`

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

export const ImageOverlay = styled.div`
  ${flexCenter}
  width: 120px;
  height: 120px;
  background: #4646465c;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    cursor: pointer;
  }

  label {
    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`

export const TagWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  overflow-x: scroll;
  width: 220px;
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

export const ChooseContainer = styled.div`
  ${flexCenter}
  flex-direction: row;
  gap: 20px;
  height: 40px;
  margin: 10px auto;
  position: absolute;
  bottom: 2%;
  width: 100%;
`

export const GenerateButton = styled(ChooseButton)``

// 오브제 상세 조회, 오브제 음성 통화

export const TopContainer = styled.div`
  ${flexRow}
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
  ${flexRow}
  align-items: center;
  gap: 20px;
  color: white;
  margin-top: 10px;
  font-size: 12px;
`

export const ObjetMaker = styled.div`
  ${flexCenter}
  gap: 10px;
`

export const Name = styled.div`
  color: gray;
`

export const ObjetActive = styled.div`
  ${flexCenter}
  gap: 10px;
`

export const Active = styled.div`
  background-color: #00ff0a;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`

export const ObjetDetailContainer = styled.div`
  ${flexColumn}
  width: 100%;
  height: 370px;
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
  ${flexColumn}
  width: 100%;
  height: 250px;
  justify-content: center;
  background-color: #383838;
  gap: 20px;
  border-radius: 10px 10px 0 0;
`

export const ChattingsWrapper = styled.div`
  ${flexColumn}
  width: 100%;
  height: 130px;
  gap: 13px;
`

export const GoToBtnWrapper = styled.div`
  ${flexRow}
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
