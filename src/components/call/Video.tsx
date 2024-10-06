import { useEffect, useRef, useState, useCallback } from 'react'
import {
  Container,
  AudioContainer,
  UserLabel,
  ProfileImage,
  MuteButton,
} from './VideoStyles'
import volumeOff from '@images/volumeOff.png'
import volumeOn from '@images/volumeOn.png'

interface Props {
  nickname: string
  stream: MediaStream
  muted?: boolean
  profileImage: string
}

const Video = ({ profileImage, nickname, stream, muted }: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  const [isUserMuted, setIsUserMuted] = useState<boolean>(false)

  const checkSpeaking = useCallback(() => {
    if (analyserRef.current) {
      const bufferLength = analyserRef.current.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      analyserRef.current.getByteFrequencyData(dataArray)

      const maxVolume = Math.max(...dataArray)
      // NOTE: 일반적으로 30~50을 기준으로 하지만, 실제 대화를 통한 적정값 도출 필요
      if (maxVolume > 20) {
        setIsSpeaking(true)
      } else {
        setIsSpeaking(false)
      }
    }
  }, [])

  const toggleMuteUser = useCallback(() => {
    setIsUserMuted((prevState) => !prevState)
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled
    })
  }, [stream])

  useEffect(() => {
    if (ref.current && stream) {
      ref.current.srcObject = stream
      audioContextRef.current = new AudioContext()
      const source = audioContextRef.current.createMediaStreamSource(stream)
      const analyser = audioContextRef.current.createAnalyser()

      analyser.fftSize = 256
      analyserRef.current = analyser

      source.connect(analyser)
    }

    const intervalId = setInterval(checkSpeaking, 200)

    if (muted) setIsMuted(muted)

    return () => {
      clearInterval(intervalId)
      if (audioContextRef.current) audioContextRef.current.close()
    }
  }, [stream, muted, checkSpeaking])

  return (
    <Container>
      <ProfileImage src={profileImage} $isSpeaking={isSpeaking} />
      <AudioContainer ref={ref} muted={isMuted} autoPlay controls />
      <UserLabel>
        {nickname}
        <MuteButton
          onClick={toggleMuteUser}
          src={isUserMuted ? volumeOff : volumeOn}
        />
      </UserLabel>
    </Container>
  )
}

export default Video
