import styled from 'styled-components'
import { GlobalWidth } from '../../global/globalStyles'

export const Title = styled.div`
  color: white;
  width: fit-content;
  font-size: 30px;
  font-weight: bold;
  margin: 0 auto;
  padding-top: 80px;
`
export const SelectReason = styled.div`
  width: 280px;
  margin: 40px auto 0;
`

export const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  width: 310px;
  margin: 30px auto 0;
  color: white;
`
export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 310px;
  margin: 20px auto 0;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #e0e0e0;
  cursor: pointer;
`

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: #ffcc00;
`

export const DetailReason = styled.div`
  width: 100%;
  margin-top: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextArea = styled.textarea`
  width: 100%;
  margin: 10px auto 0;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  resize: none;
  border: 1px solid #ccc;
  background-color: #333;
  color: #e0e0e0;
  font-size: 14px;
  box-sizing: border-box;
`

export const Button = styled.button`
  margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 200px;
  height: 40px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const Deem = styled.div`
  top: -675px;
  left: -16px;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  z-index: 998;
  position: relative;
  ${GlobalWidth}
`
