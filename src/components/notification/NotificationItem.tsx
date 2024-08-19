import {
  NotiContents,
  NotiDatetime,
  NotificationContent,
  NotificationItemContainer,
  NotiTitle,
  ProfileImg,
} from '../../pages/notification/NotificationStyles'
import { extractTime } from '../../utils/formatDatetime'

interface NotificationItemProps {
  title: string
  contents: string
  datetime: string
}

export default function NotificationItem({
  title,
  contents,
  datetime,
}: NotificationItemProps) {
  const handleOnClick = () => {}

  return (
    <NotificationItemContainer onClick={handleOnClick}>
      <ProfileImg src='' alt='profile' />
      <NotificationContent>
        <NotiTitle>{title}</NotiTitle>
        <NotiContents>{contents}</NotiContents>
      </NotificationContent>
      <NotiDatetime>{extractTime(datetime)}</NotiDatetime>
    </NotificationItemContainer>
  )
}
