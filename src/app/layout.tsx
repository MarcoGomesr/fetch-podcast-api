import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prueba front-end INDITEX',
  description: 'Prueba técnica de front-end para INDITEX'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='container mx-auto py-8 overflow-x-hidden'>
        <Header />
        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
