import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

interface MyRoomModel3Props extends React.ComponentProps<'group'> {}

export function MyRoomModel3(props: MyRoomModel3Props) {
  const { nodes, materials } = useGLTF('/models/myRoom_model3/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={(nodes.Object_2 as THREE.Mesh).geometry}
          material={materials['Scene_-_Root']}
          position={[-32, -32, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/myRoom_model3/scene.gltf')
