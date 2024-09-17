import { useCallback, useEffect, useState } from 'react'
import { InputItem } from './InputItem'
import {
  ChooseContainer,
  GenerateButton,
  ImageOverlay,
  ObjetImgPreview,
  TagWrapper,
  UploadButton,
} from '@pages/objet/ObjetStyles'
import { Tag, Mentions } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import type { MentionsProps } from 'antd'
import { OptionProps } from 'antd/es/mentions'
import { APIs, URL } from '@/static'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingLottie from '../lotties/LoadingLottie'
import useUserStore from '@store/userStore'
import { toast } from 'react-toastify'
import { ObjetInfoFormProps, SharedMembersProps } from '@global/objetProps'
import {
  validateDescription,
  validateImage,
  validateName,
} from '@utils/validation'

export default function ObjetInfoForm({
  path,
  type,
  objetInfo,
}: ObjetInfoFormProps) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const text = path === 'create' ? '오브제 생성' : '오브제 수정'

  const userId = useUserStore((state) => state.userId)
  const { oid } = useParams()

  const objetId = path === 'create' ? 0 : oid
  const [loungeId, setLoungeId] = useState(
    path === 'create' ? localStorage.getItem('loungeId') : 0
  )

  const [userList, setUserList] = useState<SharedMembersProps[]>([])

  const [sharedMembers, setSharedMembers] = useState<SharedMembersProps[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')

  const [nameValid, setNameValid] = useState(false)
  const [descriptionValid, setDescriptionValid] = useState(false)
  const [imageValid, setImageValid] = useState(false)

  const [mentionValue, setMentionValue] = useState<string>('')
  const [isFirstRender, setIsFirstRender] = useState(true)

  const [memberErrorMessage, setMemberErrorMessage] = useState('')
  const [nameErrorMessage, setNameErrorMessage] = useState('')
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('')
  const [imageErrorMessage, setImageErrorMessage] = useState('')

  const [isMentionChanged, setIsMentionChanged] = useState(false)
  const [isNameChanged, setIsNameChanged] = useState(false)
  const [isDescriptionChanged, setIsDescriptionChanged] = useState(false)
  const [isImageChanged, setIsImageChanged] = useState(false)

  useEffect(() => {
    if (objetInfo) {
      const { name, description, objet_image, sharers, lounge_id } = objetInfo
      setName(name)
      setDescription(description)
      setImageUrl(objet_image)
      setSharedMembers(sharers.filter((user) => user.user_id !== userId))
      setLoungeId(lounge_id)

      setNameValid(true)
      setDescriptionValid(true)
      setImageValid(true)
    }
  }, [objetInfo])

  const fetchUsers = useCallback(
    async (searchValue: string) => {
      try {
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

          if (isFirstRender && responseData.data.length <= 1) {
            toast.error(
              <div>
                라운지에 속한 유저가 없습니다 😭 <br /> 유저 초대 후 다시
                시도해주세요.
              </div>
            )
            navigate(`${URL.lounge}/${loungeId}`)
          }
          setIsFirstRender(false)
        }
      } catch (error) {
        setUserList([])
      }
    },
    [loungeId, navigate, isFirstRender]
  )

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
    setIsMentionChanged(true)
    fetchUsers(value.slice(1))
  }

  const onMentionSelect = (option: OptionProps) => {
    setSharedMembers((prevMembers) => [
      ...prevMembers,
      { user_id: Number(option.key), nickname: option.value as string },
    ])
    setMentionValue('')
    setMemberErrorMessage('')
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

        const nameValidation = validateName(value)
        setNameValid(nameValidation.isValid)
        setNameErrorMessage(nameValidation.errorMessage)

        setIsNameChanged(true)
        break
      case 'objetDescription':
        setDescription(value)

        const descriptionValidation = validateDescription(value)
        setDescriptionValid(descriptionValidation.isValid)
        setDescriptionErrorMessage(descriptionValidation.errorMessage)

        setIsDescriptionChanged(true)
        break
      default:
        break
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file && validateImage(file).isValid) {
      setImage(file)

      const reader = new FileReader()
      reader.onload = (data) => {
        if (data.target?.result) {
          setImageUrl(data.target.result as string)
        }
      }
      reader.readAsDataURL(file)

      setImageValid(true)
      setImageErrorMessage('')
      setIsImageChanged(true)
    } else if (file) {
      setImageErrorMessage(validateImage(file).errorMessage)
    }
  }

  const handleUploadClick = () => {
    const fileInput = document.getElementById('objetImage')
    if (fileInput) {
      fileInput.click()
    }
  }

  const handleSubmitForm = async () => {
    if (sharedMembers.length === 0) {
      setMemberErrorMessage('오브제 멤버를 최소 1명 이상 추가해주세요.')
    } else {
      setMemberErrorMessage('')
    }
    if (name === '') {
      setNameErrorMessage('오브제 이름을 입력해주세요.')
    }
    if (description === '') {
      setDescriptionErrorMessage('오브제 설명을 입력해주세요.')
    }
    if (!imageUrl) {
      setImageErrorMessage('오브제 이미지를 첨부해주세요.')
    }

    if (
      !isMentionChanged &&
      !isNameChanged &&
      !isDescriptionChanged &&
      !isImageChanged
    ) {
      if (path === 'update') {
        toast.info('변경된 내용이 없습니다.')
      }
      return
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
    setIsLoading(true)

    try {
      let receivedImageUrl

      if (image && isImageChanged) {
        const formData = new FormData()
        formData.append('file', image)

        const imageResponse = await fetch(APIs.uploadImage, {
          method: 'POST',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
          body: formData,
        })

        if (!imageResponse.ok) {
          toast.error('오브제 이미지 업로드 실패 😭')
          return
        }

        const imageResponseData = await imageResponse.json()
        receivedImageUrl = imageResponseData.data.image_url
      }

      let response
      if (path === 'create') {
        response = await PostObjet(
          Number(loungeId),
          type,
          name,
          description,
          receivedImageUrl || imageUrl,
          sharedMembers
        )
      } else if (path === 'update') {
        response = await PatchObjet(
          Number(objetId),
          name,
          description,
          receivedImageUrl || imageUrl,
          sharedMembers
        )
      }

      if (response && !response.ok) {
        toast.error(`${text} 실패 😭`)
        return
      }

      if (path === 'create') {
        const objetResponseData = response ? await response.json() : null
        const newObjetId = objetResponseData.data.objet_id

        toast.success(`${text} 성공 🪐`)
        navigate(`${URL.objet}/${newObjetId}`, {
          replace: true,
        })
      } else {
        toast.success(`${text} 성공 🪐`)
        navigate(`${URL.objet}/${objetId}`, {
          replace: true,
        })
      }
    } catch (error) {
      console.error(`${text} 실패: `, error)
    } finally {
      setIsLoading(false)
      setIsClick(false)
      localStorage.removeItem('loungeId')
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
            minLength={2}
            maxLength={10}
          />
        }
        helperText={nameErrorMessage}
      />
      <InputItem
        label='오브제 설명'
        longtext={'true'}
        input={
          <>
            <textarea
              value={description}
              placeholder='오브제 설명을 입력해주세요.'
              onChange={(e) =>
                handleInputChange('objetDescription', e.target.value)
              }
              minLength={2}
              maxLength={200}
            />
          </>
        }
        helperText={descriptionErrorMessage}
      />
      <InputItem
        label='오브제 이미지'
        img={'true'}
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

      <ChooseContainer style={{ position: 'absolute', bottom: '0' }}>
        {path === 'create' ? (
          <GenerateButton disabled={isClick} onClick={handleSubmitForm}>
            생성하기
          </GenerateButton>
        ) : (
          <>
            <GenerateButton onClick={() => navigate(`${URL.objet}/${objetId}`)}>
              취소하기
            </GenerateButton>
            <GenerateButton disabled={isClick} onClick={handleSubmitForm}>
              수정하기
            </GenerateButton>
          </>
        )}
      </ChooseContainer>
    </>
  )
}

async function PostObjet(
  loungeId: number,
  type: string,
  name: string,
  description: string,
  imageUrl: string,
  sharedMembers: SharedMembersProps[]
) {
  const response = await fetch(APIs.objet, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lounge_id: Number(loungeId),
      type: type,
      name,
      description,
      objet_image: imageUrl,
      sharers: sharedMembers.map((member) => member.user_id),
    }),
  })

  return response
}

async function PatchObjet(
  objetId: number,
  name: string,
  description: string,
  imageUrl: string,
  sharedMembers: SharedMembersProps[]
) {
  const response = await fetch(`${APIs.objet}/${objetId}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      objet_image: imageUrl,
      sharers: sharedMembers.map((member) => member.user_id),
    }),
  })

  return response
}
