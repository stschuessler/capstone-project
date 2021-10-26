import { render, screen } from '@testing-library/react'
import Header from './Header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('has three buttons', () => {
    render(<Header />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(3)
  })

  it('calls the onNavigate function when one of the buttons is clicked', () => {
    const mockOnClick = jest.fn()

    render(<Header onNavigate={mockOnClick} />)
    const allEntriesButton = screen.getByText('Alle Einträge')
    const filterButton = screen.getByText('Favoriten')
    const categoryButton = screen.getByText('Kategorien')
    userEvent.click(allEntriesButton)
    userEvent.click(filterButton)
    userEvent.click(categoryButton)

    expect(mockOnClick).toHaveBeenCalledWith('home')
    expect(mockOnClick).toHaveBeenCalledWith('favorites')
    expect(mockOnClick).toHaveBeenCalledWith('categories')
  })

  it('has the correct button text', () => {
    render(<Header />)

    const textEntry = screen.getByText('Alle Einträge')
    const textFavorites = screen.getByText('Favoriten')
    const textCategories = screen.getByText('Kategorien')

    expect(textEntry).toBeInTheDocument()
    expect(textFavorites).toBeInTheDocument()
    expect(textCategories).toBeInTheDocument()
  })
})
