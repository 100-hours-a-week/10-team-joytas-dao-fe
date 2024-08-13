import Layout from '../../components/Layout'
import {
  Main,
  Title,
  SubTitle,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  TextArea,
  DetailReason,
  Button,
} from './UserDeleteStyle'
import { useState } from 'react'

export default function UserDelete() {
  const [reasons, setReasons] = useState({
    noInterest: false,
    lowUsage: false,
    inconvenience: false,
    noSpecificReason: false,
    other: false,
  })

  const [detailedReason, setDetailedReason] = useState('')

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setReasons((prevReasons) => ({
      ...prevReasons,
      [name]: checked,
    }))
  }

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetailedReason(event.target.value)
  }

  const handleSubmit = () => {
    // 제출 로직 추가
    console.log('탈퇴 이유:', reasons)
    console.log('상세 이유:', detailedReason)
  }

  return (
    <Layout>
      <Main>
        <Title>회원탈퇴</Title>
        <SubTitle>탈퇴 이유</SubTitle>
        <CheckboxGroup>
          <CheckboxLabel>
            <CheckboxInput
              name='noInterest'
              checked={reasons.noInterest}
              onChange={(event) => handleCheckboxChange(event)}
            />
            서비스에 대한 흥미를 잃었어요
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name='lowUsage'
              checked={reasons.lowUsage}
              onChange={(event) => handleCheckboxChange(event)}
            />
            사용 빈도가 낮아요
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name='inconvenience'
              checked={reasons.inconvenience}
              onChange={(event) => handleCheckboxChange(event)}
            />
            이용이 불편하고 장애가 많아요
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name='noSpecificReason'
              checked={reasons.noSpecificReason}
              onChange={(event) => handleCheckboxChange(event)}
            />
            특별한 이유가 없어요
          </CheckboxLabel>
          <CheckboxLabel>
            <CheckboxInput
              name='other'
              checked={reasons.other}
              onChange={(event) => handleCheckboxChange(event)}
            />
            기타
          </CheckboxLabel>
        </CheckboxGroup>
        <DetailReason>
          <SubTitle>탈퇴 상세 이유 (선택)</SubTitle>
          <TextArea
            placeholder='상세 이유를 입력해주세요'
            value={detailedReason}
            onChange={(event) => handleTextAreaChange(event)}
          />
          <Button onClick={handleSubmit}>제출</Button>
        </DetailReason>
      </Main>
    </Layout>
  )
}
