import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Vector3, Euler } from 'three'

interface MyRoomModel4Props extends GroupProps {}

export function MyRoomModel4(props: MyRoomModel4Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model4/scene.gltf'
  ) as any

  const meshData = useMemo(
    () => [
      {
        key: 'RoomGroup',
        position: new Vector3(12.096, 11.584, -59.541),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(194.179, 194.179, 194.179),
        meshes: [
          { geometry: nodes.Room_Wall_0.geometry, material: materials.Wall },
          { geometry: nodes.Room_Floor_0.geometry, material: materials.Floor },
          {
            geometry: nodes.Room_Windows_0.geometry,
            material: materials.Windows,
          },
        ],
      },
      {
        key: 'BedGroup',
        position: new Vector3(-101.408, -101.92, -175.955),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(47.299, 47.299, 47.299),
        meshes: [
          { geometry: nodes.Cube_Bed_0.geometry, material: materials.material },
          { geometry: nodes.Cube_Bed2_0.geometry, material: materials.Bed2 },
        ],
      },
      {
        key: 'BookGroup1',
        position: new Vector3(118.938, 77.76, -199.278),
        rotation: new Euler(-Math.PI / 2, 0, Math.PI / 2),
        scale: new Vector3(21.466, 21.466, 21.466),
        meshes: [
          { geometry: nodes.Book_BookA_0.geometry, material: materials.BookA },
          { geometry: nodes.Book_Paper_0.geometry, material: materials.Paper },
          {
            geometry: nodes.Book_CoverA_0.geometry,
            material: materials.CoverA,
          },
        ],
      },
      {
        key: 'BookGroup2',
        position: new Vector3(127.024, 73.743, -199.278),
        rotation: new Euler(-Math.PI / 2, 0, Math.PI / 2),
        scale: new Vector3(18.48, 18.48, 18.48),
        meshes: [
          {
            geometry: nodes.Book001_BookB_0.geometry,
            material: materials.BookB,
          },
          {
            geometry: nodes.Book001_Paper_0.geometry,
            material: materials.Paper,
          },
        ],
      },
      {
        key: 'ClothGroup',
        position: new Vector3(5.323, -69.051, -52.437),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(162.888, 162.888, 162.888),
        meshes: [
          { geometry: nodes.Plane_Cloth_0.geometry, material: materials.Cloth },
          {
            geometry: nodes.Plane_ClothB_0.geometry,
            material: materials.ClothB,
          },
        ],
      },
      {
        key: 'ComputerGroup',
        position: new Vector3(136.249, -43.814, -191.086),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(31.477, 31.477, 31.477),
        meshes: [
          {
            geometry: nodes.Cube004_Computer_0.geometry,
            material: materials.Computer,
          },
          {
            geometry: nodes.Cube004_Mac_0.geometry,
            material: materials.material_17,
          },
          {
            geometry: nodes.Cube004_Black_0.geometry,
            material: materials.Black,
          },
          {
            geometry: nodes.Cube004_Keyboard_0.geometry,
            material: materials.Keyboard,
          },
          {
            geometry: nodes.Cube004_Desktop_0.geometry,
            material: materials.Desktop,
          },
        ],
      },
      {
        key: 'WardrobeGroup',
        position: new Vector3(-121.448, -117.042, 168.738),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(35.528, 35.528, 35.528),
        meshes: [
          {
            geometry: nodes.Cube005_Wardrop_0.geometry,
            material: materials.Wardrop,
          },
          {
            geometry: nodes.Cube005_Table_0.geometry,
            material: materials.Table,
          },
        ],
      },
      {
        key: 'VenetianBlindsGroup',
        position: new Vector3(-153.456, 138.613, -31.457),
        rotation: new Euler(-Math.PI / 2, 0, Math.PI / 2),
        scale: new Vector3(291.269, 194.179, 93.206),
        meshes: [
          {
            geometry: nodes.Venetian_slats_Plastic_venetian_material_0.geometry,
            material: materials.Plastic_venetian_material,
          },
          {
            geometry: nodes.StringL_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(0.352, 0, 0),
          },
          {
            geometry: nodes.StringC_String_material_0.geometry,
            material: materials.String_material,
          },
          {
            geometry: nodes.StringR_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(-0.352, 0, 0),
          },
          {
            geometry: nodes.StringfL_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(0.352, -0.021, 0),
          },
          {
            geometry: nodes.StringfC_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(0, -0.021, 0),
          },
          {
            geometry: nodes.StringfR_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(-0.352, -0.021, 0),
          },
          {
            geometry: nodes.StringbL_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(0.352, 0.021, 0),
          },
          {
            geometry: nodes.StringbC_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(0, 0.021, 0),
          },
          {
            geometry: nodes.StringbR_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(-0.352, 0.021, 0),
          },
          {
            geometry: nodes.Venetian_base_Plastic_venetian_material_0.geometry,
            material: materials.Plastic_venetian_material,
            position: new Vector3(0, 0, -1.59),
          },
          {
            geometry: nodes.VenetianFrame_Plastic_venetian_material_0.geometry,
            material: materials.Plastic_venetian_material,
          },
          {
            geometry: nodes.Venetian_stick__0.geometry,
            material: materials['Cube.002__0'],
            position: new Vector3(-0.47, -0.023, -0.03),
          },
          {
            geometry: nodes.Venetian_updown_String_material_0.geometry,
            material: materials.String_material,
            position: new Vector3(0.47, -0.023, -0.03),
          },
        ],
      },
      {
        key: 'LampGroup1',
        position: new Vector3(-143.294, 64.03, -218.151),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(416.126, 416.126, 416.126),
        meshes: [
          {
            geometry: nodes.Lampstrings_Lampstrings_material_0.geometry,
            material: materials.Lampstrings_material,
          },
          {
            geometry: nodes.Lamp_B1_Lampstrings_material_0.geometry,
            material: materials.Lampstrings_material,
            position: new Vector3(0.021, 0, 0.035),
          },
          {
            geometry: nodes.Lamp_B2_Lampstrings_material_0.geometry,
            material: materials.Lampstrings_material,
            position: new Vector3(-0.021, 0, 0.035),
          },
          {
            geometry: nodes.Lampholder_Lampholder_material_0.geometry,
            material: materials.Lampholder_material,
          },
          {
            geometry: nodes.Lamp_Bulb001_Lamp_Bulb_0.geometry,
            material: materials.Lamp_Bulb,
            position: new Vector3(0, 0, 0.091),
          },
        ],
      },
      {
        key: 'LampGroup2',
        position: new Vector3(223.21, -55.841, -155.996),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(194.179, 194.179, 194.179),
        meshes: [
          {
            geometry: nodes.Lampstrings001_Lampstrings001_material_0.geometry,
            material: materials['Lampstrings.001_material'],
          },
          {
            geometry: nodes.Lamp_B1001_Lampstrings001_material_0.geometry,
            material: materials['Lampstrings.001_material'],
            position: new Vector3(0.021, 0, 0.035),
          },
          {
            geometry: nodes.Lamp_B2001_Lampstrings001_material_0.geometry,
            material: materials['Lampstrings.001_material'],
            position: new Vector3(-0.021, 0, 0.035),
          },
          {
            geometry: nodes.Lampholder001_Lampholder001_material_0.geometry,
            material: materials['Lampholder.001_material'],
          },
          {
            geometry: nodes.Lamp_Bulb_Lamp_Bulb001_0.geometry,
            material: materials['Lamp_Bulb.001'],
            position: new Vector3(0, 0, 0.091),
          },
        ],
      },
      {
        key: 'Table',
        geometry: nodes.Table_Table_0.geometry,
        material: materials.Table,
        position: new Vector3(169.704, -114.937, -229.054),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(8.501, 8.501, 8.501),
      },
      {
        key: 'CubeTable',
        geometry: nodes.Cube001_Table_0.geometry,
        material: materials.Table,
        position: new Vector3(171.999, 46.083, -202.247),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(29.376, 29.376, 29.376),
      },
      {
        key: 'Cube',
        geometry: nodes.Cube002__0.geometry,
        material: materials['Cube.002__0'],
        position: new Vector3(-118.973, -68.756, -188.596),
        rotation: new Euler(-Math.PI / 2, 0, 0),
        scale: new Vector3(23.36, 23.36, 23.36),
      },
      {
        key: 'Shelves',
        geometry: nodes.Shelves1_Shelves_material_0.geometry,
        material: materials.Shelves_material,
        position: new Vector3(234.614, -101.704, 125.247),
        rotation: new Euler(-Math.PI / 2, 0, Math.PI / 2),
        scale: new Vector3(139.794, 139.794, 139.794),
      },
    ],
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      {meshData.map((group) => (
        <group
          key={group.key}
          position={group.position}
          rotation={group.rotation}
          scale={group.scale}
        >
          {group?.meshes?.map((mesh, index) => (
            <mesh
              key={index}
              geometry={mesh.geometry}
              material={mesh.material}
              position={mesh.position}
            />
          ))}
        </group>
      ))}
    </group>
  )
}

useGLTF.preload('/models/myRoom_model4/scene.gltf')
