import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  z-index: 995;
  width: 90px;
  height: fit-content;
  background-color: white;
  right: 5px;
  top: 25px;
  padding: 5px 5px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const Tab = styled.button`
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
  color: black;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.05s ease;

  &:hover {
    background-color: #aeaeae;
  }
`

export const Deem = styled.div`
  width: 390px;
  height: 844px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
`
