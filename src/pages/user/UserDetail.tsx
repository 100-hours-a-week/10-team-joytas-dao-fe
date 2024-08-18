import { Canvas } from '@react-three/fiber'
import Layout from '../../components/Layout'
import UserListItem from '../../components/user/UserListItem'
import { GloablContainer16 } from '../../global/globalStyles'
import { MyRoomPreviewWrapper } from '../myRoom/MyRoomStyles'
import { OrbitControls } from '@react-three/drei'
import { modelList } from '../../global/myRoomModels'
import { MyRoomContainer } from './UserListStyle'

export default function UserDetail() {
  const myRoomName = "웰컴투 지직키's 홈"
  const userInfo = { id: 1, userName: '지직지키', profileImg: '' }
  const myRoomModel = modelList[0]

  return (
    <Layout>
      <GloablContainer16>
        <div style={{ height: '80px' }} />
        <UserListItem type='userDetail' user={userInfo} />
        <MyRoomContainer>
          <span>{myRoomName}</span>
          <MyRoomPreviewWrapper>
            <Canvas camera={{ position: myRoomModel.camera }}>
              <OrbitControls
                target={myRoomModel.targetOrbit}
                enableZoom={false}
              />
              <ambientLight intensity={1} />
              <group rotation-y={-Math.PI / 2}>{myRoomModel.model}</group>
            </Canvas>
          </MyRoomPreviewWrapper>
        </MyRoomContainer>
      </GloablContainer16>
    </Layout>
  )
}
