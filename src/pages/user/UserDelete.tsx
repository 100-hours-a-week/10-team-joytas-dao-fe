import Layout from '../../components/Layout'
import { GloablContainer32 } from '../../global/globalStyles'
import {
  Title,
  SubTitle,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxInput,
  TextArea,
  DetailReason,
  Button,
  Deem,
} from './UserDeleteStyles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RedTextLong } from '../lounge/LoungeStyles'
import { RedText } from '../objet/ObjetStyles'
import { APIs, URL } from '../../static'
import useUserStore from '../../store/userStore'
import { DeleteUserModal } from '../../components/modal/Modal'

export default function UserDelete() {
  const navigate = useNavigate()
  const [isReasonNull, setIsReasonNull] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [reasons, setReasons] = useState({
    W0001: false,
    W0002: false,
    W0003: false,
    W0004: false,
    W0005: false,
  })
  const [detail, setDetail] = useState('')
  const logout = useUserStore((state) => state.logout)

  useEffect(() => {
    setIsReasonNull(
      Object.values(reasons).filter((checked) => checked).length === 0
    )
  }, [reasons])

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    setReasons((prevReasons) => ({
      ...prevReasons,
      [value]: checked,
    }))
  }

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetail(event.target.value)
  }

  const handleClickDeleteButton = () => {
    console.log('isReasonNull? : ' + isReasonNull)
    if (!isReasonNull) {
      setIsDeleteModalVisible(true)
    }
  }

  const handleSubmit = async () => {
    setIsClick(true)
    try {
      const trueReasons = (
        Object.keys(reasons) as Array<keyof typeof reasons>
      ).filter((key) => reasons[key])

      const response = await fetch(APIs.withdraw, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
          detail,
          reason: trueReasons,
        }),
      })

      if (response.status === 200) {
        alert('회원탈퇴 성공')
        localStorage.removeItem('access_token')
        logout()
        navigate(URL.home)
      }
    } catch (error) {
      console.error('Failed to withdraw user', error)
      alert('회원탈퇴 실패')
    } finally {
      setIsClick(false)
    }
  }

  return (
    <Layout>
      <>
        <GloablContainer32>
          <Title>회원탈퇴</Title>
          <SubTitle style={{ display: 'flex', alignItems: 'flex-start' }}>
            탈퇴 이유<RedText>*</RedText>
          </SubTitle>
          <CheckboxGroup>
            <CheckboxLabel>
              <CheckboxInput
                name='noInterest'
                value={'W0001'}
                checked={reasons.W0001}
                onChange={(event) => handleCheckboxChange(event)}
              />
              서비스에 대한 흥미를 잃었어요
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput
                name='lowUsage'
                checked={reasons.W0002}
                value={'W0002'}
                onChange={(event) => handleCheckboxChange(event)}
              />
              사용 빈도가 낮아요
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput
                name='inconvenience'
                checked={reasons.W0003}
                value={'W0003'}
                onChange={(event) => handleCheckboxChange(event)}
              />
              이용이 불편하고 장애가 많아요
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput
                name='noSpecificReason'
                checked={reasons.W0004}
                value={'W0004'}
                onChange={(event) => handleCheckboxChange(event)}
              />
              특별한 이유가 없어요
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput
                name='other'
                checked={reasons.W0005}
                value={'W0004'}
                onChange={(event) => handleCheckboxChange(event)}
              />
              기타
            </CheckboxLabel>
          </CheckboxGroup>
          <RedTextLong style={{ marginTop: '15px' }}>
            {isReasonNull ? '탈퇴 이유를 1개 이상 체크해주세요.' : null}
          </RedTextLong>
          <DetailReason>
            <SubTitle style={{ marginTop: '0px' }}>
              탈퇴 상세 이유 (선택)
            </SubTitle>
            <TextArea
              maxLength={200}
              placeholder='상세 이유를 입력해주세요'
              value={detail}
              onChange={(event) => handleTextAreaChange(event)}
            />
            <Button onClick={handleClickDeleteButton}>탈퇴하기</Button>
          </DetailReason>
        </GloablContainer32>
        {isDeleteModalVisible && !isReasonNull && (
          <>
            <Deem />
            <DeleteUserModal
              onClose={() => setIsDeleteModalVisible(false)}
              handleDelete={handleSubmit}
              isClick={isClick}
            />
          </>
        )}
      </>
    </Layout>
  )
}
