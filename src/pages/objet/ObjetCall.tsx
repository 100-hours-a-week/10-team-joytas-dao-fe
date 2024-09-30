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
import { useState } from 'react'
import VideoContainer from '@components/call/VideoContainer'
import { useParams, useNavigate } from 'react-router-dom'
import { URL } from '@/static'
import { useObjetContext } from '@/utils/objetContext'

export default function ObjetCall() {
  const navigate = useNavigate()
  const [muted, setMuted] = useState(false)
  const { oid: objetId } = useParams()

  const objetContext = useObjetContext()
  const { objetData: { lounge_id: loungeId = 0 } = {} } = objetContext || {}

  return (
    <>
      {loungeId !== 0 && (
        <MiddleContainer>
          <VideoContainer
            muted={muted}
            objetId={Number(objetId)}
            loungeId={Number(loungeId)}
          />
        </MiddleContainer>
      )}

      <BottomContainer>
        <MicButton>
          <Icon src={muted ? mute : unmute} onClick={() => setMuted(!muted)} />
        </MicButton>
        <CallButton onClick={() => navigate(`${URL.objet}/${objetId}`)}>
          <Icon src={quitCall} />
        </CallButton>
      </BottomContainer>
    </>
  )
}
