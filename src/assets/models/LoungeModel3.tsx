import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Vector3, Euler } from 'three'
import React, { useMemo } from 'react'

interface LoungeModel3Props extends GroupProps {}

const MemoizedGroup = React.memo(
  ({ position, rotation, scale, meshes }: any) => (
    <group position={position} rotation={rotation} scale={scale}>
      {meshes.map((mesh: any, index: number) => (
        <mesh key={index} geometry={mesh.geometry} material={mesh.material} />
      ))}
    </group>
  )
)

export default function LoungeModel3(props: LoungeModel3Props) {
  const { nodes, materials } = useGLTF(
    '/models/lounge_model3/scene.gltf'
  ) as any

  const groupData = useMemo(
    () => [
      {
        position: [0.239, 0.3, -0.085],
        rotation: new Euler(0, -Math.PI / 4, 0),
        scale: undefined,
        meshes: [
          {
            geometry: nodes.Object_4.geometry,
            material: materials['Material.003'],
          },
          {
            geometry: nodes.Object_5.geometry,
            material: materials['Material.014'],
          },
        ],
      },
      {
        position: [0.206, 1.214, 0.431],
        rotation: new Euler(0.635, -0.688, 0.093),
        scale: new Vector3(0.382, 0.382, 0.076),
        meshes: [
          {
            geometry: nodes.Object_11.geometry,
            material: materials['Material.005'],
          },
          {
            geometry: nodes.Object_12.geometry,
            material: materials['Material.013'],
          },
        ],
      },
      {
        position: [0.207, 0.439, 0.988],
        rotation: new Euler(1.475, 0.081, 0),
        scale: new Vector3(0.062, 0.062, 0.025),
        meshes: [
          {
            geometry: nodes.Object_78.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_79.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [0.403, 0.539, 0.957],
        rotation: new Euler(1.393, 0.087, -0.155),
        scale: new Vector3(0.095, 0.095, 0.038),
        meshes: [
          {
            geometry: nodes.Object_85.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_86.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [0.513, -0.245, 0.865],
        rotation: new Euler(1.997, 0.002, -0.293),
        scale: new Vector3(0.04, 0.04, 0.016),
        meshes: [
          {
            geometry: nodes.Object_88.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_89.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [1.262, 0.258, 0.272],
        rotation: new Euler(1.659, -0.054, -1.255),
        scale: new Vector3(0.062, 0.062, 0.025),
        meshes: [
          {
            geometry: nodes.Object_91.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_92.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [1.252, 0.639, -0.276],
        rotation: new Euler(1.633, 0.347, -1.754),
        scale: new Vector3(0.069, 0.069, 0.027),
        meshes: [
          {
            geometry: nodes.Object_94.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_95.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [0.078, 0.624, -1.11],
        rotation: new Euler(1.971, 0.56, 2.964),
        scale: new Vector3(0.069, 0.069, 0.027),
        meshes: [
          {
            geometry: nodes.Object_97.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_98.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [-0.219, 0.463, -1.054],
        rotation: new Euler(2.061, 0.531, 2.6),
        scale: new Vector3(0.069, 0.069, 0.027),
        meshes: [
          {
            geometry: nodes.Object_100.geometry,
            material: materials['Material.011'],
          },
        ],
      },
      {
        position: [-0.761, 0.728, -0.09],
        rotation: new Euler(2.653, -0.21, 1.929),
        scale: new Vector3(0.069, 0.069, 0.027),
        meshes: [
          {
            geometry: nodes.Object_103.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_104.geometry,
            material: materials['Material.012'],
          },
        ],
      },
      {
        position: [-0.381, -0.529, 0.363],
        rotation: new Euler(2.455, 0.349, 0.604),
        scale: new Vector3(0.095, 0.095, 0.038),
        meshes: [
          {
            geometry: nodes.Object_106.geometry,
            material: materials['Material.011'],
          },
          {
            geometry: nodes.Object_107.geometry,
            material: materials['Material.012'],
          },
        ],
      },
    ],
    [nodes, materials]
  )

  const meshData = useMemo(
    () => [
      {
        geometry: nodes.Object_7.geometry,
        material: materials['Material.001'],
        position: new Vector3(0.239, 0.3, -0.085),
        rotation: new Euler(0, -Math.PI / 4, 0),
        scale: new Vector3(0.926, 0.926, 0.926),
      },
      {
        geometry: nodes.Object_9.geometry,
        material: materials['Material.006'],
        position: new Vector3(0.756, 1.219, -0.537),
        rotation: new Euler(-0.886, -0.683, -0.692),
        scale: new Vector3(0.3, 0.1, 0.1),
      },
      {
        geometry: nodes.Object_83.geometry,
        material: materials['Material.006'],
        position: new Vector3(1.029, -0.118, 0.545),
        rotation: new Euler(0.411, -0.516, -1.775),
        scale: new Vector3(0.3, 0.1, 0.1),
      },
    ],
    [nodes, materials]
  )

  return (
    <group {...props} dispose={null}>
      {groupData.map((group, index) => (
        <MemoizedGroup key={index} {...group} />
      ))}
      {meshData.map((mesh, index) => (
        <mesh
          key={index}
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

useGLTF.preload('/models/lounge_model3/scene.gltf')
