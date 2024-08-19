import Layout from '../../../components/Layout.tsx'
import { Container, MiniObjetModel, UpperContainer } from '../ObjetStyles.tsx'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../../global/globalStyles.tsx'
import { useEffect, useRef, useState } from 'react'
import SelectObjetType from './SelectObjetType'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Group } from 'three'
import { ObjetModel1 } from '../../../assets/models/ObjetModel1.tsx'
import InputObjetInfo from './InputObjetInfo.tsx'

export default function NewObjet() {
  const [isSelected, setIsSelected] = useState(true)

  useEffect(() => {
    setIsSelected(true)
  })

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
                <RenderObjet />
              </Canvas>
            )}
          </MiniObjetModel>
        </UpperContainer>

        <Container>
          {isSelected ? InputObjetInfo() : SelectObjetType()}
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

function RenderObjet() {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={ref} rotation-y={-Math.PI / 2}>
      <ObjetModel1 scale={[3, 3, 3]} />
    </group>
  )
}
