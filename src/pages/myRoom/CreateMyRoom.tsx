import Layout from '../../components/Layout.js'
import {
  CreateBtn,
  MyRoomList,
  MyRoomName,
  MyRoomPreviewWrapper,
  MyRoomThumbnail,
  Title,
} from './MyRoomStyles.tsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { useEffect, useState } from 'react'
import { modelList, MyRoomModel } from '../../global/myRoomModels.js'
import { GloablContainer32 } from '../../global/globalStyles.tsx'

export default function CreateMyRoom() {
  const [selectedModelId, setSelectedModelId] = useState(1)
  const [selectedModel, setSelectedModel] = useState<MyRoomModel>()

  useEffect(() => {
    setSelectedModel(modelList.find((model) => model.id === selectedModelId))
  }, [selectedModelId])

  return (
    <Layout>
      <>
        <GloablContainer32>
          <Title>내가 선택한 마이룸은...</Title>
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
        </GloablContainer32>
        <MyRoomList>
          {modelList.map((model) => (
            <MyRoomThumbnail
              key={model.id}
              src={model.thumbnail}
              alt='thumbnail'
              onClick={() => setSelectedModelId(model.id)}
            />
          ))}
        </MyRoomList>

        <CreateBtn>생성하기</CreateBtn>
      </>
    </Layout>
  )
}
