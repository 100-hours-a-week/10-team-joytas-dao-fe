import styled from 'styled-components'

export const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
`

export const InnerText = styled.div`
  margin-top: 130px;
  color: rgba(255, 255, 255, 0.5);
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const GoLoungeButton = styled.div`
  position: relative;
  z-index: 9999;
  bottom: -180px;
  left: -45px;
  margin-top: 20px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 12px;
  padding: 8px 15px;
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  animation: float 2s ease-in-out infinite;

  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: -8px;
    left: 35px;
    width: 0px;
    height: 0px;
    border-bottom: 8px solid none;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
