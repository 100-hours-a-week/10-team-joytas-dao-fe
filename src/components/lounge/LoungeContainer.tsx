import { Suspense, useRef, useEffect, useState, lazy } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { Vector3, Group } from 'three'
import { useNavigate } from 'react-router-dom'
import { Deem } from '../../pages/lounge/LoungeStyles'
import { APIs, URL } from '../../static'
import LoadingLottie from '../lotties/LoadingLottie'

const LoungeModel1 = lazy(() => import('../../assets/models/LoungeModel1'))
const LoungeModel2 = lazy(() => import('../../assets/models/LoungeModel2'))
const LoungeModel3 = lazy(() => import('../../assets/models/LoungeModel3'))
const LoungeModel4 = lazy(() => import('../../assets/models/LoungeModel4'))

interface ModelProps {
  position: Vector3
  label: string
  type: string
  scale?: [number, number, number]
  onClick?: () => void
}

interface LoungeProps {
  lounge_id: number
  name: string
  type: string
}

export default function LoungeContainer() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [loungeList, setLoungeList] = useState<LoungeProps[]>([])

  const getLoungeList = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(APIs.loungeList, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.ok) {
        const responseData = await response.json()
        return responseData.data
      } else {
        throw new Error('Failed to fetch lounge list')
      }
    } catch (error) {
      console.error('Failed to fetch lounge list', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const fetchAndSetLoungeList = async () => {
      const loungeList = await getLoungeList()
      if (loungeList) {
        setLoungeList(loungeList)
      }
    }

    fetchAndSetLoungeList()
  }, [])

  if (isLoading) {
    return <LoadingLottie />
  }

  if (loungeList.length === 0) {
    return (
      <Deem>
        라운지가 없습니다! <br /> 새 라운지를 만들어주세요!
        <Canvas
          style={{ width: '324px', height: '600px' }}
          camera={{ position: [0, 0, 8], fov: 50 }}
        >
          <ambientLight intensity={1} />
          <group position={[0, 0, 0]}>
            <Suspense fallback={<LoadingLottie />}>
              <Model
                type='L0004'
                position={new Vector3(0, 0, 0)}
                label='새 라운지 만들기'
                scale={[2, 2, 2]}
                onClick={() => navigate(URL.newLounge)}
              />
            </Suspense>
          </group>
          <Text position={[0, -3, 0]} fontSize={0.7} color='#FFFFFF'>
            새 라운지 만들기
          </Text>
        </Canvas>
      </Deem>
    )
  }

  const modelLocationWithNew = [
    new Vector3(0.9, 1.4, 0),
    new Vector3(-0.9, -1, 0),
    new Vector3(0.9, -1, 0),
  ]

  const modelLocation = [
    new Vector3(-0.9, 1.4, 0),
    new Vector3(0.9, 1.4, 0),
    new Vector3(-0.9, -1, 0),
    new Vector3(0.9, -1, 0),
  ]

  return (
    <Suspense fallback={<LoadingLottie />}>
      <Canvas
        style={{ width: '324px', height: '600px', cursor: 'pointer' }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <ambientLight intensity={1} />
        <group position={[0, 0, 0]}>
          {loungeList.length >= 4 ? null : (
            <Model
              type='L0004'
              position={new Vector3(-0.9, 1.4, 0)}
              label='새 라운지 만들기'
              scale={[0.6, 0.6, 0.6]}
              onClick={() => navigate(URL.newLounge)}
            />
          )}
          {loungeList.map((lounge, index) => (
            <Model
              key={index}
              type={lounge.type}
              position={
                loungeList.length < 4
                  ? modelLocationWithNew[index]
                  : modelLocation[index]
              }
              label={lounge.name}
              onClick={() => navigate(`${URL.lounge}/${lounge.lounge_id}`)}
            />
          ))}
        </group>
      </Canvas>
    </Suspense>
  )
}

function Model({
  position,
  type,
  label,
  scale = [0.4, 0.4, 0.4],
  onClick,
}: ModelProps) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
    }
  })

  let ModelComponent
  switch (type) {
    case 'L0001':
      ModelComponent = LoungeModel1
      break
    case 'L0002':
      ModelComponent = LoungeModel2
      break
    case 'L0003':
      ModelComponent = LoungeModel3
      break
    case 'L0004':
    default:
      ModelComponent = LoungeModel4
      break
  }

  return (
    <group position={position} onClick={onClick}>
      <group ref={ref} scale={scale}>
        <Suspense fallback={null}>
          <ModelComponent />
        </Suspense>
      </group>
      <Text position={[0, -0.6, 0]} fontSize={0.15} color='#FFFFFF'>
        {label}
      </Text>
    </group>
  )
}
