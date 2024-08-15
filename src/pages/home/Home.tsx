import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  Greetings,
  WelcomeMessage,
  Nickname,
  Banner,
  MyObjetContainer,
  MyObjetTitle,
} from './HomeStyles'
import ObjetPreview from '../../components/objet/ObjetPreview'

export default function Home() {
  const name = 'JunPark'
  return (
    <Layout>
      <GloablContainer16>
        <Greetings>
          <WelcomeMessage>안녕하세요 👋</WelcomeMessage>
          <Nickname>"{name}"님,</Nickname>
        </Greetings>
        <Banner>광고</Banner>
        <MyObjetContainer>
          <MyObjetTitle>👀 나에 대한 오브제가 만들어졌어요!</MyObjetTitle>
          <ObjetPreview />
        </MyObjetContainer>
      </GloablContainer16>
    </Layout>
  )
}
