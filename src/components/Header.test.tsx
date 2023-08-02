import { it, describe, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Header from './Header'
import useLoadingBounce from '@/hooks/useLoadingBounce'
import { renderHook } from '@testing-library/react-hooks'
expect.extend(matchers)

beforeAll(() => {
  render(<Header />)
})

describe('Header_function', () => {
  // Tests that Header renders without errors
  it('renders without errors', () => {
  })

  // Tests that Header displays the correct title
  it('displays the correct title', () => {
    const title = screen.getByText('Podcaster')
    expect(title).toBeInTheDocument()
  })

  // Tests that Header displays the correct link
  it('displays the correct link', () => {
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })

  // Tests that Header dont display loading animation
  it('dont show loading animation when loading is false', () => {
    const { result } = renderHook(() => useLoadingBounce())

    expect(result.current.loading).toBe(false)
  })
})
