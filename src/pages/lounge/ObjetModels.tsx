import { Text } from '@react-three/drei'
import { useMemo, useRef, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { ObjetModelList } from '../../components/models/LazyModelList'
import type { RandomModelsProps } from '../../types/ModelType'

export default function ObjetModels({
  objets,
  onModelClick,
}: RandomModelsProps) {
  const groupRef = useRef<THREE.Group>(null)

  const modelData = useMemo(() => {
    if (!objets || objets.length === 0) return []

    const getRandomPosition = (length: number): [number, number, number] => {
      const ranges = [
        { range: 15, offset: -1 },
        { range: 30, offset: -5 },
        { range: 50, offset: -10 },
        { range: 75, offset: -15 },
        { range: 100, offset: -20 },
      ]
      const { range, offset } =
        ranges[Math.min(Math.floor(length / 5), ranges.length - 1)]
      return [
        Math.random() * range + offset,
        Math.random() * range + offset,
        Math.random() * range + offset,
      ]
    }

    return objets.map((objet) => {
      const mesh = new THREE.Group()

      const scaleMap: { [key: string]: number } = {
        O0001: 2,
        O0002: 2,
        O0003: 2,
      }

      mesh.scale.setScalar(scaleMap[objet.objet_type] || 1)

      mesh.position.set(...getRandomPosition(objets.length))

      const ModelComponent = ObjetModelList[objet.objet_type]

      mesh.userData = {
        id: objet.objet_id,
        lid: objet.lounge_id,
        onClick: () => onModelClick(mesh),
      }

      const nameText = (
        <Text
          position={[0, -1, 0]}
          fontSize={0.5}
          fontWeight={600}
          color='#FFFFFF'
        >
          {objet.name}
        </Text>
      )

      return { ModelComponent, mesh, nameText }
    })
  }, [objets, onModelClick])

  useEffect(() => {
    const group = groupRef.current
    if (group) {
      modelData.forEach(({ mesh }) => group.add(mesh))
    }
  }, [modelData])

  return (
    <group ref={groupRef}>
      {modelData.map(({ ModelComponent, mesh, nameText }, index) => (
        <mesh
          key={index}
          position={mesh.position}
          scale={mesh.scale}
          onClick={mesh.userData.onClick}
        >
          <Suspense fallback={null}>
            <ModelComponent />
          </Suspense>
          {nameText}
        </mesh>
      ))}
    </group>
  )
}
