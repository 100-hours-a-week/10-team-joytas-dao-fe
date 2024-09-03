import { useEffect, useRef, useState } from 'react'
import Layout from '../../components/Layout.tsx'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles.tsx'
import {
  ChooseContainer,
  Container,
  GenerateButton,
  ImageOverlay,
  MiniObjetModel,
  ObjetImgPreview,
  TagWrapper,
  UpperContainer,
} from './ObjetStyles.tsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { InputItem } from '../../components/objet/InputItem.tsx'
import { Group } from 'three'
import { Mentions, Tag } from 'antd'
import type { MentionsProps } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import { OptionProps } from 'antd/es/mentions/index'
import { objetList } from '../../global/objetModels.tsx'
import { APIs, URL } from '../../static.ts'
import { useNavigate, useParams } from 'react-router-dom'
import useUserStore from '../../store/userStore.ts'
import { toast } from 'react-toastify'

interface ObjetProps {
  type: string
}

interface SharedMembersProps {
  user_id: number
  nickname: string
}

export default function UpdateObjet() {
  const loungeId = useParams().lid
  const objetId = useParams().oid
  const navigate = useNavigate()
  const userId = useUserStore((state) => state.userId)
  const [isClick, setIsClick] = useState(false)

  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState('')

  const [nameValid, setNameValid] = useState(true)
  const [descriptionValid, setDescriptionValid] = useState(true)
  const [imageValid, setImageValid] = useState(true)

  const [sharedMembers, setSharedMembers] = useState<SharedMembersProps[]>([])

  const [mentionValue, setMentionValue] = useState<string>('')
  const [memberErrorMessage, setMemberErrorMessage] = useState('')
  const [nameErrorMessage, setNammeErrorMessage] = useState('')
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('')
  const [imageErrorMessage, setImageErrorMessage] = useState('')

  const [isMentionChanged, setIsMentionChanged] = useState(false)
  const [isNameChanged, setIsNameChanged] = useState(false)
  const [isDescriptionChanged, setIsDescriptionChanged] = useState(false)
  const [isImageChanged, setIsImageChanged] = useState(false)
  const [userList, setUserList] = useState<SharedMembersProps[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const data = await response.json()

        setName(data.data.name)
        setDescription(data.data.description)
        setImageUrl(data.data.objet_image)
        setSharedMembers(
          data.data.sharers.filter(
            (user: SharedMembersProps) => user.user_id !== userId
          )
        )
        setType(data.data.type)
      }
    } catch (error) {
      console.error('오브제 정보 가져오기 실패: ', error)
    }
  }

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
    setSharedMembers([
      ...sharedMembers,
      { user_id: parseInt(option.key, 10), nickname: option.value as string },
    ])
    setMentionValue('')
  }

  const handleTagClose = (removedTag: string) => {
    setSharedMembers(
      sharedMembers.filter((member) => member.nickname !== removedTag)
    )
  }

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'objetName':
        setName(value)
        setNameValid(validateName(value))
        setIsNameChanged(true)
        break
      case 'objetDescription':
        setDescription(value)
        setDescriptionValid(validateDescription(value))
        setIsDescriptionChanged(true)
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

      setIsImageChanged(true)
      setImageValid(true)
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

  const handleUpdateObjet = async () => {
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
      !isMentionChanged &&
      !isNameChanged &&
      !isDescriptionChanged &&
      !isImageChanged
    ) {
      toast.info('변경된 내용이 없습니다.')
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

    try {
      if (isImageChanged && image) {
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
        const imageUrl = imageResponseData.data.image_url
        setImageUrl(imageUrl)
      }

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

      if (!response.ok) {
        toast.error('오브제 수정 실패 😭')
        return
      }

      toast.success('오브제 수정 성공 🪐')
      navigate(`${URL.lounge}/${loungeId}/objets/${objetId}`, {
        replace: true,
      })
    } catch (error) {
      console.error('오브제 수정 실패: ', error)
    } finally {
      setIsClick(false)
    }
  }

  return (
    <Layout>
      <GloablContainer16>
        <UpperContainer>
          <div>
            <GlobalTitle>어떤 오브제인가요?</GlobalTitle>
            <GlobalSubTitle>
              공유하고 싶은 추억을 오브제로 만들어보세요!
            </GlobalSubTitle>
          </div>
          <MiniObjetModel>
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
              <OrbitControls enableZoom={false} enableRotate={false} />
              <ambientLight intensity={1} />
              <RenderObjet type={type} />
            </Canvas>
          </MiniObjetModel>
        </UpperContainer>

        <Container>
          <InputItem
            label='오브제 멤버'
            className='member'
            input={
              <>
                <Mentions
                  variant='borderless'
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
                  {sharedMembers.map(({ nickname, user_id }) => {
                    return (
                      <Tag
                        key={user_id}
                        closeIcon={<CloseCircleOutlined />}
                        color='white'
                        style={{ color: 'black' }}
                        onClose={() => handleTagClose(nickname)}
                      >
                        {nickname}
                      </Tag>
                    )
                  })}
                </TagWrapper>
              </>
            }
            helperText={memberErrorMessage}
          />
          <InputItem
            label='오브제 이름'
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
            longtext={'true'}
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
            className='updateImg'
            img={'true'}
            input={
              <>
                <label htmlFor='objetImage'>
                  <ObjetImgPreview src={imageUrl} alt='profile' />
                  <ImageOverlay>
                    <span>변경</span>
                  </ImageOverlay>
                </label>
                <input
                  type='file'
                  accept='.jpeg, .jpg, .png, .webp'
                  id='objetImage'
                  onChange={handleImageChange}
                />
              </>
            }
            helperText={imageErrorMessage}
          />

          <ChooseContainer>
            <GenerateButton
              onClick={() =>
                navigate(`${URL.lounge}/${loungeId}/objets/${objetId}`)
              }
            >
              취소하기
            </GenerateButton>
            <GenerateButton disabled={isClick} onClick={handleUpdateObjet}>
              수정하기
            </GenerateButton>
          </ChooseContainer>
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

function RenderObjet({ type }: ObjetProps) {
  const ref = useRef<Group>(null)
  const model = objetList.find((objet) => objet.type === type)?.model

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} rotation-y={-Math.PI / 2}>
      {model}
    </group>
  )
}
