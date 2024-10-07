import {
  MenuContainer,
  Profile,
  Nickname,
  TopContainer,
  ProfileContainer,
  CategoryList,
  Category,
} from './MenuStyles'
import { URL, APIs } from '@/static'
import { useNavigate } from 'react-router-dom'
import useUserStore from '@store/userStore'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import axios from 'axios'
import { useState } from 'react'
import { InquiryModal } from './modal/Modal'
import { validateEmail } from '@/utils/validation'

const logoutRequest = async () => {
  const response = await axios.post(
    APIs.logout,
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )

  if (response.status !== 200) {
    throw new Error('로그아웃 실패')
  }

  return response
}

const inquiryRequest = async (email: string, contents: string) => {
  const response = await axios.post(
    `${APIs.userInfo}/inquiries`,
    {
      email,
      contents,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )

  if (response.status !== 200) {
    throw new Error('문의하기 실패')
  }

  return response
}

export default function Menu() {
  const navigate = useNavigate()
  const name = useUserStore((state) => state.nickname)
  const profileImage = useUserStore((state) => state.profileImage)
  const logout = useUserStore((state) => state.logout)
  const [isLogoutClick, setIsLogoutClick] = useState(false)

  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [contents, setContents] = useState('')
  const [isInquiryClick, setIsInquiryClick] = useState(false)

  const logoutMutation = useMutation(logoutRequest, {
    onSuccess: () => {
      localStorage.removeItem('access_token')
      logout()
      toast.success('로그아웃 성공 😀')
      navigate(URL.login)
    },
    onError: () => {
      toast.error('로그아웃 실패 😭')
    },
    onSettled: () => {
      setIsLogoutClick(false)
    },
  })

  const inquiryMutation = useMutation(
    ({ email, contents }: { email: string; contents: string }) =>
      inquiryRequest(email, contents),
    {
      onSuccess: () => {
        toast.success('문의하기 성공 😀')
        handleCloseInquiry()
      },
      onError: () => {
        toast.error('문의하기 실패 😭')
      },
    }
  )

  const handleClickLogout = () => {
    setIsLogoutClick(true)
    logoutMutation.mutate()
  }

  const handleInquiry = () => {
    if (!validateEmail(email).isValid) {
      toast.error('이메일 형식이 올바르지 않습니다.')
      return
    } else if (!contents) {
      toast.error('문의 내용을 입력해주세요.')
      return
    }

    setIsInquiryClick(true)
    inquiryMutation.mutate({ email, contents })
  }

  const handleCloseInquiry = () => {
    setEmail('')
    setContents('')
    setIsInquiryOpen(false)
    setIsInquiryClick(false)
  }

  return (
    <>
      <MenuContainer>
        <TopContainer>
          <ProfileContainer>
            <Profile src={profileImage} />
            <Nickname>{name}</Nickname>
          </ProfileContainer>
        </TopContainer>
        <CategoryList>
          <Category onClick={() => navigate(URL.modifyProfile)}>
            프로필 설정
          </Category>
          <Category onClick={() => setIsInquiryOpen(true)}>
            1:1 문의하기
          </Category>

          <Category
            disabled={isLogoutClick || logoutMutation.isLoading}
            onClick={handleClickLogout}
          >
            {logoutMutation.isLoading ? '로그아웃 중...' : '로그아웃'}
          </Category>
        </CategoryList>
      </MenuContainer>

      {isInquiryOpen && (
        <InquiryModal
          isClick={isInquiryClick}
          email={email}
          contents={contents}
          setEmail={setEmail}
          setContents={setContents}
          onClose={handleCloseInquiry}
          onConfirm={handleInquiry}
        />
      )}
    </>
  )
}
