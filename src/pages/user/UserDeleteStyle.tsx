import styled from 'styled-components'

export const Title = styled.div`
  color: white;
  width: fit-content;
  font-size: 34px;
  font-weight: bold;
  margin: 0 auto;
  padding-top: 80px;
`
export const SelectReason = styled.div`
  width: 280px;
  margin: 40px auto 0;
`

export const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 310px;
  margin: 30px auto 0;
  color: white;
`
export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 310px;
  margin: 20px auto 0;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #e0e0e0;
  cursor: pointer;
`

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: #ffcc00; /* 체크박스 색상 설정 (지원하는 브라우저에서만 적용) */
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
  width: 310px;
  margin: 10px auto 0;
  height: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #333;
  color: #e0e0e0;
  font-size: 14px;
  box-sizing: border-box;
`

export const Button = styled.button`
  margin-top: 60px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 250px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    color: black;
  }
`
