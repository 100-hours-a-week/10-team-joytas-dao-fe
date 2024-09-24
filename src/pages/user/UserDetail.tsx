import { Canvas } from '@react-three/fiber'
import Layout from '@components/Layout'
import UserListItem from '@components/user/UserListItem'
import { GloablContainer16 } from '@global/globalStyles'
import { MyRoomName, MyRoomPreviewWrapper } from '../myRoom/MyRoomStyles'
import { OrbitControls } from '@react-three/drei'
import { modelList, MyRoomModel } from '@global/myRoomModels'
import { MyRoomContainer } from './UserListStyles'
import { useState } from 'react'
import { APIs } from '@/static'
import { useParams, useNavigate } from 'react-router-dom'
import LoadingLottie from '@components/lotties/LoadingLottie'
import axios from 'axios'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

export default function UserDetail() {
  const navigate = useNavigate()
  const userId = Number(useParams().id)

  const [userNickname, setUserNickname] = useState('')
  const [userProfileUrl, setUserProfileUrl] = useState('')
  const [userStatus, setUserStatus] = useState('')
  const [myRoomName, setMyRoomName] = useState('')
  const [myRoomModel, setMyRoomModel] = useState<MyRoomModel>(modelList[0])

  const profile = {
    user_id: userId,
    nickname: userNickname,
    profile_url: userProfileUrl,
    user_status: userStatus,
  }

  const fetchUserInfo = async () => {
    const userResponse = await axios.get(`${APIs.userInfo}/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    })
    return userResponse.data.data
  }

  const fetchMyRoomInfo = async () => {
    const response = await axios.get(`${APIs.myRoom}?user_id=${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      withCredentials: true,
    })
    return response.data.data
  }

  const { isLoading: isUserLoading } = useQuery(
    ['userInfo', userId],
    fetchUserInfo,
    {
      onSuccess: (data) => {
        setUserNickname(data.nickname)
        setUserProfileUrl(data.profile_url)
        setUserStatus(data.user_status)
      },
      onError: (error) => {
        console.error('유저 정보 조회 오류: ', error)
      },
    }
  )

  const { isLoading: isMyRoomLoading } = useQuery(
    ['myRoomInfo', userId],
    fetchMyRoomInfo,
    {
      onSuccess: (data) => {
        setMyRoomName(
          data.my_room_name ? data.my_room_name : profile.nickname + '의 마이룸'
        )
        setMyRoomModel(modelList[data.type.split('R000')[1] - 1])
      },
      onError: (error) => {
        console.error('마이룸 정보 조회 오류: ', error)
        toast.error('해당 유저의 마이룸이 존재하지 않습니다 🥲')
        navigate(-1)
      },
    }
  )

  return (
    <Layout>
      <GloablContainer16>
        <div style={{ height: '80px' }} />
        {isUserLoading ? (
          <LoadingLottie />
        ) : (
          <UserListItem type='userDetail' user={profile} />
        )}
        <MyRoomContainer>
          <MyRoomPreviewWrapper>
            {isMyRoomLoading ? (
              <LoadingLottie />
            ) : (
              <>
                <Canvas
                  frameloop='demand'
                  camera={{ position: myRoomModel.camera }}
                >
                  <OrbitControls
                    target={myRoomModel.targetOrbit}
                    enableZoom={false}
                  />
                  <ambientLight intensity={1} />
                  <group rotation-y={-Math.PI / 2}>{myRoomModel.model}</group>
                </Canvas>
                <MyRoomName>{myRoomName}</MyRoomName>
              </>
            )}
          </MyRoomPreviewWrapper>
        </MyRoomContainer>
      </GloablContainer16>
    </Layout>
  )
}
