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

export default function CreateMyRoom() {
  const [selectedModelType, setSelectedModelType] = useState('R0001')
  const [selectedModel, setSelectedModel] = useState<MyRoomModel>()
  const userId = useUserStore((state) => state.userId)
  const navigate = useNavigate()

  useEffect(() => {
    checkIfGenerated()
  }, [])

  useEffect(() => {
    setSelectedModel(
      modelList.find((model) => model.type === selectedModelType)
    )
  }, [selectedModelType])

  const checkIfGenerated = async () => {
    try {
      const response = await fetch(`${APIs.myRoom}?user_id=${userId}`, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        toast.info(
          <>
            이미 마이룸을 생성하셨습니다. <br /> 마이룸으로 이동합니다. 🪐
          </>
        )
        navigate(URL.myRoom)
      }
    } catch (error) {
      console.error('마이룸 정보 조회 오류: ', error)
    }
  }

  const handleCreate = async () => {
    try {
      const response = await fetch(APIs.myRoom, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ type: selectedModelType }),
      })

      if (response.ok) {
        toast.success('마이룸 생성 성공 🪐')
        navigate(URL.myRoom)
      } else {
        toast.error('마이룸 생성 실패 😭')
      }
    } catch (error) {
      console.error('마이룸 생성 오류: ', error)
    }
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
