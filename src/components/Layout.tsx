import Header from './Header'
import Footer from './Footer'
import { Main, ChildrenDiv } from './LayoutStyles'
import { useEffect } from 'react'
import { useUserInfo } from '../hooks/useInfo'
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { APIs } from '../static'
import useUserStore from '../store/userStore'
import {
  NotificationProps,
  ConnectNotificationProps,
} from '../hooks/useNotification'
import { toast } from 'react-toastify'

interface LayoutStyles {
  padding: string
}

export default function Layout({
  style,
  children,
}: {
  style?: LayoutStyles
  children: JSX.Element
}) {
  const { getProfile } = useUserInfo()

  const userId = useUserStore((state) => state.userId)
  const eventSource = EventSourcePolyfill || NativeEventSource

  useEffect(() => {
    const eventSourceInstance = new eventSource(
      `${APIs.notification}/subscribe`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )

    eventSourceInstance.addEventListener('NOTIFICATION_EVENT', (event: any) => {
      const data: NotificationProps | ConnectNotificationProps = JSON.parse(
        event.data
      )

      if ('message' in data) {
        return
      } else if ('notification_id' in data && data.sender.user_id !== userId) {
        let message = ''
        if (data.type === 'N0001') {
          message = `${data.sender.nickname}님이 "${data.detail.name}" 오브제에 태그하셨습니다 💫`
        } else if (data.type === 'N0002') {
          message = `${data.sender.nickname}님이 "${data.detail.name}" 라운지에 초대하셨습니다 💫`
        } else if (data.type === 'N0003') {
          message = `${data.sender.nickname}님이 콕 찌르셨습니다 💫`
        }
        toast(message)
      }
    })

    return () => {
      eventSourceInstance.close()
    }
  }, [])

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <Main>
      <Header />
      <ChildrenDiv style={style}>{children}</ChildrenDiv>
      <Footer />
    </Main>
  )
}
