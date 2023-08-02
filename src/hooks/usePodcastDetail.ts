import { PodcastDetailPros } from '@/types'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'
import getPodcastDetail from '@/services/getPodcastDetail'

export default function usePodcastDetail (PodcastId: string) {
  const [podcastDetail, setPodcastDetail] = useState<PodcastDetailPros[]| Error >([])

  useEffect(() => {
    const cookieMyPodcastsDetail = getLocalStorageWithExpiry('myPodcastsDetail')
    const cookieParser = cookieMyPodcastsDetail !== null && JSON.parse(cookieMyPodcastsDetail)

    if (cookieMyPodcastsDetail !== null) {
      setPodcastDetail(JSON.parse(cookieParser.value))
      return
    }

    async function fetchData () {
      try {
        const data = await getPodcastDetail(PodcastId)
        setPodcastDetail(data)

        // parse name author
        if (Array.isArray(data) && data[0] !== undefined) {
          const author = data[0]?.author?.replaceAll(' ', '-')
          const dataParser = JSON.stringify(data)

          if (author !== undefined) {
            setLocalStorageWithExpiry(author, dataParser, 1)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [PodcastId])

  return {
    podcastDetail
  }
}
