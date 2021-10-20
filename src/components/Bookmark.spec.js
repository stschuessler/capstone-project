import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Bookmark from './Bookmark'

const id = 1

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

  it('has a bookmark-button', () => {
    render(<Bookmark isBookmarked={false} />)

    const bookmarkButton = screen.getByRole('button')

    expect(bookmarkButton).toBeInTheDocument()
  })

  it('can have an inactive bookmark-button', () => {
    render(<Bookmark isBookmarked={false} />)

    const alt = screen.getByAltText('Bookmark clothing')

    expect(alt).toBeInTheDocument()
  })

  it('has an active bookmark-button', () => {
    render(<Bookmark isBookmarked={true} />)

    const alt = screen.getByAltText('Remove bookmark')

    expect(alt).toBeInTheDocument()
  })

  it('calls the onClicked function when the button is clicked', () => {
    const mockHandleBookmark = jest.fn()

    render(
      <Bookmark isBookmarked={true} onClickBookmark={mockHandleBookmark} />,
    )
    const img = screen.getByAltText('Remove bookmark')
    userEvent.click(img)

    expect(mockHandleBookmark).toBeCalled()
  })
})
