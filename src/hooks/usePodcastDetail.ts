import getPodcastList from '@/services/getPodcastList'
import { PodcastDetail, PodcastDetailPros, PodcastProps } from '@/types'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'
import getPodcastDetail from '@/services/getPodcastDetail'

export default function usePodcastDetail (PodcastId: string) {
  const [loading, setLoading] = useState<boolean>(true)
  const [podcastDetail, setPodcastDetail] = useState<PodcastDetailPros| null>(null)

  useEffect(() => {
    const cookieMyPodcastsDetail = getLocalStorageWithExpiry('myPodcastsDetail')
    const cookieParser = cookieMyPodcastsDetail !== null && JSON.parse(cookieMyPodcastsDetail)

    if (cookieMyPodcastsDetail !== null) {
      // console.log(JSON.parse(cookieValue))
      setPodcastDetail(JSON.parse(cookieParser.value))
      return
    }

    async function fetchData () {
      try {
        const data: Promise<PodcastDetailPros> = await getPodcastDetail(PodcastId)
        setLoading(true)
        setPodcastDetail(data)

        const author = data[0].author.replaceAll(' ', '-')
        const dataParser = JSON.stringify(data)

        setLocalStorageWithExpiry(author, dataParser, 1)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [PodcastId])

  return {
    loading,
    data: podcastDetail
  }
}
