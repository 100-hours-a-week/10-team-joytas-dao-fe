import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import React, { useMemo } from 'react'

interface LoungeModel2Props extends GroupProps {}

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

export default function LoungeModel2(props: LoungeModel2Props) {
  const { nodes, materials } = useGLTF(
    '/models/lounge_model2/scene.gltf'
  ) as any

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

useGLTF.preload('/models/lounge_model2/scene.gltf')
