import Layout from '../../components/Layout.tsx'
import { Container, MiniObjetModel, UpperContainer } from './ObjetStyles.tsx'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles.tsx'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Group } from 'three'
import { objetList } from '../../global/objetModels.tsx'
import SelectObjetType from '../../components/objet/SelectObjetType.tsx'
import ObjetInfoForm from '../../components/objet/ObjetInputForm.tsx'
import { ObjetInfoFormProps } from '../../global/objetProps.tsx'
import { useLocation, useParams } from 'react-router-dom'
import { APIs } from '../../static.ts'

export default function ObjetForm() {
  const path = useLocation().pathname
  const step = path?.includes('new') ? 'create' : 'update'

  const { oid } = useParams()
  const objetId = step === 'update' ? oid : 0

  const [isSelected, setIsSelected] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  const [objetInfo, setObjetInfo] = useState<ObjetInfoFormProps['objetInfo']>()

  useEffect(() => {
    if (step === 'update') {
      fetchObjetData()
    }
  }, [])

  useEffect(() => {
    if (selectedType !== '') {
      setIsSelected(true)
    }
  }, [selectedType])

  const fetchObjetData = async () => {
    try {
      const response = await fetch(`${APIs.objet}/${objetId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setObjetInfo(data.data)
        setSelectedType(data.data.objet_type)
      }
    } catch (error) {
      console.error('오브제 정보 가져오기 실패: ', error)
    }
  }

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
                <ambientLight intensity={1.7} />
                <RenderObjet type={selectedType} />
              </Canvas>
            )}
          </MiniObjetModel>
        </UpperContainer>

        <Container>
          {step === 'create' ? (
            isSelected ? (
              <ObjetInfoForm path='create' type={selectedType} />
            ) : (
              <SelectObjetType setSelectedType={setSelectedType} />
            )
          ) : (
            <ObjetInfoForm
              path='update'
              type={selectedType}
              objetInfo={objetInfo}
            />
          )}
        </Container>
      </GloablContainer16>
    </Layout>
  )
}

function RenderObjet({ type }: ObjetInfoFormProps) {
  const ref = useRef<Group>(null)
  const model = objetList.find((objet) => objet.type === type)?.model

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  const scale: [number, number, number] =
    type === 'O0001'
      ? [1, 1, 1]
      : type === 'O0002'
        ? [3.5, 3.5, 3.5]
        : [48, 48, 48]

  return (
    <group ref={ref} rotation-y={-Math.PI / 2} scale={scale}>
      {model}
    </group>
  )
}
