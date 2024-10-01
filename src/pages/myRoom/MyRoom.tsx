import Layout from '@components/Layout.js'
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
import editIcon from '@images/edit.webp'
import closeIcon from '@images/close.webp'
import checkIcon from '@images/check.webp'
import { useState } from 'react'
import { modelList, MyRoomModel, roomConfigs } from '@global/myRoomModels.js'
import { GloablContainer16 } from '@global/globalStyles.tsx'
import { useNavigate } from 'react-router-dom'
import { APIs, URL } from '@/static'
import LoadingLottie from '@components/lotties/LoadingLottie.tsx'
import useUserStore from '@store/userStore.ts'
import { OrbitControls } from '@react-three/drei'
import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'

interface MyRoomResponse {
  my_room_id: number
  type: string
  my_room_name: string
}

const fetchMyRoomInfo = async (userId: number) => {
  const response = await axios.get(`${APIs.myRoom}?user_id=${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response.data.data
}

const updateMyRoomName = async (roomId: number, newName: string) => {
  return axios.patch(
    `${APIs.myRoom}/${roomId}`,
    { room_name: newName },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    }
  )
}

export default function MyRoom() {
  const [myRoomNameForChange, setMyRoomNameForChange] = useState('')
  const [myRoomModel, setMyRoomModel] = useState<MyRoomModel>(modelList[0])
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  const userNickname = useUserStore((state) => state.nickname)
  const userId = useUserStore((state) => state.userId)
  const queryClient = useQueryClient()

  const { data: myRoomData, isLoading } = useQuery<MyRoomResponse>(
    ['myRoom', userId],
    () => fetchMyRoomInfo(userId),
    {
      retry: 1,
      onSuccess: (data) => {
        setMyRoomNameForChange(
          data?.my_room_name ? data.my_room_name : userNickname + '의 마이룸'
        )
        setMyRoomModel(modelList[Number(data.type.split('R000')[1]) - 1])
      },
      onError: () => {
        toast.error('마이룸 정보 조회 실패 😭')
      },
    }
  )

  const mutation = useMutation({
    mutationFn: ({ roomId, newName }: { roomId: number; newName: string }) =>
      updateMyRoomName(roomId, newName),
    onSuccess: () => {
      queryClient.invalidateQueries(['myRoom', userId])
      toast.success('마이룸 이름 수정 성공 🪐')
    },
    onError: () => {
      toast.error('마이룸 이름 수정 실패 😭')
    },
  })

  const handleSubmit = async () => {
    const roomId = myRoomData?.my_room_id

    if (roomId && myRoomNameForChange !== myRoomData.my_room_name) {
      mutation.mutate({ roomId, newName: myRoomNameForChange })
      setIsEditing(false)
    } else {
      toast.info('변경된 사항이 없습니다. 🤔')
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
                  onClick={() => setIsEditing(false)}
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
                  {myRoomData?.my_room_name &&
                  myRoomData?.my_room_name?.length > 15
                    ? `${myRoomData.my_room_name.substring(0, 14)}..`
                    : myRoomData?.my_room_name}
                </Title>
              )}
              <Icon
                src={editIcon}
                alt='edit'
                onClick={() => setIsEditing(true)}
              />
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
