'use client'

import PodcastList from '@/components/PodcastList'
import usePodcast from '@/hooks/usePodcast'
import { ChangeEvent, useMemo, useState } from 'react'
// import FilterPodcast from '@/components/FilterPodcast'

export default function HomePage () {
  const { podcastEntries, loading } = usePodcast()
  const [filterPodcast, setfilterPodcast] = useState<string | null>(null)

  const filterPodcastSearch = useMemo(() => {
    return typeof filterPodcast === 'string' && filterPodcast.length > 0
      ? podcastEntries?.filter(item => {
        return item.title.toLowerCase().includes(filterPodcast.toLowerCase()) ||
                item.author.toLowerCase().includes(filterPodcast.toLowerCase())
      })
      : podcastEntries
  }, [podcastEntries, filterPodcast])

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setfilterPodcast(e.target.value)
  }

  return (
    <main>
      {/* <FilterPodcast /> */}
      <div>
        <span>{filterPodcastSearch?.length}</span><input type='text' className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 rounded-md sm:text-sm focus:ring-1' onChange={handleOnchange} placeholder='Filter podcast...' />
      </div>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {loading && filterPodcastSearch?.map(content => (
          <div key={content.id} className='border-solid border-1 p20 shadow-lg shadow-gray'>
            <PodcastList items={content} />
          </div>
        ))}

      </section>
    </main>
  )
}
