import getPodcastList from '@/services/getPodcastList'
import { PodcastProps } from '@/types'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'

export default function usePodcast () {
  const [loading, setLoading] = useState<boolean>(true)
  const [podcastEntries, setPodcastEntries] = useState<PodcastProps[]| null>(null)

  useEffect(() => {
    const cookieValue = getLocalStorageWithExpiry('myPodcasts')
    const cookieParser = cookieValue !== null && JSON.parse(cookieValue)

    if (cookieValue !== null) {
      // console.log(JSON.parse(cookieValue))
      setPodcastEntries(JSON.parse(cookieParser.value))
      return
    }

    async function fetchData () {
      try {
        const data: PodcastProps[] = await getPodcastList()
        setLoading(true)
        setPodcastEntries(data)

        const dataParser = JSON.stringify(data)
        setLocalStorageWithExpiry('myPodcasts', dataParser, 1)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return {
    loading,
    podcastEntries
  }
}
