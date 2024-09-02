import styled from 'styled-components'

export const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 70px;
`

export const Title = styled.span`
  color: white;
  font-size: 19px;
  font-weight: bold;
  max-width: 240px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-right: 20px;
  height: 32px;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 5px 0 5px 10px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
  }
`

export const IconWithBorder = styled(Icon)`
  margin-left: 8px;
  padding: 3px;
  border-radius: 50%;
`

export const StyledGloablContainer16 = styled.div`
  width: 100%;
  height: 490px;
  padding: 0 16px;
  box-sizing: border-box;
  color: white;
`

export const MyRoomTitleInput = styled.input`
  border: none;
  width: 100%;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
  font-weight: bold;
  max-width: 230px;
`

export const MyRoomPreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  height: 310px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const MyRoomName = styled.span`
  color: white;
  font-size: 15px;
  margin-top: 10px;
`

export const MyRoomList = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  overflow-x: auto;
`

export const MyRoomThumbnail = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const CreateBtn = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
`

export const ObjetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;

  color: white;

  cursor: pointer;
`

export const MyRoomIconContainer = styled.div`
  display: flex;
  align-items: center;
`
