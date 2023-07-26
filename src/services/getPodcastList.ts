export default async function getPodcastList () {
  const res = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')

  if (!res.ok) throw new Error('Fetch failed')

  return res.json()
}
