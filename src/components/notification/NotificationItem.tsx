import { NotificationProps } from '@hooks/useNotification'
import {
  NotiDatetime,
  NotificationItemContainer,
  NotiContents,
  TypeImg,
} from '@pages/notification/NotificationStyles'
import { extractTime } from '@utils/formatDatetime'
import TagImg from '@images/tag.webp'
import PokeImg from '@images/poke.webp'
import InviteImg from '@images/loungeInvite.webp'
import { ModalBackdrop } from '../modal/ModalStyles'
import { useState } from 'react'
import { ConfirmNotificationModal } from '../modal/Modal'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

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
  const queryClient = useQueryClient()

  const markNotificationAsRead = async (notification_id: number) => {
    const response = await axios.patch(
      `${APIs.notification}/${notification_id}/read`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      }
    )

    if (!response.status || response.status !== 200) {
      throw new Error('알림 읽기 실패')
    }

    return response
  }

  const notificationReadMutation = useMutation(markNotificationAsRead, {
    onSuccess: () => {
      queryClient.invalidateQueries('notifications')
    },
    onError: () => {
      toast.error('알림을 읽지 못했어요 🥹 이따가 다시 시도해주세요!')
    },
  })

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

  const handleAcceptLoungeNoti = async () => {
    await notificationReadMutation.mutateAsync(notification_id)
    setIsModalVisible(false)

    const response = await axios.patch(
      `${APIs.loungeList}/${detail.domain_id}/invite/accept`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        withCredentials: true,
      }
    )

    if (!response.status || response.status !== 200) {
      toast.error('라운지 초대 수락에 실패했습니다. 다시 시도해주세요.')
    }

    navigate(`${URL.lounge}/${detail.domain_id}`)
  }

  const handleDeclineLoungeNoti = async () => {
    await notificationReadMutation.mutateAsync(notification_id)
    setIsModalVisible(false)
  }

  const handleClickObjetNoti = async () => {
    await notificationReadMutation.mutateAsync(notification_id)
    navigate(`${URL.objet}/${detail.domain_id}`)
  }

  const handleClickPokeNoti = async () => {
    await notificationReadMutation.mutateAsync(notification_id)
    navigate(`${URL.userDetail}/${sender.user_id}`)
  }

  return (
    <>
      {isModalVisible && <ModalBackdrop />}

      <NotificationItemContainer
        onClick={() => {
          type === 'N0001'
            ? setIsModalVisible(true)
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
          onClose={handleDeclineLoungeNoti}
          onConfirm={handleAcceptLoungeNoti}
        ></ConfirmNotificationModal>
      )}
    </>
  )
}
