import Layout from '@components/Layout'
import { GloablContainer16 } from '@global/globalStyles'
import {
  BannerImage,
  MyObjetContainer,
  MyObjetTitle,
  LottieContainer,
  PreparingContainer,
} from './HomeStyles'
import ObjetPreview from '@components/objet/ObjetPreview'
import { APIs } from '@/static'
import LoadingLottie from '@components/lotties/LoadingLottie'
import NoPrevObjet from '@components/objet/NoPrevObjet'
import { Carousel } from 'antd'
import banner1 from '@images/banner/banner1.png'
import banner2 from '@images/banner/banner2.png'
import banner3 from '@images/banner/banner3.png'
import banner4 from '@images/banner/banner4.png'
import recentObjetsIcon from '@images/recentObjets.webp'
import alert from '@images/alert.webp'
import preparing from '@assets/lotties/preparing.json'
import useUserStore from '@store/userStore'
import Lottie from 'lottie-react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchObjetPreviews = async () => {
  const response = await axios.get(APIs.objetPreview, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    withCredentials: true,
  })
  return response.data.data
}

export default function Home() {
  const userId = useUserStore((state) => state.userId)

  const { data: objets = [], isLoading } = useQuery(
    ['objets', userId],
    fetchObjetPreviews
  )

  return (
    <Layout style={{ padding: '0px' }}>
      <GloablContainer16 style={{ padding: '0px' }}>
        <Carousel
          arrows
          autoplay
          autoplaySpeed={3500}
          style={{ cursor: 'pointer' }}
        >
          <BannerImage src={banner1} />
          <BannerImage src={banner2} />
          <BannerImage src={banner3} />
          <BannerImage src={banner4} />
        </Carousel>
        <MyObjetContainer>
          <MyObjetTitle>
            <img src={recentObjetsIcon} alt='recentObjetsIcon' />
            최근 오브제를 확인해보세요!
          </MyObjetTitle>
          {isLoading ? (
            <LottieContainer>
              <LoadingLottie />
            </LottieContainer>
          ) : objets?.length === 0 ? (
            <NoPrevObjet />
          ) : (
            <ObjetPreview objets={objets} />
          )}
        </MyObjetContainer>
        <MyObjetContainer
          style={{
            paddingBottom: '70px',
          }}
        >
          <MyObjetTitle>
            <img src={alert} alt='recentObjetsIcon' />
            Coming Soon !
          </MyObjetTitle>
          <PreparingContainer>
            <Lottie animationData={preparing} style={{ height: '100px' }} />
            <span>새로운 기능이 추가될 영역입니다.</span>
          </PreparingContainer>
        </MyObjetContainer>
      </GloablContainer16>
    </Layout>
  )
}
