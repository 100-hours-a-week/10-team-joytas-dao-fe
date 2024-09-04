import {
  ObjetModel,
  ModelIndexText,
  ChooseContainer,
  MoveIcon,
  ChooseButton,
} from '../ObjetStyles'
import left from '../../../assets/images/left.webp'
import right from '../../../assets/images/right.webp'
import { useState, useRef, useEffect, lazy } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Vector3, Group, Box3 } from 'three'

const ObjetModel1 = lazy(() => import('../../../assets/models/ObjetModel1'))
const ObjetModel2 = lazy(() => import('../../../assets/models/ObjetModel2'))
const ObjetModel3 = lazy(() => import('../../../assets/models/ObjetModel3'))

interface ObjetProps {
  setSelectedType: (type: string) => void
}

export default function SelectObjetType({ setSelectedType }: ObjetProps) {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)
  const models = [Model1, Model2, Model3]
  const modelTypes = ['O0001', 'O0002', 'O0003']

  const CurrentModel = models[currentModelIndex]

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

  const handleSelectClick = () => {
    setSelectedType(modelTypes[currentModelIndex])
  }

  return (
    <>
      <ObjetModel>
        <Canvas
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [0, 0, 4], fov: 50 }} // 카메라 위치와 시야각(fov) 설정
        >
          <ambientLight intensity={5} />
          <CurrentModel position={new Vector3(0, 0, 0)} />
        </Canvas>
      </ObjetModel>
      <ModelIndexText>
        {currentModelIndex + 1} / {models.length}
      </ModelIndexText>
      <ChooseContainer style={{ marginTop: '50px' }}>
        <MoveIcon src={left} onClick={handleLeftClick} />
        <ChooseButton onClick={handleSelectClick}>선택</ChooseButton>
        <MoveIcon src={right} onClick={handleRightClick} />
      </ChooseContainer>
    </>
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
  return (
    <group position={position}>
      <CenterModel>
        <RotatingModel>
          <ObjetModel1 scale={[3.2, 3.2, 3.2]} />
        </RotatingModel>
      </CenterModel>
    </group>
  )
}

function Model2({ position }: ModelProps) {
  return (
    <group position={position}>
      <CenterModel>
        <RotatingModel>
          <ObjetModel2 scale={[1.3, 1.3, 1.3]} />
        </RotatingModel>
      </CenterModel>
    </group>
  )
}

function Model3({ position }: ModelProps) {
  return (
    <group position={position}>
      <CenterModel>
        <RotatingModel>
          <ObjetModel3 scale={2} />
        </RotatingModel>
      </CenterModel>
    </group>
  )
}

function RotatingModel({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return <group ref={ref}>{children}</group>
}
