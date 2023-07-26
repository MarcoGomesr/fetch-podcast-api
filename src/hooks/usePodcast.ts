import getPodcastList from '@/services/getPodcastList'
import { Entry, Podcast } from '@/types'
import { useEffect, useState } from 'react'

import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@/utils/localStorage'

export default function usePodcast () {
  const [loading, setLoading] = useState<boolean>(true)
  const [podcastEntry, setPodcastEntry] = useState<Entry[]| null>(null)

  useEffect(() => {
    const cookieValue = getLocalStorageWithExpiry('myPodcasts')
    const cookieParser = cookieValue !== null && JSON.parse(cookieValue)

    if (cookieValue !== null) {
      // console.log(JSON.parse(cookieValue))
      setPodcastEntry(JSON.parse(cookieParser.value))
      return
    }

    async function fetchData () {
      try {
        const data: Podcast = await getPodcastList()
        setLoading(true)
        setPodcastEntry(data.feed.entry)

        const dataParser = JSON.stringify(data.feed.entry)
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
    data: podcastEntry
  }
}
