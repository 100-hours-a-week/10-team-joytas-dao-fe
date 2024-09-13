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
import { NotificationProps } from '../../hooks/useNotification'
import useUserStore from '../../store/userStore'
import left from '../../assets/images/left.webp'
import { useNavigate } from 'react-router-dom'
import { APIs } from '../../static'
import { useState, useCallback, useRef, useEffect } from 'react'

export default function Notification() {
  const userId = useUserStore((state) => state.userId)
  const navigate = useNavigate()
  const [notificationList, setNotificationList] = useState<NotificationProps[]>(
    []
  )
  const observer = useRef<IntersectionObserver>()
  const [hasNext, setHasNext] = useState(true)
  const [cursor, setCursor] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const targetRef = useRef<HTMLDivElement | null>(null)

  const fetchNotifications = async (cursor?: number) => {
    try {
      const response = await fetch(
        cursor
          ? `${APIs.notification}?cursor=${cursor}`
          : `${APIs.notification}`,
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )

      if (response.ok) {
        const responseData = await response.json()
        if (!cursor) {
          setNotificationList(responseData.data)
        }
        setHasNext(responseData.has_next)
        setCursor(responseData.next_cursor)
        return responseData
      }
    } catch (error) {
      console.error('Failed to fetch notifications', error)
    }
  }

  const loadMoreNotifications = useCallback(async () => {
    setIsLoading(true)
    try {
      const newNotifications = await fetchNotifications(cursor)
      setNotificationList((prev) => [...prev, ...newNotifications.data])
      setHasNext(newNotifications.has_next)
      setCursor(newNotifications.next_cursor)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [cursor, hasNext])

  useEffect(() => {
    fetchNotifications()
  }, [])
  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (target.isIntersecting && hasNext && !isLoading) {
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
  }, [loadMoreNotifications, hasNext, isLoading])

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>
          <img src={left} alt='left' onClick={() => navigate(-1)} />
          알림
        </GlobalTitle>
        <NotificationContainer>
          {notificationList.length === 0 ? (
            <GlobalBlankContainerText>
              알림이 없습니다.
            </GlobalBlankContainerText>
          ) : (
            <RenderNotificationList
              notificationList={notificationList}
              userId={userId}
            />
          )}
          <div ref={targetRef} style={{ height: '10px', width: '10px' }} />
          {isLoading && <p>Loading...</p>}
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
