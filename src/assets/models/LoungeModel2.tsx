import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

// LoungeModel2의 props 타입 정의
interface LoungeModel2Props extends GroupProps {}

export function LoungeModel2(props: LoungeModel2Props) {
  // useGLTF에서 반환된 데이터의 타입을 명시적으로 지정합니다.
  const { nodes, materials } = useGLTF(
    '/models/lounge_model2/scene.gltf'
  ) as any

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_Planet_0.geometry}
        material={materials.Planet}
        position={[-0.045, 0.3, 0.066]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/models/lounge_model2/scene.gltf')
