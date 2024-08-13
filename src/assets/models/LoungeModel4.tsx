import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

interface LoungeModel4Props extends GroupProps {}

export function LoungeModel4(props: LoungeModel4Props) {
  const { nodes, materials } = useGLTF(
    '/models/lounge_model4/scene.gltf'
  ) as any

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Ball_Ball_0.geometry}
            material={materials.Ball}
            scale={100}
          />
          <mesh
            geometry={nodes.chair_chiar_0.geometry}
            material={materials.chiar}
            scale={100}
          />
          <mesh
            geometry={nodes.grass_grass_0.geometry}
            material={materials.grass}
            scale={100}
          />
          <mesh
            geometry={nodes.grassland_grassland_0.geometry}
            material={materials.grassland}
            scale={100}
          />
          <mesh
            geometry={nodes.Lamp_Lamp_0.geometry}
            material={materials.Lamp}
            scale={100}
          />
          <mesh
            geometry={nodes.Resort_Resort_0.geometry}
            material={materials.Resort}
            scale={100}
          />
          <mesh
            geometry={nodes.Tree_Tree_0.geometry}
            material={materials.Tree}
            scale={100}
          />
          <mesh
            geometry={nodes.Tree2_Tree2_0.geometry}
            material={materials.Tree2}
            scale={100}
          />
          <mesh
            geometry={nodes.deco_deco_0.geometry}
            material={materials.deco}
            scale={100}
          />
          <mesh
            geometry={nodes.planet_planet_0.geometry}
            material={materials.planet}
            scale={100}
          />
          <mesh
            geometry={nodes.stair_stair_0.geometry}
            material={materials.stair}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/lounge_model4/scene.gltf')
