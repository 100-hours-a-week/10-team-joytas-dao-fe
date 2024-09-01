import { useGLTF } from '@react-three/drei'
import React, { useMemo } from 'react'

interface LoungeModel1Props {
  [key: string]: any
}

const MemoizedMesh = React.memo(({ geometry, material }: any) => (
  <mesh geometry={geometry} material={material} />
))

export default function LoungeModel1(props: LoungeModel1Props) {
  const { nodes, materials } = useGLTF(
    '/models/lounge_model1/scene.gltf'
  ) as any

  const meshes = useMemo(
    () => [
      {
        geometry:
          nodes.Sail_Front_004_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry:
          nodes.Sail_Rear_004_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry: nodes.Mast_004_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Boat_004_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Boat_003_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Mast_003_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry:
          nodes.Sail_Rear_003_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry:
          nodes.Sail_Front_003_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry:
          nodes.Sail_Front_002_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry:
          nodes.Sail_Rear_002_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry: nodes.Mast_002_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Boat_002_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Boat_001_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Mast_001_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry:
          nodes.Sail_Rear_001_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry:
          nodes.Sail_Front_001_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry: nodes.Sail_Front_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry: nodes.Sail_Rear_Sail_Boat_Sail_0_Sail_Boat_Sail_0.geometry,
        material: materials.Sail_Boat_Sail,
      },
      {
        geometry: nodes.Mast_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry: nodes.Boat_Sail_Boat_Wood_0_Sail_Boat_Wood_0.geometry,
        material: materials.Sail_Boat_Wood,
      },
      {
        geometry:
          nodes.Snow_Chimney_005_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Chimney_005_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_004_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_004_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Snow_Base_005_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Base_005_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Snow_Base_005_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Snow_Base_004_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Base_004_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Snow_Base_004_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Snow_Roof_003_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_003_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry:
          nodes.Snow_Chimney_004_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Chimney_004_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry:
          nodes.Snow_Chimney_003_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Chimney_003_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_002_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_002_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Snow_Base_003_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Base_003_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Snow_Base_003_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Snow_Base_002_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Base_002_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Snow_Base_002_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Snow_Roof_001_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_001_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry:
          nodes.Snow_Chimney_002_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Chimney_002_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Base_001_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Snow_Base_001_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Snow_Roof_000_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_000_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry:
          nodes.Snow_Chimney_001_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Chimney_001_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry:
          nodes.Snow_Chimney_000_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Chimney_000_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_008_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Roof_008_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Snow_Base_000_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Snow_Base_000_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Snow_Base_000_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Snow_Pine_024_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_024_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_024_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_023_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_023_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_023_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_022_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_022_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_022_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_021_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_021_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_021_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_020_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_020_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_020_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_019_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_019_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_019_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_018_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_018_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_018_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_017_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_017_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_017_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_016_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_016_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_016_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_015_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_015_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_015_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_014_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_014_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_014_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_013_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_013_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_013_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_012_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_012_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_012_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_011_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_011_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_011_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_010_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_010_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_010_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_009_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_009_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_009_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_008_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_008_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_008_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_007_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_007_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_007_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_006_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_006_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_006_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_005_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_005_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_005_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_004_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_004_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_004_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_003_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_003_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_003_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_002_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_002_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_002_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_001_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_001_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_001_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Snow_Pine_000_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Snow_Pine_000_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Snow_Pine_000_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Cone_246_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_246_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cylinder_080_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cylinder_080_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_240_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_240_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_239_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_239_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_236_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_236_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_233_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_233_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_228_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_228_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_227_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_227_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_222_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_222_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_221_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_221_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_216_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_216_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_215_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_215_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_210_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_210_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_209_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_209_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_204_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_204_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_203_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_203_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_198_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_198_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_197_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_197_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_192_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_192_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_191_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_191_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_186_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_186_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_185_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_185_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_180_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_180_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_179_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_179_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_174_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_174_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_173_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_173_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_168_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_168_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_167_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_167_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_162_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_162_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_161_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_161_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_156_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_156_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_155_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_155_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_150_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_150_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_149_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_149_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_144_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_144_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_143_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_143_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_140_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_140_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_135_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_135_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_132_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_132_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_131_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_131_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_126_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_126_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_125_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_125_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_120_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_120_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_119_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_119_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_114_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_114_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_113_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_113_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_108_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_108_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_107_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_107_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_102_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_102_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_101_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_101_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_098_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_098_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_093_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_093_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_092_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_092_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_087_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_087_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_084_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_084_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_083_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_083_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_078_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_078_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_077_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_077_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_072_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_072_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_071_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_071_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_066_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_066_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_065_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_065_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_060_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_060_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_059_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_059_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_054_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_054_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_053_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_053_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_032_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_032_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_027_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_027_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_048_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_048_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_047_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_047_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_042_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_042_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_041_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_041_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_036_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_036_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_035_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_035_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cylinder_007_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cylinder_007_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_021_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_021_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_018_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_018_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cylinder_004_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cylinder_004_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_012_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_012_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_011_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_011_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_006_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_006_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Cone_005_Tree_Leaves_0_Tree_Leaves_0.geometry,
        material: materials.Tree_Leaves,
      },
      {
        geometry: nodes.Cone_005_Tree_Bark_0_Tree_Bark_0.geometry,
        material: materials.Tree_Bark,
      },
      {
        geometry: nodes.Base_019_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_019_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_018_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_018_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_017_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_017_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_016_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_016_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_015_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_015_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_014_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_014_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_013_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_013_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_012_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_012_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_011_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_011_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_010_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_010_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_009_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_009_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_008_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_008_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Chimney_007_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Roof_007_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Base_007_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_007_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_006_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_006_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Roof_006_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Chimney_006_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Chimney_005_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Roof_005_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Base_005_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_005_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Chimney_004_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Roof_004_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Base_004_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_004_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_003_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_003_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Roof_003_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Chimney_003_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Chimney_002_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Roof_002_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Base_002_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_002_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Base_001_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_001_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Roof_001_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Chimney_001_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Chimney_House_Chimney_0_House_Chimney_0.geometry,
        material: materials.House_Chimney,
      },
      {
        geometry: nodes.Roof_House_Roof_0_House_Roof_0.geometry,
        material: materials.House_Roof,
      },
      {
        geometry: nodes.Base_House_0_House_0.geometry,
        material: materials.House,
      },
      {
        geometry: nodes.Base_House_Door_0_House_Door_0.geometry,
        material: materials.House_Door,
      },
      {
        geometry: nodes.Building_010_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_010_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_009_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_009_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_008_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_008_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_007_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_007_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_006_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_006_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_005_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_005_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_004_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_004_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_003_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_003_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_002_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_002_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_001_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry:
          nodes.Building_001_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Building_Skyscraper_0_Skyscraper_0.geometry,
        material: materials.Skyscraper,
      },
      {
        geometry: nodes.Building_SkyscraperWindow_0_SkyscraperWindow_0.geometry,
        material: materials.SkyscraperWindow,
      },
      {
        geometry: nodes.Cube_002_Bridge_0_Bridge_0.geometry,
        material: materials.Bridge,
      },
      {
        geometry: nodes.Cube_002_Rope_0_Rope_0.geometry,
        material: materials.Rope,
      },
      {
        geometry: nodes.Cube_001_Bridge_0_Bridge_0.geometry,
        material: materials.Bridge,
      },
      {
        geometry: nodes.Cube_001_Rope_0_Rope_0.geometry,
        material: materials.Rope,
      },
      {
        geometry: nodes.Cube_Bridge_0_Bridge_0.geometry,
        material: materials.Bridge,
      },
      {
        geometry: nodes.Cube_Rope_0_Rope_0.geometry,
        material: materials.Rope,
      },
      {
        geometry: nodes.Cone_002_Pyramid_0_Pyramid_0.geometry,
        material: materials.Pyramid,
      },
      {
        geometry: nodes.Cone_001_Pyramid_0_Pyramid_0.geometry,
        material: materials.Pyramid,
      },
      {
        geometry: nodes.Cone_003_Pyramid_0_Pyramid_0.geometry,
        material: materials.Pyramid,
      },
      {
        geometry: nodes.Planet_Snow_0_Snow_0.geometry,
        material: materials.Snow,
      },
      {
        geometry: nodes.Planet_Grass_0_Grass_0.geometry,
        material: materials.Grass,
      },
      {
        geometry: nodes.Planet_Water_0_Water_0.geometry,
        material: materials.Water,
      },
      {
        geometry: nodes.Planet_Sand_0_Sand_0.geometry,
        material: materials.Sand,
      },
      {
        geometry: nodes.Planet_MountainMid_0_MountainMid_0.geometry,
        material: materials.MountainMid,
      },
      {
        geometry: nodes.Planet_MountainNorth_0_MountainNorth_0.geometry,
        material: materials.MountainNorth,
      },
      {
        geometry: nodes.Planet_MountainMidTop_0_MountainMidTop_0.geometry,
        material: materials.MountainMidTop,
      },
      {
        geometry: nodes.Planet_Asphalt_0_Asphalt_0.geometry,
        material: materials.Asphalt,
      },
      {
        geometry: nodes.Material_Cube_Asphalt_0_Asphalt_0.geometry,
        material: materials.Asphalt,
      },
    ],
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        {meshes.map((mesh, index) => (
          <MemoizedMesh
            key={index}
            geometry={mesh.geometry}
            material={mesh.material}
          />
        ))}
      </group>
    </group>
  )
}

useGLTF.preload('/models/lounge_model1/scene.gltf')
