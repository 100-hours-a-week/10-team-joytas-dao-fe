import { useEffect, useRef, useState } from 'react'
import {
  Container,
  AudioContainer,
  UserLabel,
  ProfileImage,
} from './VideoStyles'

interface Props {
  nickname: string
  stream: MediaStream
  muted?: boolean
  profileImage: string
}

const Video = ({ profileImage, nickname, stream, muted }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) ref.current.srcObject = stream
    if (muted) setIsMuted(muted)
  }, [stream, muted])

  return (
    <Container>
      <ProfileImage src={profileImage} />
      <AudioContainer ref={ref} muted={isMuted} autoPlay controls />
      <UserLabel>{nickname}</UserLabel>
    </Container>
  )
}

export default Video
