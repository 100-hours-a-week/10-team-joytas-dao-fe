import { Container, Tab, Deem } from './LoungeDropStyle'
import { useParams, useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static'
import { useState } from 'react'
import { DeleteLoungeModal } from '../Modal'

export default function LoungeDrop({ isOwner }: { isOwner: boolean }) {
  const loungeId = useParams().lid
  const navigate = useNavigate()
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const handleClickDeleteButton = () => {
    setIsDeleteModalVisible(true)
  }

  const handleClickDelete = async () => {
    setIsClick(true)
    try {
      const response = await fetch(`${APIs.loungeList}/${loungeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.status === 200) {
        alert('라운지가 삭제됐습니다!')
        navigate(URL.lounge)
      } else if (response.status == 400) {
        alert('라운지를 삭제하는데 실패했습니다.')
      }
    } catch (error) {
      console.error('Failed to delete lounge', error)
    } finally {
      setIsClick(false)
    }
  }
  return (
    <Container>
      <Tab>유저 초대</Tab>
      <Tab onClick={() => navigate(`${URL.lounge}/${loungeId}/objet/new`)}>
        오브제 생성
      </Tab>
      {isOwner && <Tab onClick={handleClickDeleteButton}>라운지 삭제</Tab>}
      {isDeleteModalVisible && (
        <>
          <Deem style={{ top: '-147px', right: '-38px' }} />
          <DeleteLoungeModal
            onClose={() => setIsDeleteModalVisible(false)}
            handleDelete={handleClickDelete}
            isClick={isClick}
          />
        </>
      )}
    </Container>
  )
}
