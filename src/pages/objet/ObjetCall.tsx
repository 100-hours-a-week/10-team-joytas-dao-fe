import Layout from '@components/Layout'
import {
  MicButton,
  CallButton,
  Icon,
  MiddleContainer,
  BottomContainer,
} from './ObjetCallStyles'
// import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
// import { Avatar } from 'antd'
import mute from '@images/mute.webp'
import unmute from '@images/unmute.webp'
import quitCall from '@images/quitCall.webp'
import { useEffect, useState } from 'react'
import {
  ObjetCallContainer,
  TopContainer,
  LeftContainer,
  RightContainer,
  CallTitle,
  CallSubTitle,
  ObjetMaker,
  // ObjetActive,
  // Active,
  Name,
} from './ObjetStyles'
import VideoContainer from '@components/call/VideoContainer'
import { useParams, useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'

export default function ObjetCall() {
  const navigate = useNavigate()
  const [muted, setMuted] = useState(false)
  // const [isActive, setIsActive] = useState(false)
  const { oid: objetId } = useParams()
  const [loungeId, setLoungeId] = useState(0)
  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const data = await response.json()

        setCreator(data.data.nickname)
        setName(data.data.name)
        setLoungeId(data.data.lounge_id)
      }
    } catch (error) {
      console.error('오브제 정보 가져오기 실패: ', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // TODO: delete me
  // useEffect(() => {
  //   setIsActive(true)
  // }, [])

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
              {/* <ObjetActive>
                실시간 <Active $isActive={isActive} />
              </ObjetActive> */}
            </CallSubTitle>
          </LeftContainer>
          <RightContainer>
            {/* <Avatar.Group
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
            </Avatar.Group> */}
          </RightContainer>
        </TopContainer>

        {!loading && loungeId !== 0 && (
          <MiddleContainer>
            <VideoContainer
              muted={muted}
              objetId={Number(objetId)}
              loungeId={loungeId}
            />
          </MiddleContainer>
        )}

        <BottomContainer>
          <MicButton>
            <Icon
              src={muted ? mute : unmute}
              onClick={() => setMuted(!muted)}
            />
          </MicButton>
          <CallButton onClick={() => navigate(`${URL.objet}/${objetId}`)}>
            <Icon src={quitCall} />
          </CallButton>
        </BottomContainer>
      </ObjetCallContainer>
    </Layout>
  )
}
