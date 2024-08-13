import Layout from '../../components/Layout.js'
import {
  Icon,
  IconWithBorder,
  MyRoomName,
  MyRoomPreviewWrapper,
  MyRoomTitleInput,
  ObjetWrapper,
  Title,
  TitleWrapper,
} from './MyRoomStyles.tsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import editIcon from '../../assets/images/edit.png'
import closeIcon from '../../assets/images/close.png'
import checkIcon from '../../assets/images/check.png'

import { useEffect, useRef, useState } from 'react'
import { modelList, MyRoomModel } from '../../global/myRoomModels.js'
import { GloablContainer32 } from '../../global/globalStyles.tsx'
import { ObjetModel1 } from '../../assets/models/ObjetModel1.tsx'
import { Group } from 'three'

export default function MyRoom() {
  const [myRoomName, setMyRoomName] = useState('')
  const [myRoomModel, setMyRoomModel] = useState<MyRoomModel>(modelList[0])
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const myRoomData = {
      name: '일이삼사오육칠팔구십일이삼사오육칠팔구십',
      modelId: 1,
    }
    setMyRoomName(myRoomData.name)
    setMyRoomModel(modelList[myRoomData.modelId])
  }, [])

  const handleChangeIsEditing = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = () => {
    setIsEditing(false)
  }

  const handleNavigate = () => {}

  return (
    <Layout>
      <GloablContainer32>
        <TitleWrapper>
          {isEditing ? (
            <>
              <MyRoomTitleInput
                value={myRoomName}
                onChange={(e) => setMyRoomName(e.target.value)}
                placeholder='마이룸 이름을 입력해주세요'
              />
              <IconWithBorder
                src={checkIcon}
                alt='check'
                onClick={handleSubmit}
              />
              <IconWithBorder
                src={closeIcon}
                alt='close'
                onClick={handleChangeIsEditing}
              />
            </>
          ) : (
            <>
              <Title>
                {myRoomName.length > 10
                  ? `${myRoomName.substring(0, 10)}...`
                  : myRoomName}
              </Title>
              <Icon src={editIcon} alt='edit' onClick={handleChangeIsEditing} />
            </>
          )}
        </TitleWrapper>
        <MyRoomPreviewWrapper>
          <Canvas camera={{ position: myRoomModel.camera }}>
            <OrbitControls
              target={myRoomModel.targetOrbit}
              enableZoom={false}
            />
            <ambientLight intensity={1} />
            <group rotation-y={-Math.PI / 2}>{myRoomModel.model}</group>
          </Canvas>
        </MyRoomPreviewWrapper>

        <ObjetWrapper onClick={handleNavigate}>
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <RenderObjet />
          </Canvas>
          <MyRoomName>내 오브제 조회</MyRoomName>
        </ObjetWrapper>
      </GloablContainer32>
    </Layout>
  )
}

function RenderObjet() {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} rotation-y={-Math.PI / 2}>
      <ObjetModel1 scale={[3, 3, 3]} />
    </group>
  )
}
