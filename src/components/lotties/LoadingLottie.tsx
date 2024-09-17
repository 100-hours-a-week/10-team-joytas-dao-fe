import Lottie from 'lottie-react'
import styled from 'styled-components'
import loading from '@assets/lotties/loading.json'

export const LottieContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`

export default function LoadingLottie() {
  return (
    <LottieContainer>
      <Lottie
        animationData={loading}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </LottieContainer>
  )
}
