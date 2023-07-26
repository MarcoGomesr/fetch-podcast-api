import React from 'react'
import Image from 'next/image'
import { Entry } from '../types'

interface Props {
  items: Entry
}

function podcastList ({ items }:Props) {
  return (
    <>
      <Image width={Number(items['im:image'][2].attributes.height)} height={Number(items['im:image'][2].attributes.height)} src={items['im:image'][2].label} alt='Podcast Cover' />
      <h2>{items['im:name'].label}</h2>
      <p>Author: <span>{items['im:artist'].label}</span></p>
    </>
  )
}

export default podcastList
