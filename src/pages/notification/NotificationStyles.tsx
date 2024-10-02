import styled from 'styled-components'

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
  overflow-y: auto;
  box-sizing: border-box;
  margin-top: 20px;
  padding-bottom: 80px;
`

export const NotificationGroup = styled.div`
  display: flex;
  flex-direction: column;
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

export const NotificationItemContainer = styled.div<{ $isRead: boolean }>`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  cursor: pointer;
  opacity: ${(props) => (props.$isRead ? 0.5 : 0.9)};

  &:hover {
    background-color: #2d2d2d;
    border-radius: 15px;
  }
`

export const StyledHr = styled.hr`
  border: 0.1px solid #666666;
  width: 90%;
`

export const TypeImg = styled.img`
  width: 25px;
  height: 25px;
`

export const NotiContents = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 85%;
  gap: 2px;
  font-size: 11px;

  word-wrap: break-word;
  word-break: keep-all;
  white-space: normal;
`

export const NotiDatetime = styled.span`
  font-size: 8px;
  color: #6a6a6a;
  width: 6%;
`
