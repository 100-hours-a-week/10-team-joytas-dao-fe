import { useEffect, useState } from 'react'
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill'
import { APIs } from '../static'

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

export interface ConnectNotificationProps {
  message: string
}

const useNotifications = () => {
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

      const data: NotificationProps | ConnectNotificationProps = JSON.parse(
        event.data
      )

      if ('message' in data) {
        return
      } else if ('notification_id' in data) {
        setNotificationList((prev) => [...prev, data])
      }
    })

    fetchData()

    return () => {
      eventSourceInstance.close()
    }
  }, [])

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
      console.error('Failed to fetch notifications', error)
    }
  }

  return { notificationList }
}

export default useNotifications
