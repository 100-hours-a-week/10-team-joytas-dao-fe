import axios from 'axios'
import { SharedMembersProps } from '@global/objetProps'
import { APIs } from '@/static'

export const checkNicknameDuplicate = async (
  nickname: string
): Promise<boolean> => {
  try {
    const response = await axios.get(`${APIs.nickname}=${nickname}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    })
    return response.status !== 200
  } catch (error) {
    console.error('Error: ', error)
    return true
  }
}

export const validateName = (
  name: string
): { isValid: boolean; errorMessage: string } => {
  if (!name || name.length < 2 || name.length > 10) {
    return {
      isValid: false,
      errorMessage: '오브제 이름은 최소 2글자, 최대 10글자 작성 가능합니다.',
    }
  }
  return { isValid: true, errorMessage: '' }
}

export const validateDescription = (
  description: string
): { isValid: boolean; errorMessage: string } => {
  if (description.length < 2) {
    return {
      isValid: false,
      errorMessage: '오브제 설명은 최소 2글자 이상 작성해주세요.',
    }
  } else if (description.length > 200) {
    return {
      isValid: false,
      errorMessage: '오브제 설명은 최대 200글자까지 작성 가능합니다.',
    }
  }
  return { isValid: true, errorMessage: '' }
}

export const validateImage = (
  file: File
): { isValid: boolean; errorMessage: string } => {
  if (file.size > 25 * 1024 * 1024) {
    return {
      isValid: false,
      errorMessage: '이미지 파일은 최대 25MB까지 첨부 가능합니다.',
    }
  }
  return { isValid: true, errorMessage: '' }
}

export const validateEmail = (
  email: string
): { isValid: boolean; errorMessage: string } => {
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegExp.test(email)) {
    return {
      isValid: false,
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    }
  }
  return { isValid: true, errorMessage: '' }
}

export const validateForm = (
  sharedMembers: SharedMembersProps[],
  name: string,
  description: string,
  imageUrl: string
): {
  isValid: boolean
  errors: {
    memberError?: string
    nameError?: string
    descriptionError?: string
    imageError?: string
  }
} => {
  const errors: {
    memberError?: string
    nameError?: string
    descriptionError?: string
    imageError?: string
  } = {}

  if (sharedMembers.length === 0) {
    errors.memberError = '오브제 멤버를 최소 1명 이상 추가해주세요.'
  }

  if (name === '') {
    errors.nameError = '오브제 이름을 입력해주세요.'
  }

  if (description === '') {
    errors.descriptionError = '오브제 설명을 입력해주세요.'
  }

  if (!imageUrl) {
    errors.imageError = '오브제 이미지를 첨부해주세요.'
  }

  const isValid =
    !errors.memberError &&
    !errors.nameError &&
    !errors.descriptionError &&
    !errors.imageError

  return { isValid, errors }
}
