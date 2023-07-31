'use client'
import Link from 'next/link'

export default function Header () {
  return (

    <header className='border-b border-gray-300 pb-3 mb-5 flex justify-between relative'>
      <h1>
        <Link href='/' className='text-blue-500 font-bold'>
          Podcaster
        </Link>
      </h1>

    </header>
  )
}
