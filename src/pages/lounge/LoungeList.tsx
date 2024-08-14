import Layout from '../../components/Layout'
import LoungeContainer from '../../components/lounge/LoungeContainer'
import { Main, Title, SubTitle, LoungeList } from './LoungeStyles'

export default function LoungeListPage() {
  return (
    <Layout>
      <Main>
        <Title>추억할 라운지를 보여드릴게요...</Title>
        <SubTitle>라운지를 클릭해 입장하거나, 라운지를 생성해보세요!</SubTitle>
        <LoungeList>
          <LoungeContainer />
        </LoungeList>
      </Main>
    </Layout>
  )
}
