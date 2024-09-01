import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { useMemo } from 'react'

interface LoungeModel4Props extends GroupProps {}

export default function LoungeModel4(props: LoungeModel4Props) {
  const { nodes, materials } = useGLTF(
    '/models/lounge_model4/scene.gltf'
  ) as any

  const meshes = useMemo(
    () => [
      { geometry: nodes.Ball_Ball_0.geometry, material: materials.Ball },
      { geometry: nodes.chair_chiar_0.geometry, material: materials.chiar },
      { geometry: nodes.grass_grass_0.geometry, material: materials.grass },
      {
        geometry: nodes.grassland_grassland_0.geometry,
        material: materials.grassland,
      },
      { geometry: nodes.Lamp_Lamp_0.geometry, material: materials.Lamp },
      { geometry: nodes.Resort_Resort_0.geometry, material: materials.Resort },
      { geometry: nodes.Tree_Tree_0.geometry, material: materials.Tree },
      { geometry: nodes.Tree2_Tree2_0.geometry, material: materials.Tree2 },
      { geometry: nodes.deco_deco_0.geometry, material: materials.deco },
      { geometry: nodes.planet_planet_0.geometry, material: materials.planet },
      { geometry: nodes.stair_stair_0.geometry, material: materials.stair },
    ],
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {meshes.map((mesh, index) => (
            <mesh
              key={index}
              geometry={mesh.geometry}
              material={mesh.material}
              scale={[1, 1, 1]}
            />
          ))}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/lounge_model4/scene.gltf')
