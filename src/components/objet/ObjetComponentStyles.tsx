import styled from 'styled-components'

export const ObjetList = styled.div`
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ObjetContainer = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
  }
`
export const ObjetImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  background-color: grey;
`

export const ObjetContent = styled.div`
  display: flex;
  flex: 1;
  font-size: 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`

export const ObjetTitle = styled.div`
  margin-top: 8px;
  font-size: 15px;
  font-weight: bold;
`

export const ObjetDescription = styled.div`
  font-size: 10px;
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
