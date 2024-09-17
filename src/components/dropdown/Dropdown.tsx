import { Container, Tab } from './DropdownStyles'
import { useParams, useNavigate } from 'react-router-dom'
import { URL } from '@/static'

interface MenuProps {
  onClickUpdate: () => void
  onClickDelete: () => void
}

export function LoungeDrop({
  isOwner,
  setIsDeleteModalVisible,
}: {
  isOwner: boolean
  setIsDeleteModalVisible: (state: boolean) => void
}) {
  const loungeId = useParams().lid || 0
  const navigate = useNavigate()

  const handleClickObjetCreate = () => {
    navigate(URL.newObjet)
    localStorage.setItem('loungeId', loungeId.toString())
  }

  const handleClickDeleteButton = () => {
    setIsDeleteModalVisible(true)
  }

  return (
    <Container>
      <Tab onClick={() => navigate(`${URL.lounge}/${loungeId}/invite`)}>
        유저 초대
      </Tab>
      <Tab onClick={handleClickObjetCreate}>오브제 생성</Tab>
      {isOwner && <Tab onClick={handleClickDeleteButton}>라운지 삭제</Tab>}
    </Container>
  )
}

export function ObjetDrop({ onClickUpdate, onClickDelete }: MenuProps) {
  return (
    <Container style={{ marginTop: '10px' }}>
      <Tab onClick={onClickUpdate}>수정하기</Tab>
      <Tab onClick={onClickDelete}>삭제하기</Tab>
    </Container>
  )
}
