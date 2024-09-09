import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import useUserStore from '../../store/userStore'
import { Container, UserLabel, MyAudio, ProfileImage } from './VideoStyles'
import Video from './Video'
import { toast } from 'react-toastify'

interface WebRTCUser {
  socket_id: string
  nickname: string
  profile_image: string
  stream: MediaStream
}

interface SocketError {
  error: {
    status: number
    message: string
  }
}

const SOCKET_SERVER_URL = import.meta.env.VITE_BACKHOST

const pc_config = {
  iceServers: [
    {
      urls: 'turn:192.158.29.39:3478?transport=udp',
      credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
      username: '28224511:1379330808',
    },
    {
      urls: 'stun:stun.l.google.com:19302',
    },
  ],
}

const VideoContainer = ({
  muted,
  objetId,
  loungeId,
}: {
  muted: boolean
  objetId: number
  loungeId: number
}) => {
  const socketRef = useRef<SocketIOClient.Socket>()
  const pcsRef = useRef<{ [socketId: string]: RTCPeerConnection }>({})
  const localAudioRef = useRef<HTMLAudioElement>(null)
  const localStreamRef = useRef<MediaStream>()
  const [users, setUsers] = useState<WebRTCUser[]>([])
  const navigate = useNavigate()

  const token = localStorage.getItem('access_token')
  const nickname = useUserStore((state) => state.nickname)
  const profile_image = useUserStore((state) => state.profileImage)
  const user_id = useUserStore((state) => state.userId)

  const getLocalStream = useCallback(async () => {
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      })
      localStreamRef.current = localStream

      if (localAudioRef.current) localAudioRef.current.srcObject = localStream
      if (!socketRef.current?.connected) {
        return
      }

      socketRef.current.emit('join_objet', {
        objet_id: objetId,
        nickname,
        profile_image,
        user_id,
      })
    } catch (e) {
      console.error(`getUserMedia error: ${e}`)
    }
  }, [objetId, nickname, profile_image, user_id])

  const createPeerConnection = useCallback(
    (socketID: string, nickname: string, profile_image: string) => {
      try {
        const pc = new RTCPeerConnection(pc_config)

        pc.onicecandidate = (e) => {
          if (!(socketRef.current && e.candidate)) return
          socketRef.current.emit('candidate', {
            candidate: e.candidate,
            candidateSendID: socketRef.current.id,
            candidateReceiveID: socketID,
          })
        }

        pc.ontrack = (e) => {
          setUsers((oldUsers) => {
            return oldUsers
              .filter((user) => user.socket_id !== socketID)
              .concat({
                socket_id: socketID,
                nickname,
                profile_image,
                stream: e.streams[0],
              })
          })
        }

        if (localStreamRef.current) {
          localStreamRef.current.getTracks().forEach((track) => {
            if (localStreamRef.current) {
              pc.addTrack(track, localStreamRef.current)
            }
          })
        } else {
          console.error('no local stream')
        }
        return pc
      } catch (e) {
        console.error(e)
        return undefined
      }
    },
    []
  )

  const muteMyAudio = useCallback(() => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = false
      })
    }
  }, [])

  const unmuteMyAudio = useCallback(() => {
    if (localStreamRef.current) {
      localStreamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = true
      })
    }
  }, [])

  useEffect(() => {
    muted ? muteMyAudio() : unmuteMyAudio()
  }, [muted])

  useEffect(() => {
    socketRef.current = io.connect(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      path: '/signaling/',
      query: {
        token,
        lounge_id: loungeId,
      },
    })

    getLocalStream()

    socketRef.current.on('error_message', (data: SocketError) => {
      toast.info(data.error.message)
      navigate(-1)
    })

    socketRef.current.on(
      'all_users',
      (
        allUsers: Array<{
          profile_image: string
          socket_id: string
          nickname: string
        }>
      ) => {
        allUsers.forEach(async (user) => {
          if (!localStreamRef.current) return
          const pc = createPeerConnection(
            user.socket_id,
            user.nickname,
            user.profile_image
          )
          if (!(pc && socketRef.current)) return
          pcsRef.current = { ...pcsRef.current, [user.socket_id]: pc }
          try {
            const localSdp = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: false,
            })
            await pc.setLocalDescription(new RTCSessionDescription(localSdp))
            socketRef.current.emit('offer', {
              sdp: localSdp,
              offerSendID: socketRef.current.id,
              offerSendNickname: nickname,
              offerReceiveID: user.socket_id,
              offerSendProfileImage: profile_image,
            })
          } catch (e) {
            console.error(e)
          }
        })
      }
    )

    socketRef.current.on(
      'getOffer',
      async (data: {
        sdp: RTCSessionDescription
        offerSendID: string
        offerSendNickname: string
        offerSendProfileImage: string
      }) => {
        const { sdp, offerSendID, offerSendNickname, offerSendProfileImage } =
          data
        if (!localStreamRef.current) return
        const pc = createPeerConnection(
          offerSendID,
          offerSendNickname,
          offerSendProfileImage
        )
        if (!(pc && socketRef.current)) return
        pcsRef.current = { ...pcsRef.current, [offerSendID]: pc }
        try {
          await pc.setRemoteDescription(new RTCSessionDescription(sdp))
          const localSdp = await pc.createAnswer({
            offerToReceiveVideo: false,
            offerToReceiveAudio: true,
          })
          await pc.setLocalDescription(new RTCSessionDescription(localSdp))
          socketRef.current.emit('answer', {
            sdp: localSdp,
            answerSendID: socketRef.current.id,
            answerReceiveID: offerSendID,
          })
        } catch (e) {
          console.error(e)
        }
      }
    )

    socketRef.current.on(
      'getAnswer',
      (data: { sdp: RTCSessionDescription; answerSendID: string }) => {
        const { sdp, answerSendID } = data
        const pc: RTCPeerConnection = pcsRef.current[answerSendID]
        if (!pc) return
        pc.setRemoteDescription(new RTCSessionDescription(sdp))
      }
    )

    socketRef.current.on(
      'getCandidate',
      async (data: {
        candidate: RTCIceCandidateInit
        candidateSendID: string
      }) => {
        const pc: RTCPeerConnection = pcsRef.current[data.candidateSendID]
        if (!pc) return
        await pc.addIceCandidate(new RTCIceCandidate(data.candidate))
      }
    )

    socketRef.current.on('user_exit', (data: { socket_id: string }) => {
      if (!pcsRef.current[data.socket_id]) return
      pcsRef.current[data.socket_id].close()
      delete pcsRef.current[data.socket_id]
      setUsers((oldUsers) =>
        oldUsers.filter((user) => user.socket_id !== data.socket_id)
      )
    })

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
      users.forEach((user) => {
        if (pcsRef.current[user.socket_id]) {
          pcsRef.current[user.socket_id].close()
          delete pcsRef.current[user.socket_id]
        }
      })

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop())
        localStreamRef.current = undefined
      }
    }
  }, [createPeerConnection, getLocalStream])

  return (
    <>
      {/*본인*/}
      <Container>
        <ProfileImage src={profile_image} />
        <MyAudio muted={true} ref={localAudioRef} autoPlay />
        <UserLabel>{nickname}</UserLabel>
      </Container>

      {/*다른 사용자*/}
      {users.map((user, index) => (
        <Container key={index}>
          <Video
            profileImage={user.profile_image}
            nickname={user.nickname}
            stream={user.stream}
            muted={false}
          />
        </Container>
      ))}
    </>
  )
}

export default VideoContainer
