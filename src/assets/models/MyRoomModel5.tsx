import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Vector3, Euler } from 'three'

interface MyRoomModel5Props extends GroupProps {}

export function MyRoomModel5(props: MyRoomModel5Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model5/scene.gltf'
  ) as any

  // 메모이제이션을 사용하여 메쉬 데이터를 준비합니다.
  const meshData = useMemo(
    () => [
      {
        key: 'Ground',
        geometry: nodes.Ground_Floor_0.geometry,
        material: materials.Floor,
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Borders',
        geometry: nodes.Borders_Borders_0.geometry,
        material: materials.Borders,
        position: new Vector3(-139.791, 0, 0),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Window',
        geometry: nodes.Window_Window_0.geometry,
        material: materials.Window,
        position: new Vector3(-138.282, 142.671, -35.813),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Wall',
        geometry: nodes.Wall_Wall_0.geometry,
        material: materials.Wall,
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Couch',
        geometry: nodes.Couch_Couch_0.geometry,
        material: materials.Couch,
        position: new Vector3(13.244, 24.543, -48.017),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Carpet',
        geometry: nodes.Carpet_Carpet_0.geometry,
        material: materials.Carpet,
        position: new Vector3(29.732, 0.433, 75.915),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(49.01, 49.01, 49.01),
      },
      {
        key: 'Curtains',
        geometry: nodes.Curtains_Curtains_0.geometry,
        material: materials.Curtains,
        position: new Vector3(-117.768, 140.193, 103.743),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Painting',
        geometry: nodes.Painting_Painting_0.geometry,
        material: materials.Painting,
        position: new Vector3(81.597, 0.154, -115.553),
        rotation: new Euler(-1.708, -0.001, -0.022),
        scale: new Vector3(91.097, 91.097, 91.097),
      },
      {
        key: 'Plate',
        geometry: nodes.Plate_Plate_0.geometry,
        material: materials.Plate,
        position: new Vector3(54.203, 42.128, 71.891),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(25.284, 25.284, 25.284),
      },
      {
        key: 'Pillow02',
        geometry: nodes.Pillow02_Pillow_0.geometry,
        material: materials.Pillow,
        position: new Vector3(-55.74, 64.127, -62.773),
        rotation: new Euler(-0.488, 0.509, 0.253),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Pillow01',
        geometry: nodes.Pillow01_Pillow_0.geometry,
        material: materials.Pillow,
        position: new Vector3(5.4, 69.101, -67.856),
        rotation: new Euler(-1.573, 0.004, 0.197),
        scale: new Vector3(100, 100, 100),
      },
      {
        key: 'Cloth',
        geometry: nodes.Cloth_Cloth_0.geometry,
        material: materials.Cloth,
        position: new Vector3(77.456, 67.228, -92.501),
        rotation: new Euler(-1.573, 0.007, -0.001),
        scale: new Vector3(100, 91.583, 100),
      },
      {
        key: 'CoffeeTable',
        geometry: nodes.Coffee_Table_Coffee_Table_0.geometry,
        material: materials.Coffee_Table,
        position: new Vector3(38.484, 20.127, 76.636),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(91.097, 91.097, 91.097),
      },
      {
        key: 'TeaPot',
        geometry: nodes.Tea_Pot_Tea_Pot_0.geometry,
        material: materials.Tea_Pot,
        position: new Vector3(53.92, 41.624, 65.903),
        rotation: new Euler(0, -1.134, 0),
      },
      {
        key: 'Cup01',
        geometry: nodes.Cup01_Cup_0.geometry,
        material: materials.material,
        position: new Vector3(62.284, 41.663, 77.111),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(4.278, 4.278, 4.278),
      },
      {
        key: 'Cup02',
        geometry: nodes.Cup02_Cup_0.geometry,
        material: materials.material,
        position: new Vector3(47.711, 41.663, 78.88),
        rotation: new Euler(-Math.PI / 2, 0, -2.094),
        scale: new Vector3(4.278, 4.278, 4.278),
      },
      {
        key: 'Plant',
        geometry: nodes.Plant_Plant_0.geometry,
        material: materials.Plant,
        position: new Vector3(-87.401, 12.526, 117.543),
        rotation: new Euler(-Math.PI / 2, 0, 2.356),
        scale: new Vector3(8.267, 8.267, 8.267),
      },
      {
        key: 'PlantStand',
        geometry: nodes.Plant_Stand_Plant_Stand_0.geometry,
        material: materials.Plant_Stand,
        position: new Vector3(-87.401, 12.526, 117.543),
        rotation: new Euler(-Math.PI / 2, 0, 2.356),
        scale: new Vector3(8.267, 8.267, 8.267),
      },
    ],
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
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
  )
}

useGLTF.preload('/models/myRoom_model5/scene.gltf')
