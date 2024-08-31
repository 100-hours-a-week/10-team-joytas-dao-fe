import { useState } from 'react'
import { InputItem } from '../../../components/objet/InputItem'
import {
  ChooseContainer,
  GenerateButton,
  ImageOverlay,
  ObjetImgPreview,
  TagWrapper,
  UploadButton,
} from '../ObjetStyles'
import { Tag, Mentions } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import type { MentionsProps } from 'antd'
import { OptionProps } from 'antd/es/mentions'
import { APIs, URL } from '../../../static'
import { useParams, useNavigate } from 'react-router-dom'
import LoadingLottie from '../../../components/lotties/LoadingLottie'
import useUserStore from '../../../store/userStore'
import { toast } from 'react-toastify'

interface InputObjetInfoProps {
  selectedType: string
}

interface SharedMembersProps {
  user_id: number
  nickname: string
  profile_url?: string
}

export default function InputObjetInfo({ selectedType }: InputObjetInfoProps) {
  const loungeId = useParams().lid || 0
  const navigate = useNavigate()
  const userId = useUserStore((state) => state.userId)

  const [isLoading, setIsLoading] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const [sharedMembers, setSharedMembers] = useState<SharedMembersProps[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')

  const [nameValid, setNameValid] = useState(false)
  const [descriptionValid, setDescriptionValid] = useState(false)
  const [imageValid, setImageValid] = useState(false)

  const [mentionValue, setMentionValue] = useState<string>('')
  const [memberErrorMessage, setMemberErrorMessage] = useState('')
  const [nameErrorMessage, setNammeErrorMessage] = useState('')
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('')
  const [imageErrorMessage, setImageErrorMessage] = useState('')

  const [userList, setUserList] = useState<SharedMembersProps[]>([])

  const onMentionSearch: MentionsProps['onSearch'] = (_, newPrefix) => {
    if (newPrefix) {
      return userList
        .filter((user) => user.nickname.includes(newPrefix))
        .filter(
          (user) =>
            user.user_id !== userId &&
            !sharedMembers.some((member) => member.user_id === user.user_id)
        )
    }
  }

  const onMentionChange = async (value: string) => {
    setMentionValue(value || '@')
    const searchValue = value.slice(1)
    const response = await fetch(
      `${APIs.loungeList}/${loungeId}/search?nickname=${searchValue}`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      }
    )
    if (response.ok) {
      const responseData = await response.json()
      setUserList(responseData.data)
    } else {
      setUserList([])
    }
  }

  const onMentionSelect = (option: OptionProps) => {
    setSharedMembers((prevMembers) => [
      ...prevMembers,
      { user_id: parseInt(option.key, 10), nickname: option.value as string },
    ])
    setMentionValue('')
  }

  const handleTagClose = (removedTag: string) => {
    setSharedMembers((prevMembers) =>
      prevMembers.filter((member) => member.nickname !== removedTag)
    )
  }

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'objetName':
        setName(value)
        setNameValid(validateName(value))
        break
      case 'objetDescription':
        setDescription(value)
        setDescriptionValid(validateDescription(value))
        break
      default:
        break
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file && validateImage(file)) {
      setImage(file)

      const reader = new FileReader()
      reader.onload = (data) => {
        if (data.target?.result) {
          setImageUrl(data.target.result as string)
        }
      }
      reader.readAsDataURL(file)

      setImageValid(true)
    }
  }

  const handleUploadClick = () => {
    const fileInput = document.getElementById('objetImage')
    if (fileInput) {
      fileInput.click()
    }
  }

  const validateName = (name: string): boolean => {
    if (!name || name.length < 2 || name.length > 10) {
      setNammeErrorMessage(
        '오브제 이름은 최소 2글자, 최대 10글자까지 작성 가능합니다.'
      )
      return false
    }
    setNammeErrorMessage('')
    return true
  }

  const validateDescription = (description: string): boolean => {
    if (description.length > 200) {
      setDescriptionErrorMessage(
        '오브제 설명은 최대 200글자까지 작성 가능합니다.'
      )
      return false
    }
    setDescriptionErrorMessage('')
    return true
  }

  const validateImage = (file: File): boolean => {
    if (file.size > 1 * 1024 * 1024) {
      setImageErrorMessage('이미지 파일은 최대 1MB까지 첨부 가능합니다.')
      return false
    }
    setImageErrorMessage('')
    return true
  }

  const handleGenerateClick = async () => {
    if (sharedMembers.length === 0) {
      setMemberErrorMessage('오브제 멤버를 최소 1명 이상 추가해주세요.')
    } else {
      setMemberErrorMessage('')
    }
    if (name === '') {
      setNammeErrorMessage('오브제 이름을 입력해주세요.')
    }
    if (description === '') {
      setDescriptionErrorMessage('오브제 설명을 입력해주세요.')
    }
    if (!imageUrl) {
      setImageErrorMessage('오브제 이미지를 첨부해주세요.')
    }

    if (
      sharedMembers.length === 0 ||
      !nameValid ||
      !descriptionValid ||
      !imageValid
    ) {
      return
    }

    setIsClick(true)

    const formData = new FormData()
    if (image) {
      formData.append('lounge_id', loungeId.toString())
      formData.append('type', selectedType)
      formData.append('name', name)
      formData.append('description', description)
      formData.append('objet_image', image)
      formData.append(
        'sharers',
        JSON.stringify(sharedMembers.map((member) => member.user_id))
      )
    }

    setIsLoading(true)

    try {
      const response = await fetch(APIs.objet, {
        method: 'POST',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: formData,
      })

      if (!response.ok) {
        toast.error('오브제 생성 실패 😭')
      }

      const responseData = await response.json()
      const objetId = responseData.data.objet_id

      toast.success('오브제 생성 성공 🪐')
      navigate(`${URL.lounge}/${loungeId}/objet/${objetId}`, {
        replace: true,
      })
    } catch (error) {
      console.error('오브제 생성 실패: ', error)
    } finally {
      setIsLoading(false)
      setIsClick(false)
    }
  }

  if (isLoading) {
    return <LoadingLottie />
  }

  return (
    <>
      <InputItem
        label='오브제 멤버'
        className='member'
        input={
          <>
            <Mentions
              placeholder='@을 입력해주세요.'
              onSearch={onMentionSearch}
              onSelect={(option) => onMentionSelect(option as OptionProps)}
              onChange={(value) => onMentionChange(value)}
              value={mentionValue || undefined}
              options={userList
                .filter(
                  (user) =>
                    user.user_id !== userId &&
                    !sharedMembers.some(
                      (member) => member.user_id === user.user_id
                    )
                )
                .map((user) => ({
                  value: user.nickname,
                  key: user.user_id.toString(),
                  label: user.nickname,
                }))}
            />
            <TagWrapper>
              {sharedMembers.map((member) => (
                <Tag
                  key={member.user_id}
                  closeIcon={<CloseCircleOutlined />}
                  color='white'
                  style={{ color: 'black' }}
                  onClose={() => handleTagClose(member.nickname)}
                >
                  {member.nickname}
                </Tag>
              ))}
            </TagWrapper>
          </>
        }
        helperText={memberErrorMessage}
      />
      <InputItem
        label='오브제 이름'
        className='name'
        input={
          <input
            type='text'
            value={name}
            placeholder='오브제 이름을 입력해주세요.'
            onChange={(e) => handleInputChange('objetName', e.target.value)}
          />
        }
        helperText={nameErrorMessage}
      />
      <InputItem
        label='오브제 설명'
        longtext={true}
        input={
          <>
            <textarea
              value={description}
              placeholder='오브제 설명을 입력해주세요.'
              onChange={(e) =>
                handleInputChange('objetDescription', e.target.value)
              }
            />
          </>
        }
        helperText={descriptionErrorMessage}
      />
      <InputItem
        label='오브제 이미지'
        img={true}
        input={
          <>
            <label htmlFor='objetImage'>
              {imageUrl ? (
                <>
                  <ObjetImgPreview src={imageUrl} alt='profile' />
                  <ImageOverlay>
                    <span>변경</span>
                  </ImageOverlay>
                </>
              ) : (
                <UploadButton type='button' onClick={handleUploadClick}>
                  이미지 업로드
                </UploadButton>
              )}
            </label>
            <input
              type='file'
              accept='.jpeg, .jpg, .png, .webp'
              id='objetImage'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </>
        }
        helperText={imageErrorMessage}
      />

      <ChooseContainer>
        <GenerateButton disabled={isClick} onClick={handleGenerateClick}>
          생성하기
        </GenerateButton>
      </ChooseContainer>
    </>
  )
}
