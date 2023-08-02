'use client'

import usePodcastDetail from '@/hooks/usePodcastDetail'

import { getDateFormatter } from '@/utils/dateFormat'
import { getDurationFormat } from '@/utils/durationFormat'
import Link from 'next/link'
import useLoadingBounce from '@/hooks/useLoadingBounce'

type Params = {
  params: {
    podcastId: string
  }
}

export default function PodcastDescriptionPage ({ params: { podcastId } }: Params) {
  const { loading } = useLoadingBounce()
  const { podcastDetail } = usePodcastDetail(podcastId)

  const dataArrayValues = podcastDetail && Object.values(podcastDetail)
  const featurePodcastSummary = dataArrayValues && dataArrayValues.filter(detail => detail.type === 'track')

  const isValidURL = (text:string) => {
    const urlPattern = /http:|https:/i
    return urlPattern.test(text)
  }

  const customLink = (podcastId: string, detailId: string) => {
    return (isValidURL(detailId)) ? detailId : `/podcast/${podcastId}/episode/${detailId}`
  }
  if (loading) return null
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
            {dataArrayValues && dataArrayValues.filter(item => item.type !== 'track').map((detail, index) =>
              (
                <tr key={index} className='bg-white border-b hover:bg-gray-100 odd:bg-slate-50 even:bg-white'>
                  <th scope='row' className='px-3 py-4 font-medium text-gray-900 whitespace-nowrap '>
                    <Link href={customLink(podcastId, detail.id)} className='text-blue-500'>{detail.title}</Link>
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
