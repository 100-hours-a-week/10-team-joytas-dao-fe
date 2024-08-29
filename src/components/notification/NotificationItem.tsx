import { NotificationProps } from '../../hooks/useNotification'
import {
  NotiDatetime,
  NotificationItemContainer,
  NotiContents,
  TypeImg,
} from '../../pages/notification/NotificationStyles'
import { extractTime } from '../../utils/formatDatetime'
import TagImg from '../../assets/images/tag.png'
import InviteImg from '../../assets/images/loungeInvite.png'
import { ModalBackdrop } from '../modal/ModalStyles'
import { useState } from 'react'
import { ConfirmNotificationModal } from '../modal/Modal'
import { APIs } from '../../static'

export default function NotificationItem({
  notification_id,
  type,
  is_read,
  sender,
  detail,
  datetime,
}: NotificationProps) {
  const typeEmoji: {
    [key: string]: string
  } = {
    N0001: InviteImg, // 라운지 초대
    N0002: TagImg, // 오브제 맴버 태그
    poke: TagImg,
    voice: TagImg,
  }
  const [isModalVisible, setIsModalVisible] = useState(false)

  let text = ''
  switch (type) {
    case 'N0001':
      text = `${sender.nickname}님이 ${detail.name} 라운지에 초대했습니다. \n 클릭 시 라운지 초대를 수락합니다.`
      break
    case 'N0002':
      text = `${sender.nickname}님이 ${detail.name} 오브제에 태그했습니다.`
      break
  }

  const handleClickNoti = async () => {
    setIsModalVisible(true)

    setTimeout(async () => {
      try {
        const readRes = await fetch(`${APIs.notification}/${notification_id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })

        if (readRes.ok) {
          console.log('알림 클릭 성공')
        }
      } catch (error) {
        console.error('알림 클릭 실패', error)
      }
      setIsModalVisible(false)
    }, 3000)
  }

  return (
    <>
      {isModalVisible && <ModalBackdrop />}

      <NotificationItemContainer onClick={handleClickNoti} $isRead={is_read}>
        <TypeImg src={typeEmoji[type]} />
        <NotiContents>{text}</NotiContents>
        <NotiDatetime>{extractTime(datetime)}</NotiDatetime>
      </NotificationItemContainer>

      {isModalVisible && (
        <ConfirmNotificationModal
          onClose={() => setIsModalVisible(false)}
          isLoading={true}
          handleConfirm={() => console.log('confirm')}
        ></ConfirmNotificationModal>
      )}
    </>
  )
}
