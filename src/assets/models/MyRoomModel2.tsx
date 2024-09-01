import React from 'react'
import { useGLTF } from '@react-three/drei'

interface MyRoomModel2Props extends React.ComponentProps<'group'> {}

export default function MyRoomModel2(props: MyRoomModel2Props) {
  const { nodes, materials } = useGLTF(
    '/models/myRoom_model2/scene.gltf'
  ) as any

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={139.951}>
        <group position={[-0.2, 0, 7.5]} scale={0.5}>
          <mesh geometry={nodes.Lamp_0.geometry} material={materials.Lamp} />
          <mesh geometry={nodes.Lamp_1.geometry} material={materials.Black} />
        </group>
        <mesh
          geometry={nodes.HighFloor_0.geometry}
          material={materials.Wood}
          position={[-2, 0, 1]}
        />
        <mesh
          geometry={nodes.Cushion_0.geometry}
          material={materials.CushionBrown}
          position={[-2, 0, 1]}
          scale={[0.4, 0.4, 0.5]}
        />
        <group position={[-3.5, -1.5, 2]} scale={[0.34, 0.34, 0.28]}>
          <mesh
            geometry={nodes.Bowl_03_0.geometry}
            material={materials.CupInnerRed}
          />
          <mesh
            geometry={nodes.Bowl_03_1.geometry}
            material={materials.CupOuterPurple}
          />
        </group>
        <group position={[-3.5, -2, 2]} scale={[0.4, 0.4, 0.42]}>
          <mesh
            geometry={nodes.Bowl_02_0.geometry}
            material={materials.CupInnerRed}
          />
          <mesh
            geometry={nodes.Bowl_02_1.geometry}
            material={materials.CupOuterBeige}
          />
          <mesh
            geometry={nodes.Bowl_02_2.geometry}
            material={materials.CupOuterPink}
          />
        </group>
        <group position={[-3.5, -2.5, 2]} scale={0.3}>
          <mesh
            geometry={nodes.Bowl_01_0.geometry}
            material={materials.CupInnerPurple}
          />
          <mesh
            geometry={nodes.Bowl_01_1.geometry}
            material={materials.CupOuterGold}
          />
        </group>
        <mesh
          geometry={nodes.ShelfWall_0.geometry}
          material={materials.TatamiGreen}
          position={[-3, 1, 0]}
        />
        <mesh
          geometry={nodes.ShelfVase_0.geometry}
          material={materials.TeaPotWhite}
          position={[-3.5, -3.5, 2]}
          scale={0.3}
        />
        <group position={[-3, -3, 4.5]}>
          <mesh
            geometry={nodes.TopShelf_0.geometry}
            material={materials.TatamiGreen}
          />
          <mesh
            geometry={nodes.TopShelf_1.geometry}
            material={materials.Wood}
          />
        </group>
        <group position={[-3, -3, 1]}>
          <mesh
            geometry={nodes.BottomShelf_0.geometry}
            material={materials.TatamiGreen}
          />
          <mesh
            geometry={nodes.BottomShelf_1.geometry}
            material={materials.ShelfTopDark}
          />
        </group>
        <group position={[2, -1, 0]} scale={0.75}>
          <mesh
            geometry={nodes.ChairFar_0.geometry}
            material={materials.Wood}
          />
          <mesh
            geometry={nodes.ChairFar_1.geometry}
            material={materials.Black}
          />
        </group>
        <group position={[2, 1, 0]} scale={0.75}>
          <mesh
            geometry={nodes.ChairFar_0_1.geometry}
            material={materials.Wood}
          />
          <mesh
            geometry={nodes.ChairFar_1_1.geometry}
            material={materials.Black}
          />
        </group>
        <mesh
          geometry={nodes.TableVase_0.geometry}
          material={materials.TableVaseGray}
          position={[-1.447, -0.034, 2]}
          scale={0.48}
        />
        <group position={[0.087, 0, 2.349]} scale={0.5}>
          <mesh
            geometry={nodes.TeaPotHandle_0.geometry}
            material={materials.Black}
            position={[-0.024, 1.424, 0.852]}
            rotation={[-Math.PI / 2, -Math.PI / 8, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.TeaPotBody_0.geometry}
            material={materials.Black}
            position={[-0.024, 1.424, 0]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.5, 0.5, 0.38]}
          />
        </group>
        <mesh
          geometry={nodes.TeaBase_0.geometry}
          material={materials.Black}
          position={[0.062, 0.712, 2]}
          scale={0.5}
        />
        <mesh
          geometry={nodes.TeaBaseFeet_0.geometry}
          material={materials.Black}
          position={[0.062, 0.712, 2.3]}
          rotation={[0, 0, 0.524]}
          scale={0.04}
        />
        <group
          position={[-1.155, -1.084, 2.045]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.3, 0.3, 0.38]}
        >
          <mesh
            geometry={nodes.TeaPotBody001_0.geometry}
            material={materials.TeaPotWhite}
            position={[0.185, -1.262, 0]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.5, 0.5, 0.38]}
          />
          <mesh
            geometry={nodes.TeaPotHandle001_0.geometry}
            material={materials.TeaPotWhite}
            position={[0.185, -1.262, 0.852]}
            rotation={[-Math.PI / 2, -Math.PI / 8, Math.PI / 2]}
          />
        </group>
        <mesh
          geometry={nodes.Plate_0.geometry}
          material={materials.DarkerWood}
          position={[-0.721, -1.044, 2]}
          scale={0.45}
        />
        <mesh
          geometry={nodes.TableStand_0.geometry}
          material={materials.WoodDark}
          position={[0, 0, 1]}
          scale={[0.5, 0.5, 1]}
        />
        <mesh
          geometry={nodes.TableTop_0.geometry}
          material={materials.WoodDark}
          position={[0, 0, 2]}
          scale={[1.8, 1.8, 0.12]}
        />
        <group position={[1.9, -4, 1]} scale={[0.45, 2, 0.571]}>
          <mesh geometry={nodes.Windows_0.geometry} material={materials.Wood} />
          <mesh
            geometry={nodes.Windows_1.geometry}
            material={materials.WindowWhite}
          />
        </group>
        <group position={[-2, -3, 7]}>
          <group position={[2, -1, -3]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
            <mesh
              geometry={nodes.WallLeft_0.geometry}
              material={materials.TatamiGreen}
            />
            <mesh
              geometry={nodes.WallLeft_1.geometry}
              material={materials.Wood}
            />
          </group>
          <mesh geometry={nodes.LowCeil_0.geometry} material={materials.Wood} />
        </group>
        <group position={[-4, 0, 4]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
          <mesh
            geometry={nodes.WallRight_0.geometry}
            material={materials.TatamiGreen}
          />
          <mesh
            geometry={nodes.WallRight_1.geometry}
            material={materials.WallLight}
          />
        </group>
        <mesh
          geometry={nodes.Floor_0.geometry}
          material={materials.TatamiGreen}
        />
        <mesh geometry={nodes.Floor_1.geometry} material={materials.Wood} />
        <mesh
          geometry={nodes.Floor_2.geometry}
          material={materials.FloorWhite}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/myRoom_model2/scene.gltf')
