import React from 'react'
import Image from 'next/image'
import { Entry } from '../types'

interface Props {
  items: Entry
}

function podcastList ({ items }:Props) {
  return (
    <>
      <h2>{items.title.label}</h2>
      <p>Author: <span>{items['im:artist'].label}</span></p>
      <Image width={Number(items['im:image'][2].attributes.height)} height={Number(items['im:image'][2].attributes.height)} src={items['im:image'][2].label} alt='Podcast Cover' />
    </>
  )
}

export default podcastList
