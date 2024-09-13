import styled from 'styled-components'

export const Chat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: white;
  gap: 7px;
  margin: 3px 0;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: 7px;
  }
`

export const MyChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: baseline;
  margin: 8px 0;

  .contents {
    text-align: right;
  }
`

export const EnterAlert = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  font-size: 12px;
  color: #b3b3b3;
`

export const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 6px;
  gap: 9px;

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
  align-items: flex-end;
  gap: 7px;
  margin-right: 10px;

  .contents {
    font-size: 12px;
    max-width: 180px;
    border-radius: 15px;
    padding: 10px;

    word-break: break-word;
    white-space: pre-wrap;

    &.isMine {
      background-color: #007aff;
    }
    &.isOther {
      background-color: #666;
    }
  }

  .datetime {
    color: #b3b3b3;
    width: fit-content;
    font-size: 10px;
    margin-bottom: 2px;
    white-space: pre-wrap;
  }
`
