'use client'

import PodcastList from '@/components/PodcastList'
import usePodcast from '@/hooks/usePodcast'
import { ChangeEvent, useMemo, useState } from 'react'
import useLoadingBounce from '@/hooks/useLoadingBounce'
export default function HomePage () {
  const { loading } = useLoadingBounce()
  const { podcastEntries } = usePodcast()
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

  if (loading) return null
  return (
    <>
      <div className='flex flex-row justify-end items-center'>
        <span className='bg-blue-600 rounded text-white w-8 text-center text-sm mr-2'>
          {filterPodcastSearch?.length}
        </span>
        <input type='text' className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 rounded-md sm:text-sm focus:ring-1' onChange={handleOnchange} placeholder='Filter podcast...' />
      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {filterPodcastSearch?.map(content => (
          <div key={content.id} className='mt-[100px]'>
            <PodcastList items={content} />
          </div>
        ))}

      </section>
    </>
  )
}
