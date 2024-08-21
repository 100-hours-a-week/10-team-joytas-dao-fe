import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  Active,
  CallSubTitle,
  CallTitle,
  ChatContainer,
  ChatInput,
  ChatInputBox,
  ChatSendButton,
  ChatsWrapper,
  Icon,
  LeftContainer,
  Name,
  ObjetActive,
  ObjetMaker,
  RightContainer,
  TopContainer,
} from './ObjetStyles'
import { ChatMessage } from '../../components/objet/Chat'
import SendImg from '../../assets/images/send.png'
import LeaveImg from '../../assets/images/leave.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ObjetChatting() {
  const [isActive, setIsActive] = useState(false)
  const name = 'jamie'
  const navigate = useNavigate()

  // TODO: delete me
  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <Layout>
      <GloablContainer16>
        <TopContainer>
          <LeftContainer>
            <CallTitle>굳나잇 지키 오브제</CallTitle>
            <CallSubTitle>
              <ObjetMaker>
                만든이 <Name>{name}</Name>
              </ObjetMaker>
              <ObjetActive>
                실시간 <Active isActive={isActive} />
              </ObjetActive>
            </CallSubTitle>
          </LeftContainer>
          <RightContainer>
            <Icon
              className='leave'
              src={LeaveImg}
              onClick={() => navigate(-1)}
            />
          </RightContainer>
        </TopContainer>
        <ChatContainer>
          <ChatsWrapper>
            <ChatMessage
              userName='jun'
              userId={1}
              profileImg=''
              content='안녕하세요'
              datetime='2021-09-01 12:00:00'
            />
            <ChatMessage
              userName='jun'
              userId={1}
              profileImg=''
              content='안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
              datetime='2021-09-01 12:11:00'
            />
            <ChatMessage
              userName='jamie'
              userId={2}
              profileImg=''
              content='안녕하세요'
              datetime='2021-09-01 12:12:00'
            />
            <ChatMessage
              userName='jikky'
              userId={3}
              profileImg=''
              content='안녕하세요안녕하세요안녕하세요안녕하세요'
              datetime='2021-09-01 12:13:00'
            />
            <ChatMessage
              userName='erica'
              userId={4}
              profileImg=''
              content='안녕하세요'
              datetime='2021-09-01 12:22:00'
            />
            <ChatMessage
              userName='hong'
              userId={1}
              profileImg=''
              content='안녕하세요'
              datetime='2021-09-01 12:25:00'
            />
            <ChatMessage
              userName='jamie'
              userId={2}
              profileImg=''
              content='안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
              datetime='2021-09-01 12:26:00'
            />
            <ChatMessage
              userName='hong'
              userId={1}
              profileImg=''
              content='안녕하세요'
              datetime='2021-09-01 12:32:00'
            />
            <ChatMessage
              userName='hong'
              userId={1}
              profileImg=''
              content='안녕하세요'
              datetime='2021-09-01 12:34:00'
            />
            <ChatMessage
              userName='jamie'
              userId={2}
              profileImg=''
              content='안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
              datetime='2021-09-01 12:35:00'
            />
          </ChatsWrapper>
          <ChatInputBox>
            <ChatInput placeholder='채팅을 입력해주세요.' />
            <ChatSendButton src={SendImg} />
          </ChatInputBox>
        </ChatContainer>
      </GloablContainer16>
    </Layout>
  )
}
