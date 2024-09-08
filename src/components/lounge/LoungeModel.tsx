import { Vector3, Group } from 'three'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { LoungeModelList } from '../models/LazyModelList'

interface ModelProps {
  position: Vector3
  label: string
  type: 'L0001' | 'L0002' | 'L0003' | 'L0004'
  scale?: [number, number, number]
  onClick?: () => void
}

export default function LoungeModel({
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

  const ModelComponent = LoungeModelList[type] || LoungeModelList.L0004

  return (
    <group position={position} onClick={onClick}>
      <group ref={ref} scale={scale}>
        <Suspense fallback={null}>
          <ModelComponent />
        </Suspense>
      </group>
      <Text position={[0, -0.6, 0]} fontSize={0.15} color='#FFFFFF'>
        {label}
      </Text>
    </group>
  )
}
