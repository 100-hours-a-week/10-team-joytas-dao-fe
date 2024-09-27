import { Client, StompSubscription } from '@stomp/stompjs'
import { APIs } from '@/static'

export const stompClient = new Client({
  brokerURL: `${APIs.stomp}/ws/init`,

  // YOU CAN DEBUG BY UNCOMMENTING THIS LINE
  // debug: function (str) {
  //   console.log(str)
  // },
})

let subscription: StompSubscription | null = null
let isConnected = false

export function connectToRoom(
  roomToken: string,
  onEnter: () => void,
  onMessageReceived: (message: string) => void
) {
  if (isConnected) {
    return
  }

  stompClient.onConnect = () => {
    isConnected = true

    const subscribeToRoom = () => {
      subscription = stompClient.subscribe(
        `/sub/chat-rooms/${roomToken}`,
        (message) => {
          onMessageReceived(message.body)
        }
      )
    }

    // 채팅방 구독
    if (subscription) {
      // 이미 구독 중이라면 해제 후 다시 구독
      subscription.unsubscribe()

      subscribeToRoom()
    } else {
      subscribeToRoom()

      // 채팅방 입장
      onEnter()
    }
  }

  stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error)
    isConnected = false // 오류 발생 시 연결 상태를 false로 설정
  }

  stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message'])
    console.error('Additional details: ' + frame.body)
  }

  if (!stompClient.connected) {
    stompClient.activate()
  }
}

export function disconnectFromRoom(onExit: () => void) {
  if (subscription) {
    subscription.unsubscribe()
    subscription = null

    onExit()
  }

  stompClient.deactivate()
  isConnected = false
}
