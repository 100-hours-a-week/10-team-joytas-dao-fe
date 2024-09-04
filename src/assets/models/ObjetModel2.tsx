import { useGLTF } from '@react-three/drei'
import { Mesh, Material } from 'three'
import { GroupProps } from '@react-three/fiber'

interface GLTFResultExtended {
  nodes: {
    Meteorite_Meteorite_Shader_Proxy_0: Mesh
  }
  materials: {
    Meteorite_Shader_Proxy: Material
  }
}

export default function ObjetModel2(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    '/models/objet_model2/scene.gltf'
  ) as unknown as GLTFResultExtended

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          scale={0.3}
          geometry={nodes.Meteorite_Meteorite_Shader_Proxy_0.geometry}
          material={materials.Meteorite_Shader_Proxy}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/objet_model2/scene.gltf')
