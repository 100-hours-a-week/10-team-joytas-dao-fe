import Layout from '../../components/Layout.js'
import {
  BtnContainer,
  CreateBtn,
  MyRoomList,
  MyRoomName,
  MyRoomPreviewWrapper,
  MyRoomThumbnail,
  StyledGloablContainer16,
} from './MyRoomStyles.tsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { modelList, MyRoomModel } from '../../global/myRoomModels.js'
import { GlobalSubTitle, GlobalTitle } from '../../global/globalStyles.tsx'
import { APIs, URL } from '../../static.ts'
import { useNavigate } from 'react-router-dom'

export default function CreateMyRoom() {
  const [selectedModelType, setSelectedModelType] = useState('R0001')
  const [selectedModel, setSelectedModel] = useState<MyRoomModel>()
  const navigate = useNavigate()

  useEffect(() => {
    setSelectedModel(
      modelList.find((model) => model.type === selectedModelType)
    )
  }, [selectedModelType])

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

      if (response.status === 201) {
        alert('마이룸이 생성되었습니다.')
        navigate(URL.myRoom)
      } else {
        alert('마이룸 생성에 실패했습니다. 다시 시도해주세요.')
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
            <Canvas camera={{ position: selectedModel?.camera }}>
              <OrbitControls
                target={selectedModel?.targetOrbit}
                enableZoom={false}
              />
              <ambientLight intensity={1} />
              <group rotation-y={-Math.PI / 2}>{selectedModel?.model}</group>
            </Canvas>
            <MyRoomName>{selectedModel?.name}</MyRoomName>
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
