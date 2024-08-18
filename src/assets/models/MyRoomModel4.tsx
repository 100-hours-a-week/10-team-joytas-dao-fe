import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

interface MyRoomModel4Props extends GroupProps {}

export function MyRoomModel4(props: MyRoomModel4Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model4/scene.gltf'
  ) as any

  return (
    <group {...props} dispose={null}>
      <group
        position={[12.096, 11.584, -59.541]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={194.179}
      >
        <mesh geometry={nodes.Room_Wall_0.geometry} material={materials.Wall} />
        <mesh
          geometry={nodes.Room_Floor_0.geometry}
          material={materials.Floor}
        />
        <mesh
          geometry={nodes.Room_Windows_0.geometry}
          material={materials.Windows}
        />
      </group>
      <group
        position={[-101.408, -101.92, -175.955]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={47.299}
      >
        <mesh
          geometry={nodes.Cube_Bed_0.geometry}
          material={materials.material}
        />
        <mesh geometry={nodes.Cube_Bed2_0.geometry} material={materials.Bed2} />
      </group>
      <group
        position={[118.938, 77.76, -199.278]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={21.466}
      >
        <mesh
          geometry={nodes.Book_BookA_0.geometry}
          material={materials.BookA}
        />
        <mesh
          geometry={nodes.Book_Paper_0.geometry}
          material={materials.Paper}
        />
        <mesh
          geometry={nodes.Book_CoverA_0.geometry}
          material={materials.CoverA}
        />
      </group>
      <group
        position={[127.024, 73.743, -199.278]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={18.48}
      >
        <mesh
          geometry={nodes.Book001_BookB_0.geometry}
          material={materials.BookB}
        />
        <mesh
          geometry={nodes.Book001_Paper_0.geometry}
          material={materials.Paper}
        />
      </group>
      <group
        position={[137.579, 74.486, -199.278]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={18.48}
      >
        <mesh
          geometry={nodes.Book002_BookC_0.geometry}
          material={materials.BookC}
        />
        <mesh
          geometry={nodes.Book002_Paper_0.geometry}
          material={materials.Paper}
        />
      </group>
      <group
        position={[153.833, 74.486, -199.278]}
        rotation={[-Math.PI / 2, -0.377, Math.PI / 2]}
        scale={18.48}
      >
        <mesh
          geometry={nodes.Book003_BookD_0.geometry}
          material={materials.BookD}
        />
        <mesh
          geometry={nodes.Book003_Paper_0.geometry}
          material={materials.Paper}
        />
        <mesh
          geometry={nodes.Book003_CoverA_0.geometry}
          material={materials.CoverA}
        />
      </group>
      <group
        position={[195.574, 58.736, -199.278]}
        rotation={[Math.PI, -1.073, 0]}
        scale={18.48}
      >
        <mesh
          geometry={nodes.Book004_Paper_0.geometry}
          material={materials.Paper}
        />
        <mesh
          geometry={nodes.Book004_CoverB_0.geometry}
          material={materials.CoverB}
        />
      </group>
      <group
        position={[5.323, -69.051, -52.437]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={162.888}
      >
        <mesh
          geometry={nodes.Plane_Cloth_0.geometry}
          material={materials.Cloth}
        />
        <mesh
          geometry={nodes.Plane_ClothB_0.geometry}
          material={materials.ClothB}
        />
      </group>
      <group
        position={[136.249, -43.814, -191.086]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={31.477}
      >
        <mesh
          geometry={nodes.Cube004_Computer_0.geometry}
          material={materials.Computer}
        />
        <mesh
          geometry={nodes.Cube004_Mac_0.geometry}
          material={materials.material_17}
        />
        <mesh
          geometry={nodes.Cube004_Black_0.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube004_Keyboard_0.geometry}
          material={materials.Keyboard}
        />
        <mesh
          geometry={nodes.Cube004_Desktop_0.geometry}
          material={materials.Desktop}
        />
      </group>
      <group
        position={[-121.448, -117.042, 168.738]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={35.528}
      >
        <mesh
          geometry={nodes.Cube005_Wardrop_0.geometry}
          material={materials.Wardrop}
        />
        <mesh
          geometry={nodes.Cube005_Table_0.geometry}
          material={materials.Table}
        />
      </group>
      <group
        position={[-38.039, 54.159, -219.983]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={51.093}
      >
        <mesh
          geometry={nodes.Cube007_Black_0.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Cube007_Images_0.geometry}
          material={materials.Images}
        />
      </group>
      <group
        position={[-153.456, 138.613, -31.457]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[291.269, 194.179, 93.206]}
      >
        <group position={[0, 0, -0.08]}>
          <mesh
            geometry={nodes.Venetian_slats_Plastic_venetian_material_0.geometry}
            material={materials.Plastic_venetian_material}
          />
          <mesh
            geometry={nodes.StringL_String_material_0.geometry}
            material={materials.String_material}
            position={[0.352, 0, 0]}
          />
          <mesh
            geometry={nodes.StringC_String_material_0.geometry}
            material={materials.String_material}
          />
          <mesh
            geometry={nodes.StringR_String_material_0.geometry}
            material={materials.String_material}
            position={[-0.352, 0, 0]}
          />
          <mesh
            geometry={nodes.StringfL_String_material_0.geometry}
            material={materials.String_material}
            position={[0.352, -0.021, 0]}
          />
          <mesh
            geometry={nodes.StringfC_String_material_0.geometry}
            material={materials.String_material}
            position={[0, -0.021, 0]}
          />
          <mesh
            geometry={nodes.StringfR_String_material_0.geometry}
            material={materials.String_material}
            position={[-0.352, -0.021, 0]}
          />
          <mesh
            geometry={nodes.StringbL_String_material_0.geometry}
            material={materials.String_material}
            position={[0.352, 0.021, 0]}
          />
          <mesh
            geometry={nodes.StringbC_String_material_0.geometry}
            material={materials.String_material}
            position={[0, 0.021, 0]}
          />
          <mesh
            geometry={nodes.StringbR_String_material_0.geometry}
            material={materials.String_material}
            position={[-0.352, 0.021, 0]}
          />
          <mesh
            geometry={nodes.Venetian_base_Plastic_venetian_material_0.geometry}
            material={materials.Plastic_venetian_material}
            position={[0, 0, -1.59]}
          />
        </group>
        <mesh
          geometry={nodes.VenetianFrame_Plastic_venetian_material_0.geometry}
          material={materials.Plastic_venetian_material}
        />
        <mesh
          geometry={nodes.Venetian_stick__0.geometry}
          material={materials['Cube.002__0']}
          position={[-0.47, -0.023, -0.03]}
        />
        <mesh
          geometry={nodes.Venetian_updown_String_material_0.geometry}
          material={materials.String_material}
          position={[0.47, -0.023, -0.03]}
        />
      </group>
      <group
        position={[203.649, -58.793, -230.692]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={161.17}
      >
        <mesh
          geometry={nodes.Book0_Book0_material_0.geometry}
          material={materials.Book0_material}
        />
        <mesh
          geometry={nodes.Book0_Book0_side_material_0.geometry}
          material={materials.Book0_side_material}
        />
      </group>
      <group
        position={[210.934, -58.793, -230.692]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={161.17}
      >
        <mesh
          geometry={nodes.Book1_Book1_material_0.geometry}
          material={materials.Book1_material}
        />
        <mesh
          geometry={nodes.Book1_Book1_side_material_0.geometry}
          material={materials.Book1_side_material}
        />
      </group>
      <group
        position={[218.219, -58.793, -230.692]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={161.17}
      >
        <mesh
          geometry={nodes.Book2_Book2_material_0.geometry}
          material={materials.Book2_material}
        />
        <mesh
          geometry={nodes.Book2_Book2_side_material_0.geometry}
          material={materials.Book2_side_material}
        />
      </group>
      <group
        position={[225.504, -58.793, -230.692]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={161.17}
      >
        <mesh
          geometry={nodes.Book3_Book3_material_0.geometry}
          material={materials.Book3_material}
        />
        <mesh
          geometry={nodes.Book3_Book3_side_material_0.geometry}
          material={materials.Book3_side_material}
        />
      </group>
      <group
        position={[232.789, -58.793, -230.692]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={161.17}
      >
        <mesh
          geometry={nodes.Book4_Book4_material_0.geometry}
          material={materials.Book4_material}
        />
        <mesh
          geometry={nodes.Book4_Book4_side_material_0.geometry}
          material={materials.Book4_side_material}
        />
      </group>
      <group
        position={[-143.294, 64.03, -218.151]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={416.126}
      >
        <group position={[0, 0, 0.03]}>
          <mesh
            geometry={nodes.Lampstrings_Lampstrings_material_0.geometry}
            material={materials.Lampstrings_material}
          />
          <mesh
            geometry={nodes.Lamp_B1_Lampstrings_material_0.geometry}
            material={materials.Lampstrings_material}
            position={[0.021, 0, 0.035]}
          />
          <mesh
            geometry={nodes.Lamp_B2_Lampstrings_material_0.geometry}
            material={materials.Lampstrings_material}
            position={[-0.021, 0, 0.035]}
          />
        </group>
        <mesh
          geometry={nodes.Lampholder_Lampholder_material_0.geometry}
          material={materials.Lampholder_material}
        />
        <mesh
          geometry={nodes.Lamp_Bulb001_Lamp_Bulb_0.geometry}
          material={materials.Lamp_Bulb}
          position={[0, 0, 0.091]}
        />
      </group>
      <group
        position={[223.21, -55.841, -155.996]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={194.179}
      >
        <group position={[0, 0, 0.15]}>
          <group position={[0, 0, 0.03]}>
            <mesh
              geometry={nodes.Lampstrings001_Lampstrings001_material_0.geometry}
              material={materials['Lampstrings.001_material']}
            />
            <mesh
              geometry={nodes.Lamp_B1001_Lampstrings001_material_0.geometry}
              material={materials['Lampstrings.001_material']}
              position={[0.021, 0, 0.035]}
            />
            <mesh
              geometry={nodes.Lamp_B2001_Lampstrings001_material_0.geometry}
              material={materials['Lampstrings.001_material']}
              position={[-0.021, 0, 0.035]}
            />
          </group>
          <mesh
            geometry={nodes.Lampholder001_Lampholder001_material_0.geometry}
            material={materials['Lampholder.001_material']}
          />
          <mesh
            geometry={nodes.Lamp_Bulb_Lamp_Bulb001_0.geometry}
            material={materials['Lamp_Bulb.001']}
            position={[0, 0, 0.091]}
          />
        </group>
        <mesh
          geometry={nodes.Lamp_base_Lamp_base_material001_0.geometry}
          material={materials['Lamp_base_material.001']}
        />
        <mesh
          geometry={nodes.Lampshade001_Lampshade001_material_0.geometry}
          material={materials['Lampshade.001_material']}
          position={[0, 0, 0.181]}
        />
      </group>
      <group
        position={[217.731, -61.79, 190.094]}
        rotation={[-1.905, 0, 1.606]}
        scale={194.179}
      >
        <mesh
          geometry={nodes.Book0001_Book0_material001_0.geometry}
          material={materials['Book0_material.001']}
        />
        <mesh
          geometry={nodes.Book0001_Book0_side_material001_0.geometry}
          material={materials['Book0_side_material.001']}
        />
      </group>
      <group
        position={[217.422, -64.665, 181.807]}
        rotation={[-1.905, 0, 1.606]}
        scale={194.179}
      >
        <mesh
          geometry={nodes.Book1001_Book1_material001_0.geometry}
          material={materials['Book1_material.001']}
        />
        <mesh
          geometry={nodes.Book1001_Book1_side_material001_0.geometry}
          material={materials['Book1_side_material.001']}
        />
      </group>
      <group
        position={[217.112, -67.54, 173.52]}
        rotation={[-1.905, 0, 1.606]}
        scale={194.179}
      >
        <mesh
          geometry={nodes.Book2001_Book2_material001_0.geometry}
          material={materials['Book2_material.001']}
        />
        <mesh
          geometry={nodes.Book2001_Book2_side_material001_0.geometry}
          material={materials['Book2_side_material.001']}
        />
      </group>
      <group
        position={[216.803, -70.415, 165.233]}
        rotation={[-1.905, 0, 1.606]}
        scale={194.179}
      >
        <mesh
          geometry={nodes.Book3001_Book3_material001_0.geometry}
          material={materials['Book3_material.001']}
        />
        <mesh
          geometry={nodes.Book3001_Book3_side_material001_0.geometry}
          material={materials['Book3_side_material.001']}
        />
      </group>
      <group
        position={[216.493, -73.29, 156.946]}
        rotation={[-1.905, 0, 1.606]}
        scale={194.179}
      >
        <mesh
          geometry={nodes.Book4001_Book4_material001_0.geometry}
          material={materials['Book4_material.001']}
        />
        <mesh
          geometry={nodes.Book4001_Book4_side_material001_0.geometry}
          material={materials['Book4_side_material.001']}
        />
      </group>
      <group
        position={[212.855, -67.54, 127.845]}
        rotation={[-Math.PI / 2, 0, 1.533]}
        scale={222.432}
      >
        <mesh
          geometry={nodes.Book0002_Book0_material001_0.geometry}
          material={materials['Book0_material.001']}
        />
        <mesh
          geometry={nodes.Book0002_Book0_side_material001_0.geometry}
          material={materials['Book0_side_material.001']}
        />
      </group>
      <group
        position={[213.234, -67.54, 117.798]}
        rotation={[-Math.PI / 2, 0, 1.533]}
        scale={222.432}
      >
        <mesh
          geometry={nodes.Book1002_Book1_material001_0.geometry}
          material={materials['Book1_material.001']}
        />
        <mesh
          geometry={nodes.Book1002_Book1_side_material001_0.geometry}
          material={materials['Book1_side_material.001']}
        />
      </group>
      <group
        position={[213.614, -67.54, 107.752]}
        rotation={[-Math.PI / 2, 0, 1.533]}
        scale={222.432}
      >
        <mesh
          geometry={nodes.Book2002_Book2_material001_0.geometry}
          material={materials['Book2_material.001']}
        />
        <mesh
          geometry={nodes.Book2002_Book2_side_material001_0.geometry}
          material={materials['Book2_side_material.001']}
        />
      </group>
      <group
        position={[213.993, -67.54, 97.705]}
        rotation={[-Math.PI / 2, 0, 1.533]}
        scale={222.432}
      >
        <mesh
          geometry={nodes.Book3002_Book3_material001_0.geometry}
          material={materials['Book3_material.001']}
        />
        <mesh
          geometry={nodes.Book3002_Book3_side_material001_0.geometry}
          material={materials['Book3_side_material.001']}
        />
      </group>
      <group
        position={[214.373, -67.54, 87.658]}
        rotation={[-Math.PI / 2, 0, 1.533]}
        scale={222.432}
      >
        <mesh
          geometry={nodes.Book4002_Book4_material001_0.geometry}
          material={materials['Book4_material.001']}
        />
        <mesh
          geometry={nodes.Book4002_Book4_side_material001_0.geometry}
          material={materials['Book4_side_material.001']}
        />
      </group>
      <mesh
        geometry={nodes.Table_Table_0.geometry}
        material={materials.Table}
        position={[169.704, -114.937, -229.054]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={8.501}
      />
      <mesh
        geometry={nodes.Cube001_Table_0.geometry}
        material={materials.Table}
        position={[171.999, 46.083, -202.247]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={29.376}
      />
      <mesh
        geometry={nodes.Cube002__0.geometry}
        material={materials['Cube.002__0']}
        position={[-118.973, -68.756, -188.596]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={23.36}
      />
      <mesh
        geometry={nodes.Cube003__0.geometry}
        material={materials['Cube.002__0']}
        position={[-58.308, -55.237, -188.596]}
        rotation={[-Math.PI / 2, 0.246, 0.557]}
        scale={23.36}
      />
      <mesh
        geometry={nodes.Shelves1_Shelves_material_0.geometry}
        material={materials.Shelves_material}
        position={[234.614, -101.704, 125.247]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={139.794}
      />
    </group>
  )
}

useGLTF.preload('/models/myRoom_model4/scene.gltf')
