import Layout from '../../components/Layout'
import { GloablContainer16 } from '../../global/globalStyles'
import {
  BannerVideo,
  BannerImage,
  MyObjetContainer,
  MyObjetTitle,
  LottieContainer,
} from './HomeStyles'
import ObjetPreview from '../../components/objet/ObjetPreview'
import { useEffect, useState } from 'react'
import { APIs } from '../../static'
import LoadingLottie from '../../components/lotties/LoadingLottie'
import NoPrevObjet from '../../components/objet/NoPrevObjet'
import { Carousel } from 'antd'
import banner1 from '../../assets/images/banner1.png'
import banner2 from '../../assets/images/banner2.png'

export default function Home() {
  const [objets, setObjets] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(APIs.objetPreview, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        })

        if (response.ok) {
          const responseData = await response.json()
          setObjets(responseData.data)
        }
      } catch (error) {
        console.error('Failed to fetch objet preview', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <Layout style={{ padding: '0px' }}>
      <GloablContainer16 style={{ padding: '0px' }}>
        <Carousel arrows autoplay autoplaySpeed={2500}>
          <BannerImage src={banner2} />
          <BannerImage src={banner1} />
          <BannerVideo
            autoPlay
            muted
            loop
            playsInline
            src='https://oopy.lazyrockets.com/api/v2/notion/fileUrl?src=https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F38552da6-340d-42c1-a9a1-b181ff331f03%2F64583d5a-5694-4c0e-9180-31e58fdd001a%2F%25E1%2584%258C%25E1%2585%25A6%25E1%2584%258C%25E1%2585%25AE_(PC).mp4&blockId=8e6adf11-495d-4115-ba04-12f87e247b9f#t=0.0001'
          ></BannerVideo>
        </Carousel>

        <MyObjetContainer>
          <MyObjetTitle>👀 최근 오브제를 확인해보세요!</MyObjetTitle>
          {isLoading ? (
            <LottieContainer>
              <LoadingLottie />
            </LottieContainer>
          ) : objets?.length === 0 || !objets ? (
            <NoPrevObjet />
          ) : (
            <ObjetPreview objets={objets} />
          )}
        </MyObjetContainer>
      </GloablContainer16>
    </Layout>
  )
}
