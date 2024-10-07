import styled from 'styled-components'

export const ObjetPreviewContainer = styled.div`
  width: 100%;
  padding: 0 32px 60px;
  position: relative;

  @media (min-width: 600px) {
    padding: 0 32px;
  }
`

export const IconContainer = styled.div`
  width: 80px;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  &.right {
    right: 20px;
    background: linear-gradient(90deg, transparent, black);
    justify-content: end;
  }

  &.left {
    left: 20px;
    background: linear-gradient(270deg, transparent, black);
    justify-content: start;
  }
`

export const MoveIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  opacity: 0.3;

  &:hover {
    opacity: 0.5;
  }
`

export const ObjetList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const ObjetContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 600px) {
    width: 170px;
    flex-direction: column;
    height: 290px;
  }
`

export const ObjetImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  background-color: black;
  align-self: center;

  @media (min-width: 600px) {
    width: 150px;
    height: 150px;
  }
`

export const ObjetContent = styled.div`
  display: flex;
  flex: 1;
  font-size: 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  @media (min-width: 600px) {
    font-size: 15px;
  }
`

export const ObjetTitle = styled.div`
  margin-top: 8px;
  font-size: 13px;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 15px;
  }
`

export const ObjetDescription = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 9px;
  @media (min-width: 600px) {
    font-size: 12px;
  }
`

export const CommunityBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #d9d9d9;
  border: 0;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
  }
`
