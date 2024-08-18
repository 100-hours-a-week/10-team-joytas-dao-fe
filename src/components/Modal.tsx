import {
  BtnContainer,
  DeleteModalButton,
  DeleteModalContainer,
  DeleteModalContents,
  DeleteModalTitle,
  LoungeListModalContainer,
  LoungeListModalContents,
  LoungeListModalTitle,
  MenuModalContainer,
  ModalButton,
  ModalButtonContainer,
} from './ModalStyle'

interface MenuProps {
  onClickUpdate: () => void
  onClickDelete: () => void
}

interface DeleteProps {
  onClose: () => void
}

interface LoungeListProps {
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
        <ModalButtonContainer>
          <ModalButton className='cancel' onClick={onClose}>
            취소
          </ModalButton>
          <ModalButton className='confirm' onClick={onClose}>
            확인
          </ModalButton>
        </ModalButtonContainer>
      </DeleteModalContents>
    </DeleteModalContainer>
  )
}

export function LoungeListModal({ onClose }: LoungeListProps) {
  return (
    <LoungeListModalContainer>
      <LoungeListModalTitle>라운지 목록</LoungeListModalTitle>
      <LoungeListModalContents>
        <div>라운지1</div>
        <div>라운지2</div>
        <div>라운지3</div>
        <div>라운지4</div>
        <div>라운지5</div>
      </LoungeListModalContents>
      <ModalButtonContainer>
        <ModalButton className='cancel' onClick={onClose}>
          취소
        </ModalButton>
        <ModalButton className='confirm' onClick={onClose}>
          선택
        </ModalButton>
      </ModalButtonContainer>
    </LoungeListModalContainer>
  )
}
