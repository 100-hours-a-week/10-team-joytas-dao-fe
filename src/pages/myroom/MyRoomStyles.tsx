import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`

export const Title = styled.h1`
  color: white;
  font-size: 23px;
  font-weight: bold;
  margin: 0 auto;
  padding-top: 80px;
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
