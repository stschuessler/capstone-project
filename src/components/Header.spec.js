import { render, screen } from '@testing-library/react'
import Header from './Header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('has two buttons', () => {
    render(<Header />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(2)
  })

  it('calls the onFilter function when the filter-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Header onClickEntries={mockOnClick} />)
    const allEntriesButton = screen.getByText('Alle Einträge')
    userEvent.click(allEntriesButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('calls the onFilter function when the filter-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Header onClickFavorites={mockOnClick} />)
    const filterButton = screen.getByText('Favoriten')
    userEvent.click(filterButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('has the correct button text', () => {
    render(<Header />)

    const textEntry = screen.getByText('Alle Einträge')
    const textFavorites = screen.getByText('Favoriten')

    expect(textEntry).toBeInTheDocument()
    expect(textFavorites).toBeInTheDocument()
  })
})
