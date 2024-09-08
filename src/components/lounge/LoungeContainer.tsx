import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static'
import LoadingLottie from '../lotties/LoadingLottie'
import { logEvent } from 'firebase/analytics'
import { analytics } from '../../firebase'
import LoungeModel from './LoungeModel'
import type { LoungeProps } from '../../types/LoungeType'
import EmptyLounge from './EmptyLounge'

export default function LoungeContainer() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [loungeList, setLoungeList] = useState<LoungeProps[]>([])

  const getLoungeList = async () => {
    setIsLoading(true)
    try {
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

  if (isLoading) return <LoadingLottie />

  if (loungeList.length === 0) return <EmptyLounge />

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

  const handleClickNewLounge = () => {
    logEvent(analytics, 'click-new-lounge', {
      content_type: 'new-lounge',
    })
    navigate(URL.newLounge)
  }

  const handleClickLounge = (lid: number) => {
    logEvent(analytics, 'click-lounge', {
      content_type: 'lounge',
      lounge_id: lid,
    })
    navigate(`${URL.lounge}/${lid}`)
  }

  return (
    <Suspense fallback={<LoadingLottie />}>
      <Canvas
        style={{
          width: '324px',
          height: '100%',
          cursor: 'pointer',
        }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <ambientLight intensity={1} />
        <group position={[0, 0, 0]}>
          {loungeList.length >= 4 ? null : (
            <LoungeModel
              type='L0004'
              position={new Vector3(-0.9, 1.4, 0)}
              label='새 라운지 만들기'
              scale={[0.6, 0.6, 0.6]}
              onClick={handleClickNewLounge}
            />
          )}
          {loungeList.map((lounge, index) => (
            <LoungeModel
              key={index}
              type={lounge.type}
              position={
                loungeList.length < 4
                  ? modelLocationWithNew[index]
                  : modelLocation[index]
              }
              label={lounge.name}
              onClick={() => handleClickLounge(lounge.lounge_id)}
            />
          ))}
        </group>
      </Canvas>
    </Suspense>
  )
}
