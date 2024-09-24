import Layout from '@components/Layout.js'
import {
  BtnContainer,
  CreateBtn,
  MyRoomList,
  MyRoomPreviewWrapper,
  MyRoomThumbnail,
  StyledGloablContainer16,
} from './MyRoomStyles.tsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { modelList, MyRoomModel } from '@global/myRoomModels.js'
import { GlobalSubTitle, GlobalTitle } from '@global/globalStyles.tsx'
import { APIs, URL } from '@/static'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useUserStore from '@store/userStore.ts'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'

const checkIfGenerated = async (userId: number) => {
  const response = await axios.get(`${APIs.myRoom}?user_id=${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response
}

const createMyRoom = async (selectedModelType: string) => {
  const response = await axios.post(
    APIs.myRoom,
    { type: selectedModelType },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
  return response
}

export default function CreateMyRoom() {
  const [selectedModelType, setSelectedModelType] = useState('R0001')
  const [selectedModel, setSelectedModel] = useState<MyRoomModel>()
  const userId = useUserStore((state) => state.userId)
  const navigate = useNavigate()

  // 마이룸 생성 여부를 체크하는 쿼리
  useQuery(['checkMyRoom', userId], () => checkIfGenerated(userId), {
    onSuccess: (response) => {
      if (response.status === 200) {
        toast.info(
          <>
            이미 마이룸을 생성하셨습니다. <br /> 마이룸으로 이동합니다. 🪐
          </>
        )
        navigate(URL.myRoom)
      }
    },
    onError: (error) => {
      console.error('마이룸 정보 조회 오류: ', error)
    },
  })

  const mutation = useMutation(() => createMyRoom(selectedModelType), {
    onSuccess: () => {
      toast.success('마이룸 생성 성공 🪐')
      navigate(URL.myRoom)
    },
    onError: () => {
      toast.error('마이룸 생성 실패 😭')
    },
  })

  useEffect(() => {
    setSelectedModel(
      modelList.find((model) => model.type === selectedModelType)
    )
  }, [selectedModelType])

  const handleCreate = () => {
    mutation.mutate()
  }

  return (
    <Layout>
      <>
        <StyledGloablContainer16>
          <GlobalTitle>마이룸 디자인을 선택해주세요!</GlobalTitle>
          <GlobalSubTitle>
            마이룸 별명은 생성 이후 수정할 수 있습니다.
          </GlobalSubTitle>
          <MyRoomPreviewWrapper>
            <Canvas
              frameloop='demand'
              camera={{ position: selectedModel?.camera }}
            >
              <OrbitControls
                target={selectedModel?.targetOrbit}
                enableZoom={false}
              />
              <ambientLight intensity={1} />
              <group rotation-y={-Math.PI / 2}>{selectedModel?.model}</group>
            </Canvas>
          </MyRoomPreviewWrapper>
        </StyledGloablContainer16>
        <MyRoomList>
          {modelList.map((model) => (
            <MyRoomThumbnail
              key={model.type}
              src={model.thumbnail}
              alt='thumbnail'
              onClick={() => setSelectedModelType(model.type)}
            />
          ))}
        </MyRoomList>

        <BtnContainer>
          <CreateBtn onClick={handleCreate}>확인</CreateBtn>
        </BtnContainer>
      </>
    </Layout>
  )
}
