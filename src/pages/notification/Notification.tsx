import Layout from '@components/Layout'
import NotificationItem from '@components/notification/NotificationItem'
import {
  GloablContainer16,
  GlobalBlankContainerText,
  GlobalTitle,
} from '@global/globalStyles'
import {
  NotificationContainer,
  NotificationDate,
  NotificationGroup,
  StyledHr,
} from './NotificationStyles'
import { NotificationProps } from '@hooks/useNotification'
import useUserStore from '@store/userStore'
import left from '@assets/images/left.webp'
import { useNavigate } from 'react-router-dom'
import { APIs } from '@/static'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState, useEffect, useRef, useCallback } from 'react'

const fetchNotifications = async (cursor: number | null = null) => {
  const response = await axios.get(
    cursor ? `${APIs.notification}?cursor=${cursor}` : APIs.notification,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response.data
}

export default function Notification() {
  const userId = useUserStore((state) => state.userId)
  const navigate = useNavigate()

  const [notifications, setNotifications] = useState<NotificationProps[]>([])
  const [cursor, setCursor] = useState<number | null>(null)
  const [hasNext, setHasNext] = useState(true)
  const [isFetching, setIsFetching] = useState(false)

  const targetRef = useRef<HTMLDivElement | null>(null)
  const observer = useRef<IntersectionObserver>()

  const { isLoading, refetch } = useQuery(
    ['notifications', cursor],
    () => fetchNotifications(cursor),
    {
      retry: 1,
      enabled: false,
      onSuccess: (data) => {
        setNotifications((prev) => [...prev, ...data.data])
        setHasNext(data.has_next)
        setCursor(data.next_cursor)
      },
    }
  )

  const loadMoreNotifications = useCallback(async () => {
    if (hasNext && !isFetching) {
      setIsFetching(true)
      await refetch()
      setIsFetching(false)
    }
  }, [hasNext, isFetching, refetch])

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (target.isIntersecting && hasNext && !isFetching) {
        loadMoreNotifications()
      }
    }

    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(handleObserver)
    if (targetRef.current) {
      observer.current.observe(targetRef.current)
    }

    return () => {
      if (observer.current) observer.current.disconnect()
    }
  }, [loadMoreNotifications, hasNext, isFetching])

  useEffect(() => {
    refetch()
  }, [])

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>
          <img src={left} alt='left' onClick={() => navigate(-1)} />
          알림
        </GlobalTitle>
        <NotificationContainer>
          {isLoading && notifications.length === 0 ? (
            <GlobalBlankContainerText>
              알림이 없습니다.
            </GlobalBlankContainerText>
          ) : (
            <RenderNotificationList
              notificationList={notifications}
              userId={userId}
            />
          )}
          <div ref={targetRef} style={{ height: '10px', width: '10px' }} />
          {isFetching && <p>Loading more...</p>}
        </NotificationContainer>
      </GloablContainer16>
    </Layout>
  )
}

function RenderNotificationList({
  notificationList,
  userId,
}: {
  notificationList: NotificationProps[]
  userId: number
}) {
  const groupedNotifications = groupByDate(notificationList)

  const dates = Object.keys(groupedNotifications)

  return dates.map((date, index) => {
    const dateSort = groupedNotifications[date].filter(
      (noti) => noti.sender.user_id !== userId
    )
    return (
      dateSort.length > 0 && (
        <NotificationGroup key={`${date}_${index}`}>
          <NotificationDate>{date}</NotificationDate>
          {dateSort.slice().map((noti: NotificationProps) => (
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
      )
    )
  })
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
        acc[date] = []
      }

      acc[date].push(noti)
      return acc
    },
    {}
  )
}
