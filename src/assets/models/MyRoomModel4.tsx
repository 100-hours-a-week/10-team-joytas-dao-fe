import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import { GroupProps } from '@react-three/fiber'
import { Vector3, Euler } from 'three'

interface MyRoomModel4Props extends GroupProps {}

export default function MyRoomModel5(props: MyRoomModel4Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model4/scene.gltf'
  ) as any

  const meshData = useMemo(
    () => [
      {
        key: 'Chair001_0',
        geometry: nodes.Chair001_0.geometry,
        material: materials.Chair,
        position: new Vector3(0.076, 2.629, 0),
        rotation: new Euler(0, 0, -Math.PI / 2 + 100),
        scale: new Vector3(0.6, 0.6, 0.6),
      },
      {
        key: 'Chair001_1',
        geometry: nodes.Chair001_1.geometry,
        material: materials.Chair_Red,
        position: new Vector3(0.076, 2.629, 0),
        rotation: new Euler(0, 0, -Math.PI / 2 + 100),
        scale: new Vector3(0.6, 0.6, 0.6),
      },
      {
        key: 'Chair_0',
        geometry: nodes.Chair_0.geometry,
        material: materials.Chair,
        position: new Vector3(0, -0.3, 0),
        rotation: undefined,
        scale: new Vector3(0.6, 0.6, 0.6),
      },
      {
        key: 'Chair_1',
        geometry: nodes.Chair_1.geometry,
        material: materials.Chair_Red,
        position: new Vector3(0, -0.3, 0),
        rotation: undefined,
        scale: new Vector3(0.6, 0.6, 0.6),
      },
      {
        key: 'Desk_0',
        geometry: nodes.Desk_0.geometry,
        material: materials.Desk_Top,
        position: new Vector3(0, 1, 0),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Desk_1',
        geometry: nodes.Desk_1.geometry,
        material: materials.Desk_Structure,
        position: new Vector3(0, 1, 0),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Icosphere025_0',
        geometry: nodes.Icosphere025_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.476, -1.688, 3.783),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere024_0',
        geometry: nodes.Icosphere024_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-3.114, -2.977, 4.722),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere023_0',
        geometry: nodes.Icosphere023_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-3.59, -2.151, 4.229),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere022_0',
        geometry: nodes.Icosphere022_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.571, -1.088, 5.932),
        rotation: undefined,
        scale: new Vector3(1.068, 1.068, 0.747),
      },
      {
        key: 'Icosphere021_0',
        geometry: nodes.Icosphere021_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.777, -2.076, 5.6),
        rotation: undefined,
        scale: new Vector3(0.817, 0.817, 0.572),
      },
      {
        key: 'Icosphere020_0',
        geometry: nodes.Icosphere020_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.562, -0.681, 4.72),
        rotation: undefined,
        scale: new Vector3(0.936, 0.936, 0.655),
      },
      {
        key: 'Icosphere019_0',
        geometry: nodes.Icosphere019_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-0.357, -0.921, 5.648),
        rotation: undefined,
        scale: new Vector3(0.732, 0.732, 0.512),
      },
      {
        key: 'Icosphere018_0',
        geometry: nodes.Icosphere018_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.389, -1.511, 4.152),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere017_0',
        geometry: nodes.Icosphere017_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.125, -1.452, 5.353),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere016_0',
        geometry: nodes.Icosphere016_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-0.749, -1.2, 4.561),
        rotation: undefined,
        scale: new Vector3(0.766, 0.766, 0.536),
      },
      {
        key: 'Icosphere015_0',
        geometry: nodes.Icosphere015_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.914, -2.789, 4.402),
        rotation: undefined,
        scale: new Vector3(0.936, 0.936, 0.655),
      },
      {
        key: 'Icosphere014_0',
        geometry: nodes.Icosphere014_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-3.02, -1.375, 5.44),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere013_0',
        geometry: nodes.Icosphere013_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.851, -1.974, 4.797),
        rotation: undefined,
        scale: new Vector3(0.873, 0.873, 0.611),
      },
      {
        key: 'Icosphere012_0',
        geometry: nodes.Icosphere012_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.85, -2.021, 3.927),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere011_0',
        geometry: nodes.Icosphere011_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-3.194, -1.025, 4.065),
        rotation: undefined,
        scale: new Vector3(0.766, 0.766, 0.536),
      },
      {
        key: 'Icosphere010_0',
        geometry: nodes.Icosphere010_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.624, -3.097, 5.052),
        rotation: undefined,
        scale: new Vector3(0.287, 0.287, 0.201),
      },
      {
        key: 'Icosphere009_0',
        geometry: nodes.Icosphere009_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.681, 0.035, 4.653),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere008_0',
        geometry: nodes.Icosphere008_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-0.391, -0.426, 4.392),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere007_0',
        geometry: nodes.Icosphere007_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.165, -2.869, 4.892),
        rotation: undefined,
        scale: new Vector3(0.766, 0.766, 0.536),
      },
      {
        key: 'Icosphere006_0',
        geometry: nodes.Icosphere006_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-0.102, -2.278, 4.933),
        rotation: undefined,
        scale: new Vector3(0.766, 0.766, 0.536),
      },
      {
        key: 'Icosphere005_0',
        geometry: nodes.Icosphere005_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.477, -3.038, 5.636),
        rotation: undefined,
        scale: new Vector3(0.936, 0.936, 0.655),
      },
      {
        key: 'Icosphere004_0',
        geometry: nodes.Icosphere004_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.572, -2.143, 5.473),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Icosphere003_0',
        geometry: nodes.Icosphere003_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-1.375, -0.591, 5.167),
        rotation: undefined,
        scale: new Vector3(0.766, 0.766, 0.536),
      },
      {
        key: 'Icosphere002_0',
        geometry: nodes.Icosphere002_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-3.126, -2.586, 5.09),
        rotation: undefined,
        scale: new Vector3(0.287, 0.287, 0.201),
      },
      {
        key: 'Icosphere001_0',
        geometry: nodes.Icosphere001_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-2.061, -1.077, 3.735),
        rotation: undefined,
        scale: new Vector3(0.561, 0.561, 0.392),
      },
      {
        key: 'Icosphere_0',
        geometry: nodes.Icosphere_0.geometry,
        material: materials.Leaf,
        position: new Vector3(-0.925, -1.856, 4.726),
        rotation: undefined,
        scale: new Vector3(0.5, 0.5, 0.35),
      },
      {
        key: 'Trunk_0',
        geometry: nodes.Trunk_0.geometry,
        material: materials.Wood,
        position: new Vector3(-2, -2, 0),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'WindowFrame_0',
        geometry: nodes.WindowFrame_0.geometry,
        material: materials.WindowBlack,
        position: new Vector3(-3, -4.25, 1),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'WindowFrame_1',
        geometry: nodes.WindowFrame_1.geometry,
        material: materials.WindowWhite,
        position: new Vector3(-3, -4.25, 1),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'GlassesTop_0',
        geometry: nodes.GlassesTop_0.geometry,
        material: materials.Glass,
        position: new Vector3(0.812, -3.823, 4.694),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'GlassesBottom_0',
        geometry: nodes.GlassesBottom_0.geometry,
        material: materials.Glass,
        position: new Vector3(0.812, -3.823, 1.494),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Grass_0',
        geometry: nodes.Grass_0.geometry,
        material: materials.Grass,
        position: new Vector3(3.361, -3.517, 0.172),
        rotation: new Euler(0.244, -0.08, -1.655),
        scale: new Vector3(0.175, 0.176, 0.242),
      },
      {
        key: 'WallLeft_0',
        geometry: nodes.WallLeft_0.geometry,
        material: materials.WallWhite,
        position: new Vector3(0, -4, 4),
        rotation: new Euler(-Math.PI / 2, 0, -Math.PI),
        scale: undefined,
      },
      {
        key: 'WallLeft_1',
        geometry: nodes.WallLeft_1.geometry,
        material: materials.WallGray,
        position: new Vector3(0, -4, 4),
        rotation: new Euler(-Math.PI / 2, 0, -Math.PI),
        scale: undefined,
      },
      {
        key: 'WallRight_0',
        geometry: nodes.WallRight_0.geometry,
        material: materials.WallWhite,
        position: new Vector3(-4, 0, 4),
        rotation: new Euler(Math.PI / 2, Math.PI / 2, 0),
        scale: undefined,
      },
      {
        key: 'WallRight_1',
        geometry: nodes.WallRight_1.geometry,
        material: materials.WallGray,
        position: new Vector3(-4, 0, 4),
        rotation: new Euler(Math.PI / 2, Math.PI / 2, 0),
        scale: undefined,
      },
      {
        key: 'Pillar_Right_0',
        geometry: nodes.Pillar_Right_0.geometry,
        material: materials.WallWhite,
        position: new Vector3(-3.5, 3.5, 1.5),
        rotation: new Euler(0, 0, -Math.PI / 2),
        scale: undefined,
      },
      {
        key: 'Pillar_Middle_0',
        geometry: nodes.Pillar_Middle_0.geometry,
        material: materials.WallWhite,
        position: new Vector3(-3.5, -3.5, 1.5),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Pillar_Left_0',
        geometry: nodes.Pillar_Left_0.geometry,
        material: materials.WallWhite,
        position: new Vector3(3.5, -3.5, 1.5),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Low_0',
        geometry: nodes.Low_0.geometry,
        material: materials.WallGray,
        position: new Vector3(-3.5, -3.5, 0.5),
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Floor_0',
        geometry: nodes.Floor_0.geometry,
        material: materials.WallDarkGray,
        position: undefined,
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Floor_1',
        geometry: nodes.Floor_1.geometry,
        material: materials.Soil,
        position: undefined,
        rotation: undefined,
        scale: undefined,
      },
      {
        key: 'Floor_2',
        geometry: nodes.Floor_2.geometry,
        material: materials.WallGray,
        position: undefined,
        rotation: undefined,
        scale: undefined,
      },
    ],
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      <group
        rotation={new Euler(-Math.PI / 2, 0, 0)}
        scale={new Vector3(0.378, 0.378, 0.378)}
      >
        {meshData.map((mesh) => (
          <mesh
            key={mesh.key}
            geometry={mesh.geometry}
            material={mesh.material}
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale}
          />
        ))}
      </group>
    </group>
  )
}

useGLTF.preload('/models/myRoom_model4/scene.gltf')
