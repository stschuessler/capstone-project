import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Bookmark from './Bookmark'

describe('Bookmark', () => {
  it('has a bookmark image', () => {
    render(<Bookmark />)

    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
  })

  it('has an alt attribute', () => {
    render(<Bookmark />)

    const alt = screen.getByAltText('Bookmark clothing')

    expect(alt).toBeInTheDocument()
  })

  it('has a disabled button', () => {
    render(<Bookmark />)

    const bookmarkButton = screen.getByRole('button')

    expect(bookmarkButton).toBeInTheDocument()
    const alt = screen.getByAltText('Bookmark clothing')
  })

  it('has an active button', () => {
    render(<Bookmark />)

    const bookmarkButton = screen.getByRole('button')
    userEvent.click(bookmarkButton)

    const alt = screen.getByAltText('Remove bookmark')

    expect(alt).toBeInTheDocument()
  })

  it('image of active button only renders after clicking button', () => {
    render(<Bookmark />)

    const bookmarkButton = screen.getByRole('button')

    const alt = screen.queryByAltText('Remove bookmark')

    expect(alt).not.toBeInTheDocument()
  })
})
