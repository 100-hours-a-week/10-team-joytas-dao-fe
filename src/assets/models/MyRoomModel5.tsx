import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import { GroupProps } from '@react-three/fiber'
import { Vector3, Euler } from 'three'

interface MyRoomModel5Props extends GroupProps {}

export default function MyRoomModel5(props: MyRoomModel5Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model5/scene.gltf'
  ) as any

  const meshData = useMemo(
    () => [
      {
        key: 'TeaTableLamp_0',
        geometry: nodes.TeaTableLamp_0.geometry,
        material: materials.LampBase,
        position: new Vector3(3.219, 1.648, 0.552),
        scale: new Vector3(0.3, 0.3, 0.3),
      },
      {
        key: 'TeaTableLamp_1',
        geometry: nodes.TeaTableLamp_1.geometry,
        material: materials.LampBorder,
        position: new Vector3(3.219, 1.648, 0.552),
        scale: new Vector3(0.3, 0.3, 0.3),
      },
      {
        key: 'TeaTable_0',
        geometry: nodes.TeaTable_0.geometry,
        material: materials.TeaTableMain,
        position: new Vector3(3, 2, 0),
        scale: new Vector3(0.66, 0.66, 0.66),
      },
      {
        key: 'TeaTable_1',
        geometry: nodes.TeaTable_1.geometry,
        material: materials.TeaTableBase,
        position: new Vector3(3, 2, 0),
        scale: new Vector3(0.66, 0.66, 0.66),
      },
      {
        key: 'TeaTable_2',
        geometry: nodes.TeaTable_2.geometry,
        material: materials.TeaTableTop,
        position: new Vector3(3, 2, 0),
        scale: new Vector3(0.66, 0.66, 0.66),
      },
      {
        key: 'Bed_Base_0',
        geometry: nodes.Bed_Base_0.geometry,
        material: materials.Bed_Base,
        position: new Vector3(0, -2, 0),
        scale: new Vector3(1.333, 1.333, 1.333),
      },
      {
        key: 'Bed_Base_1',
        geometry: nodes.Bed_Base_1.geometry,
        material: materials.BedCheck,
        position: new Vector3(0, -2, 0),
        scale: new Vector3(1.333, 1.333, 1.333),
      },
      {
        key: 'Pillow_Right_0',
        geometry: nodes.Pillow_Right_0.geometry,
        material: materials.PillowLightBlue,
        position: new Vector3(-0.95, -1.405, 1.555),
        rotation: new Euler(-0.349, 0, 0),
        scale: new Vector3(0.99, 0.99, 0.94),
      },
      {
        key: 'Pillow_Left_0',
        geometry: nodes.Pillow_Left_0.geometry,
        material: materials.PillowLightYellow,
        position: new Vector3(0.95, -1.376, 1.387),
        scale: new Vector3(0.99, 0.99, 0.94),
      },
      {
        key: 'Bed_Frame_0',
        geometry: nodes.Bed_Frame_0.geometry,
        material: materials.Bed_Frame,
        position: new Vector3(0, -2, 0),
        scale: new Vector3(1.333, 1.333, 1.333),
      },
      {
        key: 'UpsideDownChair_0',
        geometry: nodes.UpsideDownChair_0.geometry,
        material: materials.UpsideDownChair,
        position: new Vector3(2, 3, 0),
        scale: new Vector3(0.6, 0.6, 0.6),
      },
      {
        key: 'WallPillow_0',
        geometry: nodes.WallPillow_0.geometry,
        material: materials.WallPillow,
        position: new Vector3(-3.71, 1.11, 0.799),
        rotation: new Euler(0, 1.259, 0),
        scale: new Vector3(0.99, 1.691, 0.94),
      },
      {
        key: 'Plane001_0',
        geometry: nodes.Plane001_0.geometry,
        material: materials.Wall_Solid_Green,
        position: new Vector3(0, -4.25, 4),
        rotation: new Euler(Math.PI / 2, 0, 0),
      },
      {
        key: 'Plane001_1',
        geometry: nodes.Plane001_1.geometry,
        material: materials.Wall_Golden,
        position: new Vector3(0, -4.25, 4),
        rotation: new Euler(Math.PI / 2, 0, 0),
      },
      {
        key: 'Plane001_2',
        geometry: nodes.Plane001_2.geometry,
        material: materials.Wall_Pink,
        position: new Vector3(0, -4.25, 4),
        rotation: new Euler(Math.PI / 2, 0, 0),
      },
      {
        key: 'Plane001_3',
        geometry: nodes.Plane001_3.geometry,
        material: materials.Wall_Brown,
        position: new Vector3(0, -4.25, 4),
        rotation: new Euler(Math.PI / 2, 0, 0),
      },
      {
        key: 'Plane002_0',
        geometry: nodes.Plane002_0.geometry,
        material: materials.Wall_Pale_Green,
        position: new Vector3(-4, 0, 4),
        rotation: new Euler(Math.PI / 2, Math.PI / 2, 0),
      },
      {
        key: 'Plane_0',
        geometry: nodes.Plane_0.geometry,
        material: materials.Floor,
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
