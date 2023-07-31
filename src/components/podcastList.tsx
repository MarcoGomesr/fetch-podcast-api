import React from 'react'
import Image from 'next/image'
import { PodcastProps } from '../types'
import Link from 'next/link'

interface Props {
  items: PodcastProps
}
function podcastList ({ items }: Props) {
  return (
    <Link href={`/podcast/${items.id}`} className='relative'>
      <section className='border border-1 border-gray-300 shadow-md p-5 mb-5 transform transition-all hover:-translate-y-2 hover:shadow-xl'>
        <div className='flex flex-col items-center relative'>
          <div className='w-100 h-100 overflow-hidden -mt-16 '>
            <Image width={100} height={100} src={items.image} alt='Podcast Cover' className='border rounded-full' />
          </div>
          <h2 className='text-xl text-center text-gray-900 uppercase'>{items.title}</h2>
          <p className='mt-1 text-sm text-gray-700 whitespace-no-wrap overflow-hidden max-w-full'>
            Author: <span>{items.author}</span>
          </p>
        </div>
      </section>
    </Link>
  )
}
export default podcastList
