import { render, screen } from '@testing-library/react'
import Header from './Header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('has three buttons', () => {
    render(<Header />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(3)
  })

  it('calls the onClickEntries function when the all-entry-filter-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Header onClickEntries={mockOnClick} />)
    const allEntriesButton = screen.getByText('Alle Einträge')
    userEvent.click(allEntriesButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('calls the onClickFavorites function when the favorite-filter-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Header onClickFavorites={mockOnClick} />)
    const filterButton = screen.getByText('Favoriten')
    userEvent.click(filterButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('calls the onClickCategories function when the category-filter-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Header onClickCategories={mockOnClick} />)
    const categoryButton = screen.getByText('Kategorien')
    userEvent.click(categoryButton)

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
