'use client'

import usePodcastDetail from '@/hooks/usePodcastDetail'
import { PodcastDetailPros } from '@/types'

import { getDateFormatter } from '@/utils/dateFormat'
import { getDurationFormat } from '@/utils/durationFormat'
import Link from 'next/link'

type Params = {
  params: {
    podcastId: string
  }
}

export default function PodcastDescriptionPage ({ params: { podcastId } }: Params) {
  const { podcastDetail } = usePodcastDetail(podcastId)

  const featurePodcastSummary = podcastDetail && podcastDetail?.filter(detail => detail.type === 'track')

  return (

    <div className='basis-[70%]'>
      <div className='shadow-md p-2 mb-8 text-2xl font-bold border border-1 border-gray-300'>
        <p>Episodes: <span>{featurePodcastSummary && featurePodcastSummary[0]?.episodes}</span> </p>
      </div>
      <div className=' text-sm text-left text-gray-500 border border-1 border-gray-300  py-4 px-5'>
        <table className='w-full'>
          <thead className='text-xs text-gray-700 font-bold border-b-3'>
            <tr>
              <th scope='col' className='px-3 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3 text-center'>
                Duration
              </th>
            </tr>
          </thead>

          <tbody>
            {podcastDetail && podcastDetail?.filter(item => item.type !== 'track').map((detail, index) =>
              (
                <tr key={index} className='bg-white border-b hover:bg-gray-100 odd:bg-slate-50 even:bg-white'>
                  <th scope='row' className='px-3 py-4 font-medium text-gray-900 whitespace-nowrap '>
                    <Link href={`/podcast/${podcastId}/episode/${detail.id}`} className='text-blue-500'>{detail.title}</Link>
                  </th>
                  <td className='px-6 py-4'>
                    {getDateFormatter(detail.release)}
                  </td>
                  <td className='px-6 py-4 text-center'>
                    {getDurationFormat(detail.duration)}
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
