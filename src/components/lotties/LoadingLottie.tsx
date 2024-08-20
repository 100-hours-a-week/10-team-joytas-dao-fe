import Lottie from 'react-lottie'
import styled from 'styled-components'
import loading from '../../assets/lotties/loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading, // loading.json에서 가져온 데이터
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const LottieContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`

export default function LoadingLottie() {
  return (
    <LottieContainer>
      <Lottie options={defaultOptions} height={100} width={200} />
    </LottieContainer>
  )
}
