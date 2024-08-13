import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Vector3, Group } from 'three'
import { LoungeModel1 } from '../../assets/models/LoungeModel1'
import { LoungeModel2 } from '../../assets/models/LoungeModel2'
import { LoungeModel3 } from '../../assets/models/LoungeModel3'
import { LoungeModel4 } from '../../assets/models/LoungeModel4'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoungeContainer() {
  return (
    <Canvas
      style={{ width: '326px', height: '600px' }}
      camera={{ position: [0, 0, 8], fov: 50 }} // 카메라 위치와 시야각(fov) 설정
    >
      <ambientLight intensity={1} />
      <group position={[0, 0, 0]}>
        <Model4 position={new Vector3(-0.9, 1.3, 0)} />
        <Model2 position={new Vector3(0.9, 1, 0)} />
        <Model3 position={new Vector3(-0.85, -1.8, 0)} />
        <Model1 position={new Vector3(0.9, -0.9, 0)} />
      </group>
    </Canvas>
  )
}

interface ModelProps {
  position: Vector3
}

function Model1({ position }: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
  })

  return (
    <group position={position}>
      <group ref={ref}>
        <LoungeModel1 scale={[0.4, 0.4, 0.4]} />
      </group>
      <Text position={[0, -0.6, 0]} fontSize={0.15} color='#FFFFFF'>
        조이타스
      </Text>
    </group>
  )
}

function Model2({ position }: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
  })

  return (
    <group position={position}>
      <group ref={ref}>
        <LoungeModel2 scale={[0.4, 0.4, 0.4]} />
      </group>
      <Text position={[0, -0.3, 0]} fontSize={0.15} color='#FFFFFF'>
        HAEPI
      </Text>
    </group>
  )
}

function Model3({ position }: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
  })

  return (
    <group position={position}>
      <group ref={ref}>
        <LoungeModel3 scale={[0.4, 0.4, 0.4]} />
      </group>
      <Text position={[0, 0.2, 0]} fontSize={0.15} color='#FFFFFF'>
        신이에요
      </Text>
    </group>
  )
}

function Model4({ position }: ModelProps) {
  const navigate = useNavigate()
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    ref.current.rotation.y += 0.01 // 지속적으로 오른쪽으로 회전
  })

  const handleClick = () => {
    navigate('/lounge/new') // 클릭 시 네비게이션
  }

  return (
    <group position={position} onClick={handleClick}>
      <group ref={ref}>
        <LoungeModel4 scale={[0.6, 0.6, 0.6]} />
      </group>
      <Text position={[0, -0.7, 0]} fontSize={0.15} color='#FFFFFF'>
        새 라운지
      </Text>
      <Text position={[0, -0.9, 0]} fontSize={0.15} color='#FFFFFF'>
        만들기
      </Text>
    </group>
  )
}
