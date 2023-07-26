import React from 'react'
import Image from 'next/image'
import { PodcastProps } from '../types'
import Link from 'next/link'

interface Props {
  items: PodcastProps
}

function podcastList ({ items }: Props) {
  return (
    <Link href='/podcast/'>
      <Image width={150} height={150} src={items.image} alt='Podcast Cover' />
      <h2>{items.title}</h2>
      <p>Author: <span>{items.author}</span></p>
    </Link>
  )
}

export default podcastList
