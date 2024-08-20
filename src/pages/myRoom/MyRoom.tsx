import Layout from '../../components/Layout.js'
import {
  Icon,
  IconWithBorder,
  MyRoomName,
  MyRoomPreviewWrapper,
  MyRoomTitleInput,
  ObjetWrapper,
  Title,
  TitleWrapper,
} from './MyRoomStyles.tsx'
import { Skeleton } from 'antd'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import editIcon from '../../assets/images/edit.png'
import closeIcon from '../../assets/images/close.png'
import checkIcon from '../../assets/images/check.png'

import { useEffect, useRef, useState } from 'react'
import { modelList, MyRoomModel } from '../../global/myRoomModels.js'
import { GloablContainer16 } from '../../global/globalStyles.tsx'
import { ObjetModel1 } from '../../assets/models/ObjetModel1.tsx'
import { Group } from 'three'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static.ts'
import LoadingLottie from '../../components/lotties/LoadingLottie.tsx'

export default function MyRoom() {
  const [myRoomId, setMyRoomId] = useState()
  const [myRoomName, setMyRoomName] = useState('')
  const [myRoomModel, setMyRoomModel] = useState<MyRoomModel>(modelList[0])

  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  const profile = localStorage.getItem('profile')
  const userNickname = profile ? JSON.parse(profile).nickname : ''
  const userId = profile ? JSON.parse(profile).user_id : 0

  useEffect(() => {
    fetchMyRoomInfo()
  }, [])

  const fetchMyRoomInfo = async () => {
    try {
      const response = await fetch(`${APIs.myRoom}?user_id=${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      const responseData = await response.json()
      console.log('마이룸 정보 조회 응답: ', responseData)

      if (!responseData.data.type) {
        alert('마이룸이 없습니다. 마이룸을 생성해주세요!')
        navigate(URL.createMyRoom)
      }

      setMyRoomId(responseData.data.my_room_id)
      setMyRoomName(
        responseData.data.my_room_name
          ? responseData.data.my_room_name
          : userNickname + '의 마이룸'
      )
      setMyRoomModel(modelList[responseData.data.type.split('R000')[1]])
    } catch (error) {
      console.error('마이룸 정보 조회 오류: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeIsEditing = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${APIs.myRoom}/${myRoomId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ room_name: myRoomName }),
      })

      const responseData = await response.json()
      console.log('마이룸 이름 수정 응답: ', responseData)
    } catch (error) {
      console.error('마이룸 이름 수정 오류: ', error)
    } finally {
      setIsEditing(false)
    }
  }

  const handleNavigate = () => {
    navigate(URL.myRoomObjet)
  }

  return (
    <Layout>
      <GloablContainer16>
        <TitleWrapper>
          {isEditing ? (
            <>
              <MyRoomTitleInput
                value={myRoomName}
                onChange={(e) => setMyRoomName(e.target.value)}
                placeholder='마이룸 이름을 입력해주세요'
              />
              <IconWithBorder
                src={checkIcon}
                alt='check'
                onClick={handleSubmit}
              />
              <IconWithBorder
                src={closeIcon}
                alt='close'
                onClick={handleChangeIsEditing}
              />
            </>
          ) : (
            <>
              {isLoading ? (
                <Skeleton.Input
                  active
                  style={{
                    backgroundColor: '#b7d1ea',
                    opacity: '70%',
                    width: '220px',
                    height: '24px',
                  }}
                />
              ) : (
                <Title>
                  {myRoomName.length > 15
                    ? `${myRoomName.substring(0, 15)}...`
                    : myRoomName}
                </Title>
              )}
              <Icon src={editIcon} alt='edit' onClick={handleChangeIsEditing} />
            </>
          )}
        </TitleWrapper>

        <MyRoomPreviewWrapper>
          {isLoading ? (
            <LoadingLottie />
          ) : (
            <Canvas camera={{ position: myRoomModel.camera }}>
              <OrbitControls
                target={myRoomModel.targetOrbit}
                enableZoom={false}
              />
              <ambientLight intensity={1} />
              <group rotation-y={-Math.PI / 2}>{myRoomModel.model}</group>
            </Canvas>
          )}
        </MyRoomPreviewWrapper>

        <ObjetWrapper onClick={handleNavigate}>
          {isLoading ? (
            <LoadingLottie />
          ) : (
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <RenderObjet />
            </Canvas>
          )}
          <MyRoomName>내 오브제 조회</MyRoomName>
        </ObjetWrapper>
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
