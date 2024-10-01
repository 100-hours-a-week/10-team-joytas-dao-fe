import Layout from '@components/Layout.tsx'
import { Container, MiniObjetModel, UpperContainer } from './ObjetStyles.tsx'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '@global/globalStyles.tsx'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Group } from 'three'
import { objetList } from '@global/objetModels.tsx'
import SelectObjetType from '@components/objet/SelectObjetType.tsx'
import ObjetInfoForm from '@components/objet/ObjetInputForm.tsx'
import { ObjetInfoFormProps } from '@global/objetProps.tsx'
import { useLocation, useParams } from 'react-router-dom'
import { APIs } from '@/static'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function ObjetForm() {
  const path = useLocation().pathname
  const step = path?.includes('new') ? 'create' : 'update'

  const { oid } = useParams()
  const objetId = step === 'update' ? oid : 0

  const [selectedType, setSelectedType] = useState('')

  const isSelected = selectedType !== ''

  const { data: objetInfo, isLoading: isObjetLoading } = useQuery(
    ['objetInfo', objetId],
    async () => {
      if (step === 'update') {
        const { data: objetData } = await axios.get(
          `${APIs.objet}/${objetId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            withCredentials: true,
          }
        )

        const { data: sharersData } = await axios.get(
          `${APIs.objet}/${objetId}/sharers`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
            withCredentials: true,
          }
        )

        return {
          lounge_id: objetData.data.lounge_id,
          name: objetData.data.name,
          description: objetData.data.description,
          sharers: sharersData.data.sharers,
          objet_image: objetData.data.objet_image,
          objet_type: objetData.data.objet_type,
        }
      }
    },
    {
      retry: 1,
      enabled: step === 'update',
      onSuccess: (data) => {
        setSelectedType(data?.objet_type || '')
      },
    }
  )

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
            !isObjetLoading && (
              <ObjetInfoForm
                path='update'
                type={selectedType}
                objetInfo={objetInfo}
              />
            )
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
