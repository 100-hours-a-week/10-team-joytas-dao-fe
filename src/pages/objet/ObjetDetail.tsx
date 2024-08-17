import { Avatar } from 'antd'
import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  TopContainer,
  LeftContainer,
  RightContainer,
  CallTitle,
  CallSubTitle,
  ObjetMaker,
  ObjetActive,
  Active,
  Name,
  ObjetDetailContainer,
  ObjetImg,
  ObjetDescription,
  GoToBtnWrapper,
  CommunityContainer,
  ChattingsWrapper,
  Icon,
  CallToast,
} from './ObjetStyles'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons'
import SampleImg from '../../assets/images/sampleObjet.png'
import MenuImg from '../../assets/images/menu.png'
import GoCommunityBtn from '../../components/objet/GoCommunityBtn'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../static'
import { useState } from 'react'
import { ChattingPreview } from '../../components/objet/Chatting'
import { DeleteModal, MenuModal } from '../../components/objet/Modal'
import { ModalBackdrop } from '../../components/objet/ObjetComponentStyle'

export default function ObjetDetail() {
  const name = 'jamie'
  const [people, setPeople] = useState(2)
  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [isToastVisible, setIsToastVisible] = useState(true)

  const navigate = useNavigate()

  const handleClickCall = () => {
    if (people === 9) {
      setTimeout(() => {
        setIsToastVisible(true)
      }, 2000)
      setIsToastVisible(false)
    } else {
      navigate(URL.objetCall)
    }
  }

  return (
    <Layout>
      <>
        {isDeleteModalVisible && <ModalBackdrop />}

        <GloablContainer16>
          <TopContainer>
            <LeftContainer>
              <CallTitle>굳나잇 지키 오브제</CallTitle>
              <CallSubTitle>
                <ObjetMaker>
                  만든이 <Name>{name}</Name>
                </ObjetMaker>
                <ObjetActive>
                  실시간 <Active />
                </ObjetActive>
              </CallSubTitle>
            </LeftContainer>
            <RightContainer>
              <Avatar.Group
                max={{
                  count: 3,
                  style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                }}
              >
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
                <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>

              <Icon
                className='menu'
                src={MenuImg}
                onClick={() => setIsMenuModalVisible(!isMenuModalVisible)}
              />
            </RightContainer>
            {isMenuModalVisible && (
              <MenuModal
                onClickUpdate={() => navigate(URL.objetUpdate)}
                onClickDelete={() => {
                  setIsDeleteModalVisible(true)
                  setIsMenuModalVisible(false)
                }}
              />
            )}
          </TopContainer>

          <ObjetDetailContainer>
            <ObjetImg src={SampleImg} />
            <ObjetDescription>
              굿나잇지키 굿나잇지키 굿나잇지키 굿나잇지키 굿나잇지키 굿나잇지키
              굿나잇지키 굿나잇지키 굿나잇지키 굿나잇지키 굿나잇지키 굿나잇지키
              굿나잇지키 굿나잇지키 굿나잇지키
            </ObjetDescription>
          </ObjetDetailContainer>
          <CommunityContainer>
            <ChattingsWrapper>
              <ChattingPreview
                userName='jamie'
                userId={3}
                profileImg='../../assets/images/sampleObjet.png'
                content='안녕 제이미'
              />
              <ChattingPreview
                userName='jamie'
                userId={3}
                profileImg='../../assets/images/sampleObjet.png'
                content='안녕 제이미'
              />
              <ChattingPreview
                userName='jamie'
                userId={3}
                profileImg='../../assets/images/sampleObjet.png'
                content='안녕 제이미'
              />
            </ChattingsWrapper>
            <GoToBtnWrapper>
              <GoCommunityBtn
                text='채팅 입장하기'
                className='chattings'
                onClick={() => {
                  navigate(URL.objetChatting)
                }}
              />
              <GoCommunityBtn
                text='음성통화'
                className='call'
                people={people}
                onClick={handleClickCall}
              />
            </GoToBtnWrapper>
          </CommunityContainer>

          {isDeleteModalVisible && (
            <DeleteModal onClose={() => setIsDeleteModalVisible(false)} />
          )}
          {isToastVisible && <CallToast>방이 가득찼습니다!</CallToast>}
        </GloablContainer16>
      </>
    </Layout>
  )
}
