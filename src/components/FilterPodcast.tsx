import { Entry } from '@/types.d'
import { ChangeEvent } from 'react'

interface Props {
  content: Entry[],
  setContent: (entry: Entry) =>{}
}

export default function FilterPodcast ({ content, setContent }: Props) {
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredSearch = content.filter(item => {
      return item.title.label.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item['im:artist'].label.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log('filteredSear', filteredSearch)
    console.log('content', content)
    // setContent(filteredSearch)
  }

  return (
    <div>
      <input type='text' className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 rounded-md sm:text-sm focus:ring-1' onChange={handleOnchange} />
    </div>
  )
}
