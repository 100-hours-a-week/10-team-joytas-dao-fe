import {
  DeleteModalButton,
  DeleteModalContainer,
  DeleteModalContents,
  DeleteModalTitle,
  MenuModalContainer,
} from './ObjetComponentStyle'

interface MenuProps {
  onClickUpdate: () => void
  onClickDelete: () => void
}

interface DeleteProps {
  onClose: () => void
}

export function MenuModal({ onClickUpdate, onClickDelete }: MenuProps) {
  return (
    <MenuModalContainer>
      <div onClick={onClickUpdate}>수정하기</div>
      <div onClick={onClickDelete}>삭제하기</div>
    </MenuModalContainer>
  )
}

export function DeleteModal({ onClose }: DeleteProps) {
  return (
    <DeleteModalContainer>
      <DeleteModalTitle>정말 삭제하시겠습니까?</DeleteModalTitle>
      <DeleteModalContents>
        <span>
          한 번 삭제한 오브제는 <br /> 복구할 수 없습니다.
        </span>
        <div className='btnContainer'>
          <DeleteModalButton className='cancel' onClick={onClose}>
            취소
          </DeleteModalButton>
          <DeleteModalButton className='confirm' onClick={onClose}>
            확인
          </DeleteModalButton>
        </div>
      </DeleteModalContents>
    </DeleteModalContainer>
  )
}
