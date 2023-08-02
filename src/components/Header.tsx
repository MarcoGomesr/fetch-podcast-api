'use client'
import useLoadingBounce from '@/hooks/useLoadingBounce'
import Link from 'next/link'

export default function Header () {
  const { loading } = useLoadingBounce()
  return (

    <header className='border-b border-gray-300 pb-3 mb-5 flex justify-between'>
      <h1>
        <Link href='/' className='text-blue-500 font-bold'>
          Podcaster
        </Link>
      </h1>
      {loading && (
        <div>
          <div className='w-4 h-4 bg-blue-600 rounded-full animate-bounce ' />
        </div>
      )}

    </header>
  )
}
