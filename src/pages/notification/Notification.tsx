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

interface NotificationProps {
  notiId: number
  type: string
  text: string
  datetime: string
}

export default function Notification() {
  const notificationList = [
    {
      notiId: 1,
      type: 'poke',
      text: '[콕 찌르기] 홍프님이 콕 찔렀습니다.',
      datetime: '2024-08-20 12:00:00',
    },
    {
      notiId: 2,
      type: 'lounge',
      text: '[라운지 초대장] 이프님이 홍은 신이에요 라운지 초대장을 보냈습니다.',
      datetime: '2024-08-20 12:12:00',
    },
    {
      notiId: 3,
      type: 'voice',
      text: '[음성 채팅 초대] 준투님이 우동은 최고야 오브제 음성 채팅 초대장을 보냈습니다.',
      datetime: '2024-08-20 15:13:00',
    },
    {
      notiId: 4,
      type: 'objet',
      text: '[오브제 남김] 지직지키님이 마이룸에 오브제를 남겼습니다.',
      datetime: '2024-08-20 16:14:00',
    },
    {
      notiId: 5,
      type: 'poke',
      text: '[콕 찌르기] 홍프님이 콕 찔렀습니다.',
      datetime: '2024-08-21 12:00:00',
    },
    {
      notiId: 6,
      type: 'lounge',
      text: '[라운지 초대장] 이프님이 홍은 신이에요 라운지 초대장을 보냈습니다.',
      datetime: '2024-08-21 12:12:00',
    },
    {
      notiId: 7,
      type: 'voice',
      text: '[음성 채팅 초대] 준투님이 우동은 최고야 오브제 음성 채팅 초대장을 보냈습니다.',
      datetime: '2024-08-21 12:13:00',
    },
    {
      notiId: 8,
      type: 'objet',
      text: '[오브제 남김] 지직지키님이 마이룸에 오브제를 남겼습니다.',
      datetime: '2024-08-21 12:14:00',
    },
    {
      notiId: 9,
      type: 'poke',
      text: '[콕 찌르기] 홍프님이 콕 찔렀습니다.',
      datetime: '2024-08-22 12:00:00',
    },
    {
      notiId: 10,
      type: 'lounge',
      text: '[라운지 초대장] 이프님이 홍은 신이에요 라운지 초대장을 보냈습니다.',
      datetime: '2024-08-23 12:12:00',
    },
    {
      notiId: 11,
      type: 'voice',
      text: '[음성 채팅 초대] 준투님이 우동은 최고야 오브제 음성 채팅 초대장을 보냈습니다.',
      datetime: '2024-08-23 12:13:00',
    },
    {
      notiId: 12,
      type: 'objet',
      text: '[오브제 남김] 지직지키님이 마이룸에 오브제를 남겼습니다.',
      datetime: '2024-08-24 16:14:00',
    },
  ]

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
    <NotificationGroup key={date}>
      <NotificationDate>{date}</NotificationDate>
      {groupedNotifications[date].map((noti: NotificationProps) => (
        <NotificationItem
          key={noti.notiId}
          type={noti.type}
          text={noti.text}
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
