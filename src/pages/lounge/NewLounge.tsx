import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector3, Group, Box3 } from 'three'
import useUserStore from '@store/userStore'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '@components/Layout'
import left from '@assets/images/left.webp'
import right from '@assets/images/right.webp'
import { toast } from 'react-toastify'
import {
  Input,
  Container,
  InputTitle,
  InputContainer,
  LoungeModel,
  ChooseContainer,
  MoveIcon,
  ChooseButton,
  InputInnerContainer,
  ModelIndexText,
  RedTextLong,
} from './LoungeStyles'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '@global/globalStyles'
import { RedText } from '../objet/ObjetStyles'
import { APIs, URL } from '@/static'
import { LoungeModelList } from '@components/models/LazyModelList'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const fetchLoungeList = async () => {
  const response = await axios.get(APIs.loungeList, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response.data.data
}

const createLounge = async (loungeName: string, type: string) => {
  const response = await axios.post(
    APIs.loungeList,
    { name: loungeName, type },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response.data.data
}

export default function NewLounge() {
  const [loungeName, setLoungeName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const [isClick, setIsClick] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const modelTypes = ['L0001', 'L0002', 'L0003']
  const nickname = useUserStore((state) => state.nickname)
  const queryClient = useQueryClient()

  useQuery('lounges', fetchLoungeList, {
    onSuccess: (data) => {
      if (data.length >= 4) {
        toast.error('라운지 갯수 제한(최대 4개) 🥹')
        navigate(URL.lounge)
      }
    },
    onError: (error) => {
      console.error('Failed to fetch lounge list', error)
    },
  })

  const mutation = useMutation(
    () => createLounge(loungeName, modelTypes[currentModelIndex]),
    {
      onSuccess: (data) => {
        toast.success('라운지 생성 성공 🪐')
        queryClient.invalidateQueries('lounges')
        navigate(`${URL.lounge}/${data.lounge_id}`, { replace: true })
      },
      onError: () => {
        toast.error('라운지 생성 실패 😭')
      },
      onSettled: () => {
        setIsClick(false)
      },
    }
  )

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleLeftClick = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1))
  }

  const handleRightClick = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1))
  }

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    setLoungeName(name)
    checkLoungeNameValidation(name)
  }

  const handleClickSelect = () => {
    setIsClick(true)
    const validation = checkLoungeNameValidation(loungeName)
    if (validation) {
      mutation.mutate() // 라운지 생성 요청
    }
  }

  const checkLoungeNameValidation = (name: string): boolean => {
    const specialCharPattern = /[^\w\s\u3131-\u318E\uAC00-\uD7A3]/
    const consecutiveSpacesPattern = /\s{2,}/

    const hasSpecialChar = specialCharPattern.test(name)
    const hasConsecutiveSpaces = consecutiveSpacesPattern.test(name)

    if (!name) {
      setErrorMessage('라운지 이름을 2~10자로 입력하세요.')
      return false
    } else if (hasSpecialChar) {
      setErrorMessage('특수문자는 사용할 수 없습니다.')
      return false
    } else if (hasConsecutiveSpaces) {
      setErrorMessage('연속된 공백은 사용할 수 없습니다.')
      return false
    } else {
      setErrorMessage('')
      return true
    }
  }

  const CurrentModel = () => <Model index={currentModelIndex} />

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>어떤 라운지인가요?</GlobalTitle>
        <GlobalSubTitle>라운지 정보를 입력해주세요!</GlobalSubTitle>
        <Container>
          <InputContainer>
            <InputTitle>
              라운지 이름
              <RedText>*</RedText>
            </InputTitle>
            <InputInnerContainer>
              <Input
                ref={inputRef}
                minLength={2}
                maxLength={10}
                placeholder='라운지 이름을 입력하세요.'
                value={loungeName}
                onChange={(event) => handleChangeName(event)}
              />
              <RedTextLong>{errorMessage}</RedTextLong>
            </InputInnerContainer>
          </InputContainer>
          <InputContainer>
            <InputTitle>라운지 관리자</InputTitle>
            <Input readOnly value={nickname} />
          </InputContainer>
          <LoungeModel>
            <Canvas
              style={{ width: '100%', height: '100%' }}
              camera={{ position: [0, 0, 4], fov: 50 }}
            >
              <ambientLight intensity={1} />
              <CurrentModel />
            </Canvas>
          </LoungeModel>
          <ModelIndexText>{currentModelIndex + 1} / 3</ModelIndexText>
          <ChooseContainer>
            <MoveIcon src={left} onClick={handleLeftClick} />
            <ChooseButton
              disabled={isClick}
              onClick={() => handleClickSelect()}
            >
              확인
            </ChooseButton>
            <MoveIcon src={right} onClick={handleRightClick} />
          </ChooseContainer>
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

function CenterModel({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (ref.current) {
      const box = new Box3().setFromObject(ref.current)
      const center = box.getCenter(new Vector3())
      ref.current.position.sub(center)
    }
  }, [scene])

  return <group ref={ref}>{children}</group>
}

function Model({ index }: { index: number }) {
  const ref = useRef<Group>(null)
  const modelScale = new Vector3(1, 1, 1)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group position={new Vector3(0, 0, 0)}>
      <CenterModel>
        <group ref={ref}>
          {index === 0 ? (
            <LoungeModelList.L0001 scale={modelScale} />
          ) : index === 1 ? (
            <LoungeModelList.L0002 scale={modelScale} />
          ) : (
            <LoungeModelList.L0003 scale={modelScale} />
          )}
        </group>
      </CenterModel>
    </group>
  )
}
