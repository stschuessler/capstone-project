import { render, screen } from '@testing-library/react'
import Categories from './Categories'
import userEvent from '@testing-library/user-event'

describe('Categories', () => {
  const mockCategories = ['Hose', 'Jacke']

  it('has a form', () => {
    render(<Categories categories={true} uniqueCategories={mockCategories} />)

    const form = screen.getByLabelText('Hose')

    expect(form).toBeInTheDocument()
  })

  it('has an input field with the expected category text', () => {
    render(<Categories categories={true} uniqueCategories={mockCategories} />)

    const firstInputField = screen.getByDisplayValue('Hose')
    const secondInputField = screen.getByDisplayValue('Jacke')

    expect(firstInputField).toBeInTheDocument()
    expect(secondInputField).toBeInTheDocument()
  })

  it('has three buttons', () => {
    render(<Categories categories={true} uniqueCategories={mockCategories} />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(3)
  })

  it('calls the onClickExit function when the exit-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(
      <Categories
        categories={true}
        onClickExit={mockOnClick}
        uniqueCategories={mockCategories}
      />,
    )
    const exitButton = screen.getByText('Abbrechen')
    userEvent.click(exitButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('hides all elements when clicking the exit-button', () => {
    const mockOnClick = jest.fn()

    render(
      <Categories
        categories={true}
        onClickExit={mockOnClick}
        uniqueCategories={mockCategories}
      />,
    )
    const exitButton = screen.getByText('Abbrechen')
    userEvent.click(exitButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('has the correct button text', () => {
    render(<Categories categories={true} uniqueCategories={mockCategories} />)

    const textLoadButton = screen.getByText('Auswahl anzeigen')
    const textClearButton = screen.getByText('Neue Auswahl')
    const textExitButton = screen.getByText('Abbrechen')

    expect(textLoadButton).toBeInTheDocument()
    expect(textClearButton).toBeInTheDocument()
    expect(textExitButton).toBeInTheDocument()
  })
})
