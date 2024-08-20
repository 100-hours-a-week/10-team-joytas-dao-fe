import Layout from '../../components/Layout'
import LoungeObjets from '../lounge/LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '../../global/globalStyles'
import {
  IconContainer,
  LoungeTitle,
  Objets,
  TopContainer,
} from '../lounge/LoungeStyles'
import { Icon } from './MyRoomStyles'
import { useState } from 'react'
import MoreImg from '../../assets/images/more.png'
import { ModalBackdrop } from '../../components/ModalStyles'
import { LoungeListModal } from '../../components/Modal'

export default function MyRoomObjet() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Layout>
      <>
        {isModalOpen && <ModalBackdrop />}

        <GloablContainer16>
          <TopContainer>
            <LoungeTitle>전체</LoungeTitle>
            <IconContainer>
              <Icon
                src={MoreImg}
                onClick={() => {
                  setIsModalOpen(true)
                }}
              />
            </IconContainer>
          </TopContainer>
          <GlobalSubTitle>나에게 전달된 오브제를 확인해보세요!</GlobalSubTitle>
          <Objets>
            <LoungeObjets type='myRoom' />
          </Objets>

          {isModalOpen && (
            <LoungeListModal onClose={() => setIsModalOpen(false)} />
          )}
        </GloablContainer16>
      </>
    </Layout>
  )
}
