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
import useNotifications from '../../hooks/useNotification'
import { NotificationProps } from '../../hooks/useNotification'
import useUserStore from '../../store/userStore'

export default function Notification() {
  const { notificationList } = useNotifications()
  const userId = useUserStore((state) => state.userId)

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>알림</GlobalTitle>
        <NotificationContainer>
          {notificationList.length === 0 ? (
            <GlobalBlankContainerText>
              알림이 없습니다.
            </GlobalBlankContainerText>
          ) : (
            renderNotificationList(notificationList, userId)
          )}
        </NotificationContainer>
      </GloablContainer16>
    </Layout>
  )
}

function renderNotificationList(
  notificationList: NotificationProps[],
  userId: number
) {
  const groupedNotifications = groupByDate(notificationList)
  const dates = Object.keys(groupedNotifications)

  return dates.reverse().map((date, index) => {
    const dateSort = groupedNotifications[date].filter(
      (noti) => noti.sender.user_id !== userId
    )

    return (
      dateSort.length > 0 && (
        <NotificationGroup key={`${date}_${index}`}>
          <NotificationDate>{date}</NotificationDate>
          {dateSort
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
