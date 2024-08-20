import Layout from '../../components/Layout'
import LoungeContainer from '../../components/lounge/LoungeContainer'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles'
import { LoungeList } from './LoungeStyles'

export default function LoungeListPage() {
  

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>추억할 라운지를 보여드릴게요...</GlobalTitle>
        <GlobalSubTitle>
          라운지를 클릭해 입장하거나, 라운지를 생성해보세요!
        </GlobalSubTitle>
        <LoungeList>
          <LoungeContainer />
        </LoungeList>
      </GloablContainer16>
    </Layout>
  )
}
