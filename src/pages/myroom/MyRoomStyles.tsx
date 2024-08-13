import styled from 'styled-components'

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
  padding-right: 32px;
`

export const Title = styled.span`
  color: white;
  font-size: 23px;
  font-weight: bold;
  max-width: 220px;
  margin-right: 20px;
  line-height: 1.2;
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

export const MyRoomTitleInput = styled.input`
  border: none;
  width: 220px;
  color: white;
  background-color: transparent;
  font-size: 23px;
  font-weight: bold;
  max-width: 230px;
  outline: none;
  line-height: 1.2;
`

export const MyRoomPreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  height: 310px;
  margin-bottom: 20px;
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

export const CreateBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #575fff;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 50px;
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
