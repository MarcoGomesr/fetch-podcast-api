'use client'

import usePodcastDetail from '@/hooks/usePodcastDetail'
import Image from 'next/image'
import { PodcastDetailPros } from '@/types'
import usePodcast from '@/hooks/usePodcast'
import { useEffect, useState } from 'react'

type Params = {
  params: {
    podcastId: string
  }
}

export default function PodcastDescriptionPage ({ params: { podcastId } }: Params) {
  // const podcastDetail: Promise<PodcastDetail> = await getPodcastDetail(podcastId)
  const { data, loading }: { data: PodcastDetailPros, loading: boolean} = usePodcastDetail(podcastId)
  const [podcastDescription, setPodcastDescription] = useState('')
  const { podcastEntries } = usePodcast()

  useEffect(() => {
    if (podcastEntries && podcastEntries?.length > 0) {
      const { description } = podcastEntries?.find(podcast => podcast.id === podcastId)
      description && setPodcastDescription(description)
    }
  }, [podcastEntries, podcastId])

  return (
    <div className='flex justify-between align-top'>
      {
        data && data[0].type === 'track' && (
          <aside className='basis-1/6'>
            <Image src={data[0].image} width={200} height={200} alt='' />
            <header>
              <h2>{data[0].author}</h2>
            </header>
            <hr />
            <h3>Description</h3>
            <p>{podcastDescription}</p>
          </aside>

        )
      }

      <div className='relative overflow-x-auto shadow-2xl shadow-gray-300 '>
        <div className='shadow p-2  mb-10'>
          <p>Episodes: <span>{data[0].episodes}</span> </p>
        </div>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Duration
              </th>
            </tr>
          </thead>

          <tbody>
            {data && data?.map((detail, index) =>
              (
                <tr key={index} className='bg-white border-b hover:bg-gray-50'>
                  <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
                    {detail.title}
                  </th>
                  <td className='px-6 py-4'>
                    {detail.release}
                  </td>
                  <td className='px-6 py-4'>
                    {detail.duration}
                  </td>

                </tr>

              )

            )}
          </tbody>
        </table>

      </div>
    </div>
  )
}
