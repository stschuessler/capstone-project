import { getAllByRole, render, screen } from '@testing-library/react'
import Header from './Header'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('has two buttons', () => {
    render(<Header onClickEntries={jest.fn()} onClickFilter={jest.fn()} />)

    const allButtons = screen.getAllByRole('button')

    expect(allButtons).toHaveLength(2)
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

    render(<Header onClickFilter={mockOnClick} />)
    const filterButton = screen.getByText('Favoriten')
    userEvent.click(filterButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('has the correct button text', () => {
    render(<Header onClickEntries={jest.fn()} onClickFilter={jest.fn()} />)

    const textEntry = screen.getByText('Alle Einträge')
    const textFavorites = screen.getByText('Favoriten')

    expect(textEntry).toBeInTheDocument()
    expect(textFavorites).toBeInTheDocument()
  })
})
