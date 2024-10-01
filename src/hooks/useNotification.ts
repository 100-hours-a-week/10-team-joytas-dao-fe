import { APIs } from '@/static'
import axios from 'axios'
import { useQuery } from 'react-query'

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

const fetchNotifications = async (): Promise<NotificationProps[]> => {
  const response = await axios.get(APIs.notification, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })

  if (response.status === 200) {
    return response.data.data
  } else {
    throw new Error('Failed to fetch notifications')
  }
}

const useNotifications = () => {
  const {
    data: notificationList = [],
    error,
    isLoading,
  } = useQuery('notifications', fetchNotifications, {
    retry: 1,
    onError: (error) => {
      console.error('Failed to fetch notifications', error)
    },
  })

  return { notificationList, error, isLoading }
}

export default useNotifications
