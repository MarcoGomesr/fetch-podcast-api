'use client'

import PodcastList from '@/components/podcastList'
import usePodcast from '@/hook/usePodcast'

export default function HomePage () {
  const { data, loading } = usePodcast()

  if (loading) return <span>Loading...</span>

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <h1>Podcaster</h1>
      <section className=' grid gap-4'>
        {data && data?.map(content => (
          <div key={content.id.attributes['im:id']} className='border-solid border-1 p20 shadow-lg shadow-gray'>
            <PodcastList items={content} />
          </div>
        ))}

      </section>
    </main>
  )
}
