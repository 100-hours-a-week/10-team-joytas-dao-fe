import styled from 'styled-components'

export const Chat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`

export const MyChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: baseline;
  margin: 10px 0;

  .contents {
    text-align: right;
  }
`

export const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
  flex-grow: 1;
  gap: 5px;
`

export const UserName = styled.span`
  font-weight: bold;
  font-size: 12px;
`

export const ContentsAndDatetime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: self-end;
  gap: 7px;

  .contents {
    font-size: 12px;
    max-width: 180px;
    border: 0.3px solid #d9d9d9;
    border-radius: 10px;
    padding: 7px;
  }

  .datetime {
    color: #b3b3b3;
    width: 48px;
    font-size: 7px;
    bottom: 0;
    white-space: pre-wrap;
  }
`
