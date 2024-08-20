import { useEffect, useRef, useState } from 'react'
import { Container, VideoContainer, UserLabel } from './VideoStyles'

interface Props {
  email: string
  stream: MediaStream
  muted?: boolean
}

const Video = ({ email, stream, muted }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream
    if (muted) setIsMuted(muted)
  }, [stream, muted])

  return (
    <Container>
      <VideoContainer ref={ref} muted={isMuted} autoPlay controls />
      <UserLabel>{email}</UserLabel>
    </Container>
  )
}

export default Video
