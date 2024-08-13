import { MyRoomModel1 } from '../assets/models/MyRoomModel1.tsx'
import { MyRoomModel2 } from '../assets/models/MyRoomModel2.tsx'
import { MyRoomModel3 } from '../assets/models/MyRoomModel3.tsx'
import { MyRoomModel4 } from '../assets/models/MyRoomModel4.tsx'
import { MyRoomModel5 } from '../assets/models/MyRoomModel5.tsx'

import myRoomThumbnail1 from '../assets/images/myRoom_thumnails/myRoomModel1.png'
import myRoomThumbnail2 from '../assets/images/myRoom_thumnails/myRoomModel2.png'
import myRoomThumbnail3 from '../assets/images/myRoom_thumnails/myRoomModel3.png'
import myRoomThumbnail4 from '../assets/images/myRoom_thumnails/myRoomModel4.png'
import myRoomThumbnail5 from '../assets/images/myRoom_thumnails/myRoomModel5.png'

export interface MyRoomModel {
  id: 1 | 2 | 3 | 4 | 5
  thumbnail: string
  name: string
  camera: [number, number, number]
  targetOrbit?: [number, number, number]
  model: JSX.Element
}

export const modelList: MyRoomModel[] = [
  // TODO: 카메라 각도 조정
  {
    id: 1,
    thumbnail: myRoomThumbnail1,
    name: '준투의 방',
    camera: [40, 20, 50],
    targetOrbit: [0, 10, 0],
    model: <MyRoomModel1 scale={[1.3, 1.3, 1.3]} />,
  },
  {
    id: 2,
    thumbnail: myRoomThumbnail2,
    name: '제이미의 방',
    camera: [50, 20, 50],
    targetOrbit: [0, 10, 0],
    model: <MyRoomModel2 scale={[0.04, 0.04, 0.04]} />,
  },
  {
    id: 3,
    thumbnail: myRoomThumbnail3,
    name: '에리카의 방',
    camera: [-20, -50, 40],
    model: <MyRoomModel3 scale={[0.65, 0.65, 0.65]} />,
  },
  {
    id: 4,
    thumbnail: myRoomThumbnail4,
    camera: [-50, 30, 0],
    name: '홍의 방',
    targetOrbit: [0, 0, 0],
    model: <MyRoomModel4 scale={[0.09, 0.09, 0.09]} />,
  },
  {
    id: 5,
    thumbnail: myRoomThumbnail5,
    camera: [-50, 20, 0],
    name: '지키의 방',
    model: <MyRoomModel5 scale={[0.15, 0.15, 0.15]} />,
  },
]
