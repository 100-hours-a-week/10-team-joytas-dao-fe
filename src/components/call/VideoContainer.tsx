import { useState, useRef, useEffect, useCallback } from 'react'
import io from 'socket.io-client'
import Video from './Video'

interface WebRTCUser {
  id: string
  nickname: string
  stream: MediaStream
}

interface SocketError {
  error: {
    status: number
    message: string
  }
}

/* 로컬 시그널링 서버 */
const SOCKET_SERVER_URL = 'https://localhost:8083'

/* 테스트 시그널링 서버 */
// const SOCKET_SERVER_URL =
//   'https://ec2-13-125-226-136.ap-northeast-2.compute.amazonaws.com:8083'

/* 배포 시그널링 서버 */
// const SOCKET_SERVER_URL =
//   'https:api.joytas.kro.kr/signaling'

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

      if (!socketRef.current?.connected) {
        console.log('signaling failed')
        return
      }

      console.log('signaling succeeded')

      socketRef.current.emit('join_objet', {
        objet_id,
        nickname,
      })
    } catch (e) {
      console.log(`getUserMedia error: ${e}`)
    }
  }, [])

  const createPeerConnection = useCallback(
    (socketID: string, nickname: string) => {
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
                nickname,
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

  /****** 테스트용 INVALID TOKEN ******/
  // const token =
  //   'eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJfaWQiOjEasdasdasdImFjY2Vzc190b2tlbiIsImlhdCI6MTcyNDIwNzcwMCwiZXhwIjoxNzI1MTk1MzU1fQ.YT4RLKHP2QPQWi8DAwhnlK0WqB8H-FU3k5Tc5tYIj2I'

  /****** 테스트용 VALID TOKEN ******/
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJfaWQiOjEwMDYsInN1YiI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTcyNDIwNzcwMCwiZXhwIjoxNzI1MTk1MzU1fQ.YT4RLKHP2QPQWi8DAwhnlK0WqB8H-FU3k5Tc5tYIj2I'

  /****** 진짜 써야할 토큰 /******/
  // const token = localStorage.getItem('access_token')

  const objet_id = 1
  const nickname = 'joytas'

  useEffect(() => {
    socketRef.current = io.connect(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      query: {
        token,
        objet_id,
      },
    })

    getLocalStream()

    socketRef.current.on('error_message', (data: SocketError) => {
      console.error('Error:', data.error)
      alert(`Error: ${data.error.message}`)
    })

    socketRef.current.on(
      'all_users',
      (allUsers: Array<{ id: string; nickname: string }>) => {
        allUsers.forEach(async (user) => {
          if (!localStreamRef.current) return
          const pc = createPeerConnection(user.id, user.nickname)
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
              offerSendNickname: nickname,
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
        offerSendNickname: string
      }) => {
        const { sdp, offerSendID, offerSendNickname } = data
        console.log('get offer')
        if (!localStreamRef.current) return
        const pc = createPeerConnection(offerSendID, offerSendNickname)
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
        <Video key={index} nickname={user.nickname} stream={user.stream} />
      ))}
    </>
  )
}

export default VideoContainer
