import Lottie from 'lottie-react'
import styled from 'styled-components'
import noData from '../../assets/lotties/noData.json'

export const LottieContainer = styled.div`
  margin: 0 auto;
  padding-right: 25px;
`

export default function NoDataLottie() {
  return (
    <LottieContainer>
      <Lottie
        animationData={noData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </LottieContainer>
  )
}
