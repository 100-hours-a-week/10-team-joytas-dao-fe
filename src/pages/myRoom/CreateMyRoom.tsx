import Layout from '../../components/Layout.js'
import {
  BtnContainer,
  CreateBtn,
  MyRoomList,
  MyRoomName,
  MyRoomPreviewWrapper,
  MyRoomThumbnail,
  StyledGloablContainer32,
} from './MyRoomStyles.tsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { useEffect, useState } from 'react'
import { modelList, MyRoomModel } from '../../global/myRoomModels.js'
import { GlobalSubTitle, GlobalTitle } from '../../global/globalStyles.tsx'

export default function CreateMyRoom() {
  const [selectedModelId, setSelectedModelId] = useState(1)
  const [selectedModel, setSelectedModel] = useState<MyRoomModel>()

  useEffect(() => {
    setSelectedModel(modelList.find((model) => model.id === selectedModelId))
  }, [selectedModelId])

  return (
    <Layout>
      <>
        <StyledGloablContainer32>
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
        </StyledGloablContainer32>
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

        <BtnContainer>
          <CreateBtn>생성하기</CreateBtn>
        </BtnContainer>
      </>
    </Layout>
  )
}
