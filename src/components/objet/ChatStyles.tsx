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
    object-fit: cover;
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

export const EnterAlert = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0;

  font-size: 12px;
  color: #b3b3b3;
`

export const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 6px;
  gap: 5px;

  .preview {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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

    word-break: break-word;
    white-space: pre-wrap;
  }

  .datetime {
    color: #b3b3b3;
    width: 55px;
    font-size: 7px;
    bottom: 0;
    white-space: pre-wrap;
  }
`
