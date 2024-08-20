import Lottie from 'react-lottie'
import styled from 'styled-components'
import noData from '../../assets/lotties/noData.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: noData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

export const LottieContainer = styled.div`
  margin: 0 auto;
  /* 여기서 margin-left를 적용합니다 */
  margin-left: 25px;
`

export default function NoDataLottie() {
  return (
    <LottieContainer>
      <Lottie options={defaultOptions} />
    </LottieContainer>
  )
}
