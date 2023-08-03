import getPodcastDetail from '@/services/getPodcastDetail'
import getPodcastList from '@/services/getPodcastList'
import FeaturePodcastAside from '@/components/FeaturePodcastAside'

interface Props {
  children: React.ReactNode,
  params: {
    podcastId: string
  }
}

export default async function podcastDetailsLayout ({ children, params: { podcastId } }: Props) {
  const podcastDetail = await getPodcastDetail(podcastId)
  const podcast = await getPodcastList()

  // get content for feature podcast
  const filteredData = Object.fromEntries(
    Object.entries(podcastDetail).filter(([_, value]) => value.type === 'track')
  )

  // get podcast desscription
  const podcastDescription = Object.fromEntries(
    Object.entries(podcast).filter(([_, value]) => value.id === podcastId
    )
  )

  // check description has content
  const description = (Object.keys(podcastDescription).length > 0) ? Object.values(podcastDescription)[0].description : 'No description available'

  return (
    <>
      <div className='flex align-top justify-between'>
        <FeaturePodcastAside content={filteredData[0]} description={description} podcastId={podcastId} />

        {children}
      </div>
    </>
  )
}

export async function generateMetadata ({ children, params: { podcastId } }: Props) {
  const podcastDetail = await getPodcastDetail(podcastId)
  // get podcast desscription
  if (Array.isArray(podcastDetail)) {
    const [{ title }] = podcastDetail.filter(({ type }) => type === 'track')

    return {
      title
    }
  }
}
