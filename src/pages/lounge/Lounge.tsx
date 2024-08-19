import Layout from '../../components/Layout'
import {
  TopContainer,
  IconContainer,
  Icon,
  LoungeTitle,
  Objets,
} from './LoungeStyles'
import invite from '../../assets/images/invite.png'
import plus from '../../assets/images/plus.png'
import LoungeObjets from './LoungeObjets'
import { GloablContainer16, GlobalSubTitle } from '../../global/globalStyles'
import { useNavigate } from 'react-router-dom'
import { URL } from '../../static'

export default function Lounge() {
  const navigate = useNavigate()
  return (
    <Layout>
      <GloablContainer16>
        <TopContainer>
          <LoungeTitle>Mental 404</LoungeTitle>
          <IconContainer>
            <Icon
              src={invite}
              onClick={() => {
                navigate(URL.loungeInvite)
              }}
            />
            <Icon
              src={plus}
              onClick={() => {
                navigate(URL.newObjet)
              }}
            />
          </IconContainer>
        </TopContainer>
        <GlobalSubTitle>
          친구를 초대하고 오브제로 추억을 공유해보세요!
        </GlobalSubTitle>
        <Objets>
          <LoungeObjets type='lounge' />
        </Objets>
      </GloablContainer16>
    </Layout>
  )
}
