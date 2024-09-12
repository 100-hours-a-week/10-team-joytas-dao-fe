import Layout from '../../components/Layout.js'
import {
  Icon,
  IconWithBorder,
  MyRoomPreviewWrapper,
  MyRoomTitleInput,
  ObjetWrapper,
  Title,
  TitleWrapper,
  MyRoomIconContainer,
} from './MyRoomStyles.tsx'
import { toast } from 'react-toastify'
import { Skeleton } from 'antd'
import { Canvas } from '@react-three/fiber'
import editIcon from '../../assets/images/edit.webp'
import closeIcon from '../../assets/images/close.webp'
import checkIcon from '../../assets/images/check.webp'
import { useEffect, useState } from 'react'
import {
  modelList,
  MyRoomModel,
  roomConfigs,
} from '../../global/myRoomModels.js'
import { GloablContainer16 } from '../../global/globalStyles.tsx'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '../../static.ts'
import LoadingLottie from '../../components/lotties/LoadingLottie.tsx'
import useUserStore from '../../store/userStore.ts'
import { OrbitControls } from '@react-three/drei'

export default function MyRoom() {
  const [myRoomId, setMyRoomId] = useState()
  const [myRoomName, setMyRoomName] = useState('')
  const [myRoomNameForChange, setMyRoomNameForChange] = useState('')
  const [myRoomModel, setMyRoomModel] = useState<MyRoomModel>(modelList[0])

  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  const userNickname = useUserStore((state) => state.nickname)
  const userId = useUserStore((state) => state.userId)

  useEffect(() => {
    fetchMyRoomInfo()
  }, [userId])

  const fetchMyRoomInfo = async () => {
    try {
      const response = await fetch(`${APIs.myRoom}?user_id=${userId}`, {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      const responseData = await response.json()

      if (!responseData.data) {
        toast.info('마이룸이 없습니다. 마이룸을 생성해주세요! 🪐')
        navigate(URL.createMyRoom)
      }

      setMyRoomId(responseData.data.my_room_id)
      setMyRoomName(
        responseData.data.my_room_name
          ? responseData.data.my_room_name
          : userNickname + '의 마이룸'
      )
      setMyRoomNameForChange(myRoomName)
      setMyRoomModel(modelList[responseData.data.type.split('R000')[1] - 1])
    } catch (error) {
      console.error('마이룸 정보 조회 오류: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangeIsEditing = () => {
    setIsEditing(!isEditing)
    if (!isEditing) {
      setMyRoomNameForChange(myRoomName)
    }
  }

  const handleSubmit = async () => {
    if (myRoomName === myRoomNameForChange) {
      setIsEditing(false)
      toast.info('변경된 사항이 없습니다. 🤔')
      return
    }

    try {
      const response = await fetch(`${APIs.myRoom}/${myRoomId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({ room_name: myRoomNameForChange }),
      })

      if (!response.ok) {
        toast.error('마이룸 이름 수정 실패 😭')
      }
      toast.success('마이룸 이름 수정 성공 🪐')
      setMyRoomName(myRoomNameForChange)
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
                value={myRoomNameForChange}
                onChange={(e) => setMyRoomNameForChange(e.target.value)}
                placeholder='마이룸 이름을 입력해주세요'
                minLength={2}
                maxLength={20}
              />
              <MyRoomIconContainer>
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
              </MyRoomIconContainer>
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
                    ? `${myRoomName.substring(0, 14)}..`
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
            <Canvas
              frameloop='demand'
              camera={{
                position: roomConfigs[myRoomModel.type].cameraPosition,
              }}
            >
              <OrbitControls
                target={myRoomModel.targetOrbit}
                enableZoom={false}
              />
              <ambientLight intensity={1} />
              <group
                rotation-y={roomConfigs[myRoomModel.type].rotationY}
                position={roomConfigs[myRoomModel.type].position}
                scale={roomConfigs[myRoomModel.type].scale}
              >
                {myRoomModel.model}
              </group>
            </Canvas>
          )}
        </MyRoomPreviewWrapper>

        <ObjetWrapper onClick={handleNavigate}>
          <div>내 오브제 조회</div>
        </ObjetWrapper>
        <div style={{ height: '80px' }} />
      </GloablContainer16>
    </Layout>
  )
}
