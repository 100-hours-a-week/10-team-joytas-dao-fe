import Layout from '../../../components/Layout.tsx'
import { Container, MiniObjetModel, UpperContainer } from '../ObjetStyles.tsx'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../../global/globalStyles.tsx'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Group } from 'three'
import { objetList } from '../../../global/objetModels.tsx'
import InputObjetInfo from './InputObjetInfo.tsx'
import SelectObjetType from './SelectObjetType.tsx'

interface ObjetProps {
  type: string
}

export default function NewObjet() {
  const [isSelected, setIsSelected] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  useEffect(() => {
    if (selectedType !== '') {
      setIsSelected(true)
    }
  }, [selectedType])

  return (
    <Layout>
      <GloablContainer16>
        <UpperContainer>
          <div>
            <GlobalTitle>어떤 오브제인가요?</GlobalTitle>
            <GlobalSubTitle>
              공유하고 싶은 추억을 오브제로 만들어보세요!
            </GlobalSubTitle>
          </div>
          <MiniObjetModel>
            {isSelected && (
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                <OrbitControls enableZoom={false} enableRotate={false} />
                <ambientLight intensity={1} />
                <RenderObjet type={selectedType} />
              </Canvas>
            )}
          </MiniObjetModel>
        </UpperContainer>

        <Container>
          {isSelected ? (
            <InputObjetInfo selectedType={selectedType} />
          ) : (
            <SelectObjetType setSelectedType={setSelectedType} />
          )}
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

function RenderObjet({ type }: ObjetProps) {
  const ref = useRef<Group>(null)
  const model = objetList.find((objet) => objet.type === type)?.model

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} rotation-y={-Math.PI / 2}>
      {model}
    </group>
  )
}
