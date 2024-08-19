import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Vector3, Group } from 'three'
import { LoungeModel1 } from '../../assets/models/LoungeModel1'
import { LoungeModel2 } from '../../assets/models/LoungeModel2'
import { LoungeModel3 } from '../../assets/models/LoungeModel3'
import { LoungeModel4 } from '../../assets/models/LoungeModel4'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoungeProps } from '../../pages/lounge/LoungeList'
import { Deem } from '../../pages/lounge/LoungeStyles'

interface ModelProps {
  position: Vector3
  label: string
  type: string
  scale?: [number, number, number]
  onClick?: () => void
}

export default function LoungeContainer({
  loungeList,
}: {
  loungeList: LoungeProps[]
}) {
  const navigate = useNavigate()

  if (loungeList.length === 0) {
    return (
      <Deem>
        라운지가 없습니다! <br /> 새 라운지를 만들어주세요!
        <Canvas
          style={{ width: '326px', height: '600px' }}
          camera={{ position: [0, 0, 8], fov: 50 }}
        >
          <ambientLight intensity={1} />
          <group position={[0, 0, 0]}>
            <Model
              type='L0004'
              position={new Vector3(0, 0, 0)}
              label='새 라운지 만들기'
              scale={[2, 2, 2]}
              onClick={() => navigate('/lounge/new')}
            />
          </group>
          <Text position={[0, -3, 0]} fontSize={0.7} color='#FFFFFF'>
            새 라운지 만들기
          </Text>
        </Canvas>
      </Deem>
    )
  }

  return (
    <Canvas
      style={{ width: '326px', height: '600px' }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <ambientLight intensity={1} />
      <group position={[0, 0, 0]}>
        <Model
          type='L0004'
          position={new Vector3(-0.9, 1.4, 0)}
          label='새 라운지 만들기'
          scale={[0.6, 0.6, 0.6]}
          onClick={() => navigate('/lounge/new')}
        />
        {loungeList.map((lounge) => (
          <Model
            key={lounge.lounge_id}
            type={lounge.type}
            position={new Vector3(0, 0, 0)} // Position can also be customized
            label={lounge.name}
          />
        ))}
      </group>
    </Canvas>
  )
}

function Model({
  position,
  type,
  label,
  scale = [0.4, 0.4, 0.4],
  onClick,
}: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  let ModelComponent
  switch (type) {
    case 'L0001':
      ModelComponent = LoungeModel1
      break
    case 'L0002':
      ModelComponent = LoungeModel2
      break
    case 'L0003':
      ModelComponent = LoungeModel3
      break
    case 'L0004':
    default:
      ModelComponent = LoungeModel4
      break
  }

  return (
    <group position={position} onClick={onClick}>
      <group ref={ref} scale={scale}>
        <ModelComponent />
      </group>
      <Text position={[0, -0.6, 0]} fontSize={0.15} color='#FFFFFF'>
        {label}
      </Text>
    </group>
  )
}
