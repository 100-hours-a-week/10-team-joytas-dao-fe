import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

interface MyRoomModel1Props extends React.ComponentProps<'group'> {}

export default function MyRoomModel1(props: MyRoomModel1Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model1/scene.gltf'
  ) as unknown as {
    nodes: {
      Object_2: THREE.Mesh
    }
    materials: {
      'Scene_-_Root': THREE.Material
    }
  }

  const meshProps = useMemo(
    () => ({
      geometry: nodes.Object_2.geometry,
      material: materials['Scene_-_Root'],
      position: [-16, -16, 0] as [number, number, number],
    }),
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh {...meshProps} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/myRoom_model1/scene.gltf')
