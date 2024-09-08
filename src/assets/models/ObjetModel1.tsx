import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Mesh, Material } from 'three'

interface GLTFResultExtended {
  nodes: {
    Object_2: Mesh
  }
  materials: {
    mat0: Material
  }
}

export default function ObjetModel1(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    '/models/objet_model1/scene.gltf'
  ) as unknown as GLTFResultExtended

  return (
    <group {...props} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.mat0} />
    </group>
  )
}

useGLTF.preload('/models/objet_model1/scene.gltf')
