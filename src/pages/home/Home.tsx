import Layout from '@components/Layout'
import { GloablContainer16 } from '@global/globalStyles'
import {
  BannerImage,
  MyObjetContainer,
  MyObjetTitle,
  LottieContainer,
  PreparingContainer,
  PreparingItem,
} from './HomeStyles'
import ObjetPreview from '@components/objet/ObjetPreview'
import { APIs } from '@/static'
import LoadingLottie from '@components/lotties/LoadingLottie'
import NoPrevObjet from '@components/objet/NoPrevObjet'
import { Carousel } from 'antd'
import banner1 from '@images/banner/banner1.webp'
import banner2 from '@images/banner/banner2.webp'
import banner3 from '@images/banner/banner3.webp'
import banner4 from '@images/banner/banner4.webp'
import recentObjetsIcon from '@images/recentObjets.webp'
import useUserStore from '@store/userStore'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useEffect, useRef } from 'react'

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

  const items = [
    <>
      친구 추가 기능이 <br /> 추가될 예정이에요!
    </>,
    <>
      마이룸 수정 기능이 <br /> 추가될 예정이에요!
    </>,
    <>
      좋아요 기능이 <br /> 추가될 예정이에요!
    </>,
    <>
      라운지 신청 기능이 <br /> 추가될 예정이에요!
    </>,
    <>
      여러 개의 이미지 첨부 기능이 <br /> 추가될 예정이에요!
    </>,
  ]

  const { data: objets = [], isLoading } = useQuery(
    ['objets', userId],
    fetchObjetPreviews,
    {
      retry: 1,
      onError: (error) => {
        console.error('Failed to fetch objets', error)
      },
    }
  )

  const preparingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = preparingRef.current
    let scrollAmount = 0

    const scrollInterval = setInterval(() => {
      if (container) {
        scrollAmount += 1
        container.scrollLeft += 1

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0
        }
      }
    }, 20)

    return () => {
      clearInterval(scrollInterval)
    }
  }, [])

  return (
    <Layout style={{ padding: '0px' }}>
      <GloablContainer16 style={{ padding: '0px' }}>
        <Carousel
          arrows
          autoplay
          autoplaySpeed={3500}
          style={{ cursor: 'pointer' }}
        >
          <BannerImage fetchPriority='high' src={banner1} />
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
        <PreparingContainer ref={preparingRef}>
          {[...items, ...items].map((item, index) => (
            <PreparingItem key={index}>{item}</PreparingItem>
          ))}
        </PreparingContainer>
      </GloablContainer16>
    </Layout>
  )
}
