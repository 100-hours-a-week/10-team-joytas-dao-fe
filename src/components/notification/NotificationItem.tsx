import {
  NotiDatetime,
  NotificationItemContainer,
  NotiContents,
  ProfileImg,
} from '../../pages/notification/NotificationStyles'
import { extractTime } from '../../utils/formatDatetime'

interface NotificationItemProps {
  text: string
  type: string
  datetime: string
}

export default function NotificationItem({
  text,
  type,
  datetime,
}: NotificationItemProps) {
  const typeEmoji: { [key: string]: string } = {
    poke: '👉',
    lounge: '📩',
    voice: '🎙️',
    objet: '🪐',
  }
  const handleOnClick = () => {}

  return (
    <NotificationItemContainer onClick={handleOnClick}>
      <ProfileImg>{typeEmoji[type]}</ProfileImg>
      <NotiContents>{text}</NotiContents>
      <NotiDatetime>{extractTime(datetime)}</NotiDatetime>
    </NotificationItemContainer>
  )
}
