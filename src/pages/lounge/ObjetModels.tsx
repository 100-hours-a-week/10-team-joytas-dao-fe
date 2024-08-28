import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { ObjetModel1 } from '../../assets/models/ObjetModel1'
import { ObjetModel2 } from '../../assets/models/ObjetModel2'
import { ObjetModel3 } from '../../assets/models/ObjetModel3'
import { useRef, useMemo, useEffect } from 'react'
import type { RandomModelsProps } from '../../types/ModelType'

export default function ObjetModels({
  objets,
  onModelClick,
}: RandomModelsProps) {
  const groupRef = useRef<THREE.Group>(null)

  const models = useMemo(() => {
    if (!objets || objets.length === 0) return []

    const availableModels = [ObjetModel1, ObjetModel2, ObjetModel3]
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
        O0002: 0.5,
        O0003: 0.258,
      }

      mesh.scale.setScalar(scaleMap[objet.type] || 1)

      mesh.position.set(...getRandomPosition(objets.length))
      const ModelComponent =
        availableModels[
          objet.type === 'O0001' ? 0 : objet.type === 'O0002' ? 1 : 2
        ]

      mesh.position.set(...getRandomPosition(objets.length))
      mesh.userData = { id: objet.objet_id, onClick: () => onModelClick(mesh) }

      const nameText = (
        <Text
          position={[0, -1, 0]} // 바운딩 박스를 기준으로 텍스트 위치 조정
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
      models.forEach(({ mesh }) => group.add(mesh))
    }
  }, [models])

  return (
    <group ref={groupRef}>
      {models.map(({ ModelComponent, mesh, nameText }, index) => (
        <mesh
          key={index}
          position={mesh.position}
          rotation={mesh.rotation}
          scale={mesh.scale}
          onClick={mesh.userData.onClick}
        >
          <ModelComponent />
          {nameText}
        </mesh>
      ))}
    </group>
  )
}
