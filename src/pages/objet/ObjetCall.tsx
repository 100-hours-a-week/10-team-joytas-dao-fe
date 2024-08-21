import Layout from '../../components/Layout'
import {
  MicButton,
  CallButton,
  Icon,
  MiddleContainer,
  BottomContainer,
} from './ObjetCallStyles'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import mute from '../../assets/images/mute.png'
import unmute from '../../assets/images/unmute.png'
import quitCall from '../../assets/images/quitCall.png'
import { useEffect, useState } from 'react'
import {
  ObjetCallContainer,
  TopContainer,
  LeftContainer,
  RightContainer,
  CallTitle,
  CallSubTitle,
  ObjetMaker,
  ObjetActive,
  Active,
  Name,
} from './ObjetStyles'
import VideoContainer from '../../components/call/VideoContainer'

export default function ObjetCall() {
  const [muted, setMuted] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const name = 'jamie'

  // TODO: delete me
  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <Layout>
      <ObjetCallContainer>
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
            <Avatar.Group
              max={{
                count: 3,
                style: { color: '#f56a00', backgroundColor: '#fde3cf' },
              }}
            >
              <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
              <Avatar
                style={{ backgroundColor: '#1677ff' }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </RightContainer>
        </TopContainer>
        <MiddleContainer>
          <VideoContainer />
        </MiddleContainer>
        <BottomContainer>
          <MicButton>
            <Icon
              src={muted ? unmute : mute}
              onClick={() => setMuted(!muted)}
            />
          </MicButton>
          <CallButton>
            <Icon src={quitCall} />
          </CallButton>
        </BottomContainer>
      </ObjetCallContainer>
    </Layout>
  )
}
