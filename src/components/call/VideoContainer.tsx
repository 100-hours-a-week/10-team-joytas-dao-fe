import { useState, useRef, useEffect, useCallback } from 'react'
import io from 'socket.io-client'
import Video from './Video'

interface WebRTCUser {
  id: string
  email: string
  stream: MediaStream
}

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

// 로컬 환경 소켓 서버
// const SOCKET_SERVER_URL = 'https://localhost:8083'

// 배포 환경 소켓 서버
const SOCKET_SERVER_URL =
  'https://ec2-13-125-226-136.ap-northeast-2.compute.amazonaws.com:8083'

const VideoContainer = () => {
  const socketRef = useRef<SocketIOClient.Socket>()
  const pcsRef = useRef<{ [socketId: string]: RTCPeerConnection }>({})
  const localVideoRef = useRef<HTMLVideoElement>(null)
  const localStreamRef = useRef<MediaStream>()
  const [users, setUsers] = useState<WebRTCUser[]>([])

  const getLocalStream = useCallback(async () => {
    try {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 120,
          height: 120,
        },
      })
      localStreamRef.current = localStream
      if (localVideoRef.current) localVideoRef.current.srcObject = localStream
      if (!socketRef.current) return
      socketRef.current.emit('join_room', {
        room: '1234',
        email: 'jikky.kim',
      })
    } catch (e) {
      console.log(`getUserMedia error: ${e}`)
    }
  }, [])

  const createPeerConnection = useCallback(
    (socketID: string, email: string) => {
      try {
        const pc = new RTCPeerConnection(pc_config)

        pc.onicecandidate = (e) => {
          if (!(socketRef.current && e.candidate)) return
          console.log('onicecandidate')
          socketRef.current.emit('candidate', {
            candidate: e.candidate,
            candidateSendID: socketRef.current.id,
            candidateReceiveID: socketID,
          })
        }

        pc.oniceconnectionstatechange = (e) => {
          console.log(e)
        }

        pc.ontrack = (e) => {
          console.log('ontrack success')
          setUsers((oldUsers) =>
            oldUsers
              .filter((user) => user.id !== socketID)
              .concat({
                id: socketID,
                email,
                stream: e.streams[0],
              })
          )
        }

        if (localStreamRef.current) {
          console.log('localstream add')
          localStreamRef.current.getTracks().forEach((track) => {
            if (!localStreamRef.current) return
            pc.addTrack(track, localStreamRef.current)
          })
        } else {
          console.log('no local stream')
        }

        return pc
      } catch (e) {
        console.error(e)
        return undefined
      }
    },
    []
  )

  useEffect(() => {
    socketRef.current = io.connect(SOCKET_SERVER_URL)
    getLocalStream()

    socketRef.current.on(
      'all_users',
      (allUsers: Array<{ id: string; email: string }>) => {
        allUsers.forEach(async (user) => {
          if (!localStreamRef.current) return
          const pc = createPeerConnection(user.id, user.email)
          if (!(pc && socketRef.current)) return
          pcsRef.current = { ...pcsRef.current, [user.id]: pc }
          try {
            const localSdp = await pc.createOffer({
              offerToReceiveAudio: true,
              offerToReceiveVideo: true,
            })
            console.log('create offer success')
            await pc.setLocalDescription(new RTCSessionDescription(localSdp))
            socketRef.current.emit('offer', {
              sdp: localSdp,
              offerSendID: socketRef.current.id,
              offerSendEmail: 'offerSend@sample.com',
              offerReceiveID: user.id,
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
        offerSendEmail: string
      }) => {
        const { sdp, offerSendID, offerSendEmail } = data
        console.log('get offer')
        if (!localStreamRef.current) return
        const pc = createPeerConnection(offerSendID, offerSendEmail)
        if (!(pc && socketRef.current)) return
        pcsRef.current = { ...pcsRef.current, [offerSendID]: pc }
        try {
          await pc.setRemoteDescription(new RTCSessionDescription(sdp))
          console.log('answer set remote description success')
          const localSdp = await pc.createAnswer({
            offerToReceiveVideo: true,
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
        console.log('get answer')
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
        console.log('get candidate')
        const pc: RTCPeerConnection = pcsRef.current[data.candidateSendID]
        if (!pc) return
        await pc.addIceCandidate(new RTCIceCandidate(data.candidate))
        console.log('candidate add success')
      }
    )

    socketRef.current.on('user_exit', (data: { id: string }) => {
      if (!pcsRef.current[data.id]) return
      pcsRef.current[data.id].close()
      delete pcsRef.current[data.id]
      setUsers((oldUsers) => oldUsers.filter((user) => user.id !== data.id))
    })

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect()
      }
      users.forEach((user) => {
        if (!pcsRef.current[user.id]) return
        pcsRef.current[user.id].close()
        delete pcsRef.current[user.id]
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createPeerConnection, getLocalStream])

  return (
    <>
      <video
        style={{
          // NOTE: 크기조정
          width: 80,
          height: 80,
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: 'black',
          borderRadius: 100,
        }}
        muted
        ref={localVideoRef}
        autoPlay
      />
      {users.map((user, index) => (
        <Video key={index} email={user.email} stream={user.stream} />
      ))}
    </>
  )
}

export default VideoContainer
