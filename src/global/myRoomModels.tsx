import { lazy } from 'react'

import myRoomThumbnail1 from '../assets/images/myRoom_thumnails/myRoomModel1.webp'
import myRoomThumbnail2 from '../assets/images/myRoom_thumnails/myRoomModel2.webp'
import myRoomThumbnail3 from '../assets/images/myRoom_thumnails/myRoomModel3.webp'
import myRoomThumbnail4 from '../assets/images/myRoom_thumnails/myRoomModel4.webp'
import myRoomThumbnail5 from '../assets/images/myRoom_thumnails/myRoomModel5.webp'
import { Vector3 } from 'three'

const MyRoomModel1 = lazy(() => import('../assets/models/MyRoomModel1'))
const MyRoomModel2 = lazy(() => import('../assets/models/MyRoomModel2'))
const MyRoomModel3 = lazy(() => import('../assets/models/MyRoomModel3'))
const MyRoomModel4 = lazy(() => import('../assets/models/MyRoomModel4'))
const MyRoomModel5 = lazy(() => import('../assets/models/MyRoomModel5'))

export interface MyRoomModel {
  type: 'R0001' | 'R0002' | 'R0003' | 'R0004' | 'R0005'
  thumbnail: string
  name: string
  camera: [number, number, number]
  targetOrbit?: [number, number, number]
  model: JSX.Element
}

export const modelList: MyRoomModel[] = [
  {
    type: 'R0001',
    thumbnail: myRoomThumbnail1,
    name: '준투의 방',
    camera: [40, 20, 50],
    targetOrbit: [0, 10, 0],
    model: <MyRoomModel1 scale={[1.3, 1.3, 1.3]} />,
  },
  {
    type: 'R0002',
    thumbnail: myRoomThumbnail2,
    name: '제이미의 방',
    camera: [50, 20, 50],
    targetOrbit: [0, 10, 0],
    model: <MyRoomModel2 scale={[0.04, 0.04, 0.04]} />,
  },
  {
    type: 'R0003',
    thumbnail: myRoomThumbnail3,
    name: '에리카의 방',
    camera: [-20, -50, 40],
    model: <MyRoomModel3 scale={[0.65, 0.65, 0.65]} />,
  },
  {
    type: 'R0004',
    thumbnail: myRoomThumbnail4,
    camera: [-30, 30, 10],
    name: '홍의 방',
    targetOrbit: [0, 0, 0],
    model: <MyRoomModel4 scale={[14, 14, 14]} position={[0, -10, 0]} />,
  },
  {
    type: 'R0005',
    thumbnail: myRoomThumbnail5,
    camera: [-30, 20, 0],
    name: '지키의 방',
    model: (
      <MyRoomModel5
        scale={[5, 5, 5]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -10, 0]}
      />
    ),
  },
]

export const roomConfigs = {
  R0001: {
    cameraPosition: new Vector3(40, 20, 50),
    rotationY: -Math.PI / 2,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
  },
  R0002: {
    cameraPosition: new Vector3(50, 20, 50),
    rotationY: -Math.PI / 2,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(1, 1, 1),
  },
  R0003: {
    cameraPosition: new Vector3(-65, 30, 20),
    rotationY: Math.PI + 100,
    position: new Vector3(0, -10, 0),
    scale: new Vector3(1.2, 1.2, 1.2),
  },
  R0004: {
    cameraPosition: new Vector3(-45, 25, 10),
    rotationY: -Math.PI + 100,
    position: new Vector3(0, 0, 0),
    scale: new Vector3(0.8, 0.8, 0.8),
  },
  R0005: {
    cameraPosition: new Vector3(-60, 40, 20),
    rotationY: -Math.PI + 100,
    position: new Vector3(0, -15, 0),
    scale: new Vector3(1.3, 1.3, 1.3),
  },
}
