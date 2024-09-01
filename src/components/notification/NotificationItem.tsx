import { NotificationProps } from '../../hooks/useNotification'
import {
  NotiDatetime,
  NotificationItemContainer,
  NotiContents,
  TypeImg,
} from '../../pages/notification/NotificationStyles'
import { extractTime } from '../../utils/formatDatetime'
import TagImg from '../../assets/images/tag.webp'
import PokeImg from '../../assets/images/poke.webp'
import InviteImg from '../../assets/images/loungeInvite.webp'
import { ModalBackdrop } from '../modal/ModalStyles'
import { useState } from 'react'
import { ConfirmNotificationModal } from '../modal/Modal'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static'
import { toast } from 'react-toastify'

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
    N0003: PokeImg, // 콕 찌르기
    voice: TagImg,
  }
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate()

  let text = ''
  switch (type) {
    case 'N0001':
      text = `${sender.nickname}님이 ${detail.name} 라운지에 초대했습니다. \n 클릭 시 라운지 초대를 수락합니다.`
      break
    case 'N0002':
      text = `${sender.nickname}님이 ${detail.name} 오브제에 태그했습니다.`
      break
    case 'N0003':
      text = `${sender.nickname}님이 콕 찔렀습니다.`
  }

  const handleClickNotiRead = async () => {
    try {
      const readRes = await fetch(
        `${APIs.notification}/${notification_id}/read`,
        {
          method: 'PATCH',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }
      )

      if (!readRes.ok) {
        toast.error('알림을 읽지 못했어요 🥹 이따가 다시 시도해주세요!')
      }
    } catch (error) {
      console.error('알림 클릭 실패', error)
    }
  }

  const handleClickLoungeNoti = async () => {
    setIsModalVisible(true)

    setTimeout(async () => {
      await handleClickNotiRead()
      setIsModalVisible(false)
    }, 3000)
  }

  const handleClickObjetNoti = async () => {
    await handleClickNotiRead()
  }

  const handleClickPokeNoti = async () => {
    await handleClickNotiRead()
    console.log(sender.user_id)
    navigate(`${URL.userDetail}/${sender.user_id}`)
  }

  return (
    <>
      {isModalVisible && <ModalBackdrop />}

      <NotificationItemContainer
        onClick={() => {
          type === 'N0001'
            ? handleClickLoungeNoti()
            : type === 'N0002'
              ? handleClickObjetNoti()
              : handleClickPokeNoti()
        }}
        $isRead={is_read}
      >
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
