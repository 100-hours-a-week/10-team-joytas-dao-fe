import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import NotificationItem from '../../components/notification/NotificationItem'
import {
  GloablContainer16,
  GlobalBlankContainerText,
  GlobalTitle,
} from '../../global/globalStyles'
import {
  NotificationContainer,
  NotificationDate,
  NotificationGroup,
  StyledHr,
} from './NotificationStyles'
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { APIs } from '../../static'

export interface NotificationProps {
  notification_id: number
  type: string
  is_read: boolean
  sender: {
    user_id: number
    nickname: string
  }
  detail: {
    domain_id: number
    name: string
  }
  datetime: string
}

export default function Notification() {
  const [notificationList, setNotificationList] = useState<NotificationProps[]>(
    []
  )

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

    eventSourceInstance.onmessage = (event) => {
      const noti = JSON.parse(event.data)
      setNotificationList((prev) => [noti, ...prev])
      console.log('New notification on message:', noti)
    }

    eventSourceInstance.addEventListener('NOTIFICATION_EVENT', (event: any) => {
      console.log('New notification:', event)

      const data: NotificationProps = JSON.parse(event.data)

      if (data) {
        setNotificationList((prev) => [...prev, data])
      }
    })

    fetchData()
  }, [])

  useEffect(() => {
    // notification list 새로고침
  }, [notificationList])

  const fetchData = async () => {
    try {
      const response = await fetch(`${APIs.notification}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)

        setNotificationList(responseData.data)
      }
    } catch (error) {
      console.error('알림 불러오기 실패', error)
    }
  }

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>누군가 찾는 것 같아요..!</GlobalTitle>
        <NotificationContainer>
          {notificationList.length === 0 ? (
            <GlobalBlankContainerText>
              알림이 없습니다.
            </GlobalBlankContainerText>
          ) : (
            renderNotificationList(notificationList)
          )}
        </NotificationContainer>
      </GloablContainer16>
    </Layout>
  )
}

function renderNotificationList(notificationList: NotificationProps[]) {
  const groupedNotifications = groupByDate(notificationList)
  const dates = Object.keys(groupedNotifications)

  return dates.map((date, index) => (
    <NotificationGroup key={`${date}_${index}`}>
      <NotificationDate>{date}</NotificationDate>
      {groupedNotifications[date]
        .slice()
        .reverse()
        .map((noti: NotificationProps) => (
          <NotificationItem
            key={noti.notification_id}
            notification_id={noti.notification_id}
            type={noti.type}
            sender={noti.sender}
            detail={noti.detail}
            is_read={noti.is_read}
            datetime={noti.datetime}
          />
        ))}
      {index !== dates.length - 1 && <StyledHr />}
    </NotificationGroup>
  ))
}

function groupByDate(
  notificationList: NotificationProps[]
): Record<string, NotificationProps[]> {
  return notificationList.reduce(
    (acc: Record<string, NotificationProps[]>, noti: NotificationProps) => {
      const date = new Date(noti.datetime).toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
      })

      if (!acc[date]) {
        acc[date] = [] // 초기화
      }

      acc[date].push(noti)
      return acc
    },
    {}
  )
}
