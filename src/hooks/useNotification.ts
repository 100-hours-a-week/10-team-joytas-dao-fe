import { useEffect, useState } from 'react'
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

  useEffect(() => {
    fetchData()
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
