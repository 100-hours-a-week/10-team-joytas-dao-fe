import Layout from '../../components/Layout'
import LoungeContainer from '../../components/lounge/LoungeContainer'
import {
  GloablContainer16,
  GlobalSubTitle,
  GlobalTitle,
} from '../../global/globalStyles'
import { LoungeList } from './LoungeStyles'
import { useState, useEffect } from 'react'
import { APIs } from '../../static'

export interface LoungeProps {
  lounge_id: number
  name: string
  type: string
}

export default function LoungeListPage() {
  const [loungeList, setLoungeList] = useState<LoungeProps[]>([])
  const getLoungeList = async () => {
    try {
      const response = await fetch(APIs.loungeList, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
      })
      if (response.status === 200) {
        const responseData = await response.json()
        return responseData.data
      } else {
        throw new Error('Failed to fetch lounge list')
      }
    } catch (error) {
      console.error('Failed to fetch lounge list', error)
    }
  }

  useEffect(() => {
    const fetchAndSetLoungeList = async () => {
      const loungeList = await getLoungeList()
      if (loungeList) {
        setLoungeList(loungeList)
      }
    }

    fetchAndSetLoungeList()
  }, [])

  return (
    <Layout>
      <GloablContainer16>
        <GlobalTitle>추억할 라운지를 보여드릴게요...</GlobalTitle>
        <GlobalSubTitle>
          라운지를 클릭해 입장하거나, 라운지를 생성해보세요!
        </GlobalSubTitle>
        <LoungeList>
          <LoungeContainer loungeList={loungeList} />
        </LoungeList>
      </GloablContainer16>
    </Layout>
  )
}
