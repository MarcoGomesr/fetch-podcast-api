import { describe, it, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'

import PodcastList from './PodcastList'

const mockData = { id: '1', title: 'Test Podcast', author: 'Test Author', image: '/test-image.jpg' }
beforeAll(() => {
  // This will run once before all the tests in this suite
  render(<PodcastList items={mockData} />)
})

describe('podcastList_function', () => {
  // Tests that the component renders with valid props
  it('renders with valid props', () => {
    const linkElement = screen.getByRole('link', { name: /Test Podcast/i })

    const img = screen.getByRole('img', {
      name: /podcast cover/i
    })
    const title = screen.getByRole('heading', {
      name: /test podcast/i
    })

    expect(linkElement).toBeDefined()
    expect(title).toBeDefined()
    expect(img).toBeDefined()
  })

  // Tests that it load the correct URL
  it('redirects to correct url', () => {
    const linkElement = screen.getByRole('link', { name: /Test Podcast/i })
    const hrefValue = linkElement.getAttribute('href')

    expect(hrefValue).toBe('/podcast/1')
  })
})
