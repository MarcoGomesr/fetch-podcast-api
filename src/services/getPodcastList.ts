import { Podcast } from '@/types'

export default async function getPodcastList () {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')

  if (!res.ok) throw new Error('Fetch failed')

  const data:Podcast = await res.json()

  const listOfPodcasts = data.feed.entry.map(item => {
    return {
      id: item.id.attributes['im:id'],
      title: item['im:name'].label,
      author: item['im:artist'].label,
      image: item['im:image'][2].label
    }
  })

  return listOfPodcasts
}
