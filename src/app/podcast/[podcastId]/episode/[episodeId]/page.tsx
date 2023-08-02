import getPodcastDetail from '@/services/getPodcastDetail'
import React from 'react'

type Params = {
  params: {
    podcastId: string,
    episodeId: string
  }
}

export default async function episodeIdPage ({ params: { podcastId, episodeId } }: Params) {
  const podcastDetails = await getPodcastDetail(podcastId)

  const episodes = Object.fromEntries(
    Object.entries(podcastDetails).filter(([_, value]) => {
      return value.id === episodeId
    }
    ))

  const episodesValues = Object.values(episodes)[0]

  const { title, description, mediaType, episodeUrl } = episodesValues

  const hasHTML = /\n/i.test(description)
  let newDescription = ''

  if (hasHTML) {
    newDescription = description.replaceAll('\n', '<br />')
  }

  const descriptionContent = hasHTML
    ? <div className='italic text-sm text-gray-600' dangerouslySetInnerHTML={{ __html: newDescription }} />
    : <p className='italic text-sm text-gray-600'>{description}</p>

  return (
    <div className='basis-[70%]'>
      <article className='border p-5'>
        <h2 className='text-lg mb-2 font-bold'>{title}</h2>
        {descriptionContent}
        {mediaType === 'audio' && (
          <audio src={episodeUrl} controls className='w-full mt-7' />
        )}

      </article>

    </div>
  )
}
