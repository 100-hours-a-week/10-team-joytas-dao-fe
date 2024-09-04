import styled from 'styled-components'

export const ObjetList = styled.div`
  width: 100%;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
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
    flex-direction: column;
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
    width: 200px;
    height: 200px;
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
