import { PodcastDetail } from '@/types.d'

export default async function getPodcastDetail (podcastId: string) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=`)
  if (!res.ok) return new Error('Failed to fetch')

  const data: PodcastDetail = await res.json()

  const postcastDetail = data.results.map(detail => {
    if (detail.wrapperType === 'track') {
      return {
        type: detail.wrapperType,
        author: detail.artistName,
        description: detail.description,
        episodes: detail.trackCount,
        image: detail.artworkUrl600
      }
    } else {
      return {
        id: detail.episodeGuid,
        type: detail.wrapperType,
        release: detail.releaseDate,
        title: detail.trackName,
        duration: detail.trackTimeMillis

      }
    }
  })

  return postcastDetail

  // console.log(data)
  // return data
}
