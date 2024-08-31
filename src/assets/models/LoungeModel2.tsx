import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import React, { useMemo } from 'react'

// LoungeModel2의 props 타입 정의
interface LoungeModel2Props extends GroupProps {}

// 메모이제이션된 메쉬 컴포넌트
const MemoizedMesh = React.memo(
  ({ geometry, material, position, rotation }: any) => (
    <mesh
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
    />
  )
)

export function LoungeModel2(props: LoungeModel2Props) {
  // GLTF 로드를 메모이제이션하여 성능 최적화
  const { nodes, materials } = useGLTF(
    '/models/lounge_model2/scene.gltf'
  ) as any

  // 메쉬 데이터를 useMemo로 메모이제이션
  const meshData = useMemo(
    () => ({
      geometry: nodes.Object_Planet_0.geometry,
      material: materials.Planet,
      position: [-0.045, 0.3, 0.066],
      rotation: [Math.PI, 0, Math.PI],
    }),
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      <MemoizedMesh {...meshData} />
    </group>
  )
}

// GLTF 파일을 사전에 로드
useGLTF.preload('/models/lounge_model2/scene.gltf')
