import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Mesh, Material } from 'three'

interface GLTFResultExtended {
  nodes: {
    Object_2: Mesh
    Object_3: Mesh
  }
  materials: {
    material_0: Material
  }
}

export default function ObjetModel3(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    '/models/objet_model3/scene.gltf'
  ) as unknown as GLTFResultExtended

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
          scale={0.02}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
          scale={0.02}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/objet_model3/scene.gltf')
