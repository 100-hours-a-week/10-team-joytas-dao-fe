import Layout from '../../components/Layout'
import {
  // MicButton,
  CallButton,
  Icon,
  MiddleContainer,
  BottomContainer,
} from './ObjetCallStyles'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
// import mute from '../../assets/images/mute.png'
// import unmute from '../../assets/images/unmute.png'
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
import { useParams, useNavigate } from 'react-router-dom'
import { APIs } from '../../static'

export default function ObjetCall() {
  const navigate = useNavigate()
  // const [muted, setMuted] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { oid: objetId } = useParams()
  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setCreator(data.data.nickname)
        setName(data.data.name)
      }
    } catch (error) {
      console.log('오브제 정보 가져오기 실패: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // TODO: delete me
  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <Layout>
      <ObjetCallContainer>
        <TopContainer>
          <LeftContainer>
            <CallTitle>{name}</CallTitle>
            <CallSubTitle>
              <ObjetMaker>
                만든이 <Name>{creator}</Name>
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
          <VideoContainer objetId={Number(objetId)} />
        </MiddleContainer>
        <BottomContainer>
          {/* <MicButton>
            <Icon
              src={muted ? unmute : mute}
              onClick={() => setMuted(!muted)}
            />
          </MicButton> */}
          <CallButton onClick={() => navigate(-1)}>
            <Icon src={quitCall} />
          </CallButton>
        </BottomContainer>
      </ObjetCallContainer>
    </Layout>
  )
}
