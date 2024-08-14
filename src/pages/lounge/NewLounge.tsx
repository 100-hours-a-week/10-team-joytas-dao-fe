import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector3, Group, Box3 } from 'three'
import { LoungeModel1 } from '../../assets/models/LoungeModel1'
import { LoungeModel2 } from '../../assets/models/LoungeModel2'
import { LoungeModel3 } from '../../assets/models/LoungeModel3'
import { useState, useRef, useEffect } from 'react'
import Layout from '../../components/Layout'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import {
  Input,
  Container,
  InputTitle,
  InputContainer,
  LoungeModel,
  ChooseContainer,
  MoveIcon,
  ChooseButton,
  ModelIndexText, // 스타일 추가
} from './LoungeStyles'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles'

export default function NewLounge() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const models = [Model1, Model2, Model3]

  const handleLeftClick = () => {
    setCurrentModelIndex((prevIndex) =>
      prevIndex === 0 ? models.length - 1 : prevIndex - 1
    )
  }

  const handleRightClick = () => {
    setCurrentModelIndex((prevIndex) =>
      prevIndex === models.length - 1 ? 0 : prevIndex + 1
    )
  }

  const CurrentModel = models[currentModelIndex]

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>어떤 라운지인가요?</GlobalTitle>
        <GlobalSubTitle>라운지 정보를 입력해주세요!</GlobalSubTitle>
        <Container>
          <InputContainer>
            <InputTitle>라운지 이름</InputTitle>
            <Input minLength={2} maxLength={10} />
          </InputContainer>
          <InputContainer>
            <InputTitle>라운지 관리자</InputTitle>
            <Input readOnly value='홍은신이다' />
          </InputContainer>
          <LoungeModel>
            <Canvas
              style={{ width: '100%', height: '100%' }}
              camera={{ position: [0, 0, 4], fov: 50 }} // 카메라 위치와 시야각(fov) 설정
            >
              <ambientLight intensity={1} />
              <CurrentModel position={new Vector3(0, 0, 0)} />
            </Canvas>
          </LoungeModel>
          <ModelIndexText>
            {currentModelIndex + 1} / {models.length}
          </ModelIndexText>
          <ChooseContainer>
            <MoveIcon src={left} onClick={handleLeftClick} />
            <ChooseButton>선택</ChooseButton>
            <MoveIcon src={right} onClick={handleRightClick} />
          </ChooseContainer>
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

interface ModelProps {
  position: Vector3
}

function CenterModel({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null)
  const { scene } = useThree()

  useEffect(() => {
    if (ref.current) {
      const box = new Box3().setFromObject(ref.current)
      const center = box.getCenter(new Vector3())
      ref.current.position.sub(center) // 모델을 중심으로 이동
    }
  }, [scene])

  return <group ref={ref}>{children}</group>
}

function Model1({ position }: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
    }
  })

  return (
    <group position={position}>
      <CenterModel>
        <group ref={ref}>
          <LoungeModel1 scale={[1, 1, 1]} />
        </group>
      </CenterModel>
    </group>
  )
}

function Model2({ position }: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
    }
  })

  return (
    <group position={position}>
      <CenterModel>
        <group ref={ref}>
          <LoungeModel2 scale={[1, 1, 1]} />
        </group>
      </CenterModel>
    </group>
  )
}

function Model3({ position }: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
    }
  })

  return (
    <group position={position}>
      <CenterModel>
        <group ref={ref}>
          <LoungeModel3 scale={[1, 1, 1]} />
        </group>
      </CenterModel>
    </group>
  )
}
