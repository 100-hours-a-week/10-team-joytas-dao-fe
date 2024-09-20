import Layout from '@components/Layout'
import {
  MicButton,
  CallButton,
  Icon,
  MiddleContainer,
  BottomContainer,
} from './ObjetCallStyles'
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
  CreatedInfo,
  ObjetMaker,
  Name,
  ObjetDate,
} from './ObjetStyles'
import VideoContainer from '@components/call/VideoContainer'
import { useParams, useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'
import { extractYearMonthDate } from '@/utils/formatDatetime'

export default function ObjetCall() {
  const navigate = useNavigate()
  const [muted, setMuted] = useState(false)
  const { oid: objetId } = useParams()
  const [loungeId, setLoungeId] = useState(0)
  const [creator, setCreator] = useState('')
  const [name, setName] = useState('')
  const [createdAt, setCreatedAt] = useState('')

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
        setCreatedAt(data.data.created_at)
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

  return (
    <Layout>
      <ObjetCallContainer>
        <TopContainer>
          <LeftContainer>
            <CallTitle>{name}</CallTitle>
            <CreatedInfo>
              <ObjetMaker>
                <Name>{creator}</Name>
              </ObjetMaker>
              |<ObjetDate>{extractYearMonthDate(createdAt)}</ObjetDate>
            </CreatedInfo>
          </LeftContainer>
          <RightContainer></RightContainer>
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
