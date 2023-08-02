import { PodcastDetail } from '@/types.d'

export default async function getPodcastDetail (podcastId: string) {
  const params = new URLSearchParams({ id: podcastId, media: 'podcast', entity: 'podcastEpisode', limit: '' })
  const res = await fetch(`https://itunes.apple.com/lookup?${params}`)

  if (!res.ok) return new Error('Failed to fetch')

  const data: PodcastDetail = await res.json()

  const postcastDetail = data.results.map(detail => {
    if (detail.wrapperType === 'track') {
      return {
        type: detail.wrapperType,
        author: detail.artistName,
        episodes: detail.trackCount,
        image: detail.artworkUrl600,
        release: detail.releaseDate,
        title: detail.trackName,
        duration: detail.trackTimeMillis
      }
    }

    return {
      type: detail.wrapperType,
      description: detail.description,
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
}
