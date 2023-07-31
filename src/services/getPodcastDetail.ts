import { PodcastDetail, PodcastDetailPros } from '@/types.d'

export default async function getPodcastDetail (podcastId: string) {
  const res = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=`)
  if (!res.ok) return new Error('Failed to fetch')

  const data: PodcastDetail = await res.json()

  const postcastDetail: PodcastDetailPros = data.results.map(detail => {
    return {
      type: detail.wrapperType,
      author: detail.artistName,
      description: detail.description,
      episodes: detail.trackCount,
      image: detail.artworkUrl600,
      id: detail.episodeGuid,
      release: detail.releaseDate,
      title: detail.trackName,
      duration: detail.trackTimeMillis,
      mediaType: detail.episodeContentType,
      episodeUrl: detail.episodeUrl
    }
  })

  return postcastDetail

  // console.log(data)
  // return data
}
