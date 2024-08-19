import styled from 'styled-components'

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100% - 35px);
  overflow-y: auto;
  box-sizing: border-box;
  margin-top: 30px;
`

export const NotificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const NotificationDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 27px;
  background-color: #423e3e;
  border-radius: 30px;
  box-sizing: border-box;
  align-self: center;

  font-size: 12px;
  color: #d9d9d9;
  word-spacing: -0.2px;
  margin: 10px 0;
`

export const NotificationItemContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`

export const StyledHr = styled.hr`
  border: 0.1px solid #666666;
  width: 315px;
`

export const ProfileImg = styled.span`
  width: 32px;
  height: 32px;
  font-size: 25px;
`

export const NotiContents = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 240px;
  gap: 2px;
  font-size: 11px;

  word-wrap: break-word;
  word-break: keep-all;
  white-space: normal;
`

export const NotiDatetime = styled.span`
  font-size: 8px;
  color: #6a6a6a;
`
