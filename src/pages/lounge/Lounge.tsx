import Layout from '../../components/Layout'
import {
  Main,
  SubTitle,
  TopContainer,
  IconContainer,
  InviteIcon,
  MakeIcon,
  LoungeTitle,
  Objets,
} from './LoungeStyles'
import invite from '../../assets/images/invite.png'
import plus from '../../assets/images/plus.png'
import LoungeObjets from './LoungeObjets'

export default function Lounge() {
  return (
    <Layout>
      <Main>
        <TopContainer>
          <LoungeTitle>Mental 404</LoungeTitle>
          <IconContainer>
            <InviteIcon src={invite} />
            <MakeIcon src={plus} />
          </IconContainer>
        </TopContainer>
        <SubTitle>친구를 초대하고 오브제로 추억을 공유해보세요!</SubTitle>
        <Objets>
          <LoungeObjets />
        </Objets>
      </Main>
    </Layout>
  )
}
