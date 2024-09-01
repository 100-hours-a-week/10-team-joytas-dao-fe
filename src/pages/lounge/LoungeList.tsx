import Layout from '../../components/Layout'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles'
import { LoungeList } from './LoungeStyles'
import React, { Suspense } from 'react'
import LoadingLottie from '../../components/lotties/LoadingLottie'

const LoungeContainer = React.lazy(
  () => import('../../components/lounge/LoungeContainer')
)

export default function LoungeListPage() {
  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>추억할 라운지를 보여드릴게요...</GlobalTitle>
        <GlobalSubTitle>
          라운지를 클릭해 입장하거나, 라운지를 생성해보세요!
        </GlobalSubTitle>
        <LoungeList>
          <Suspense fallback={<LoadingLottie />}>
            <LoungeContainer />
          </Suspense>
        </LoungeList>
      </GloablContainer16>
    </Layout>
  )
}
