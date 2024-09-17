import { Canvas } from '@react-three/fiber'
import Layout from '@components/Layout'
import UserListItem from '@components/user/UserListItem'
import { GloablContainer16 } from '@global/globalStyles'
import { MyRoomName, MyRoomPreviewWrapper } from '../myRoom/MyRoomStyles'
import { OrbitControls } from '@react-three/drei'
import { modelList, MyRoomModel } from '@global/myRoomModels'
import { MyRoomContainer } from './UserListStyles'
import { useEffect, useState } from 'react'
import { APIs } from '@/static'
import { useParams } from 'react-router-dom'
import LoadingLottie from '@components/lotties/LoadingLottie'

export default function UserDetail() {
  const userId = Number(useParams().id)

  const [userNickname, setUserNickname] = useState('')
  const [userProfileUrl, setUserProfileUrl] = useState('')
  const [userStatus, setUserStatus] = useState('')

  const [myRoomName, setMyRoomName] = useState('')
  const [myRoomModel, setMyRoomModel] = useState<MyRoomModel>(modelList[0])
  const [isLoading, setIsLoading] = useState(true)

  const profile = {
    user_id: userId,
    nickname: userNickname,
    profile_url: userProfileUrl,
    user_status: userStatus,
  }

  useEffect(() => {
    fetchMyRoomInfo()
  }, [userId])

  const fetchMyRoomInfo = async () => {
    try {
      const userRes = await fetch(`${APIs.userInfo}/${userId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })

      if (userRes.ok) {
        const userResData = await userRes.json()

        setUserNickname(userResData.data.nickname)
        setUserProfileUrl(userResData.data.profile_url)
        setUserStatus(userResData.data.user_status)

        const response = await fetch(`${APIs.myRoom}?user_id=${userId}`, {
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })

        const responseData = await response.json()

        setMyRoomName(
          responseData.data.my_room_name
            ? responseData.data.my_room_name
            : profile.nickname + '의 마이룸'
        )
        setMyRoomModel(modelList[responseData.data.type.split('R000')[1] - 1])
      } else {
        console.error('유저 정보 조회 오류: ', userRes)
      }
    } catch (error) {
      console.error('마이룸 정보 조회 오류: ', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <GloablContainer16>
        <div style={{ height: '80px' }} />
        <UserListItem type='userDetail' user={profile} />
        <MyRoomContainer>
          <MyRoomPreviewWrapper>
            {isLoading ? (
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
