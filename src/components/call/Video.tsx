import { useEffect, useRef, useState } from 'react'
import { Container, VideoContainer, UserLabel } from './VideoStyles'

interface Props {
  nickname: string
  stream: MediaStream
  muted?: boolean
}

const Video = ({ nickname, stream, muted }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream
    if (muted) setIsMuted(muted)
  }, [stream, muted])

  return (
    <Container>
      <VideoContainer ref={ref} muted={isMuted} autoPlay controls />
      <UserLabel>{nickname}</UserLabel>
    </Container>
  )
}

export default Video
