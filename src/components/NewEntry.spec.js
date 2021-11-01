import { render, screen } from '@testing-library/react'
import NewEntry from './NewEntry'
import userEvent from '@testing-library/user-event'

describe('NewEntry', () => {
  it('has radio input fields with the expected text', () => {
    render(<NewEntry />)

    const colorSubcategory = screen.getByDisplayValue('weiß')
    const patternSubcategory = screen.getByDisplayValue('einfarbig')
    const materialSubcategory = screen.getByDisplayValue('Baumwolle')
    const fittingSubcategory = screen.getByDisplayValue('Figurbetont')

    expect(colorSubcategory).toBeInTheDocument()
    expect(patternSubcategory).toBeInTheDocument()
    expect(materialSubcategory).toBeInTheDocument()
    expect(fittingSubcategory).toBeInTheDocument()
  })

  it('has two input fields with the expected label-texts', () => {
    render(<NewEntry />)

    const entryTitel = screen.getByLabelText(
      'Gib einen Namen für dein Kleidungsstück ein:',
    )

    const entryCategory = screen.getByLabelText(
      'Zu welcher Kategorie soll das Kleidungsstück hinzugefügt werden?',
    )

    expect(entryTitel).toBeInTheDocument()
    expect(entryCategory).toBeInTheDocument()
  })

  it('has 2 input fields of the textbox type', () => {
    render(<NewEntry />)

    const textboxType = screen.getAllByRole('textbox')

    expect(textboxType).toHaveLength(2)
  })

  it('has 32 input fields of the radio type', () => {
    render(<NewEntry />)

    const radioType = screen.getAllByRole('radio')

    expect(radioType).toHaveLength(32)
  })

  xit('has 34 input fields which are required', () => {
    render(<NewEntry />)

    const inputType = screen.getAllByRole('textbox')
    const radioType = screen.getAllByRole('radio')

    expect(inputType).toBeRequired()
    expect(radioType).toBeRequired()
  })

  it('has three buttons', () => {
    render(<NewEntry />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(3)
  })

  it('calls the onNavigate function when the exit-button is clicked', () => {
    const mockOnClick = jest.fn()

    render(<NewEntry onNavigate={mockOnClick} />)
    const exitButton = screen.getByText('Abbrechen')
    userEvent.click(exitButton)

    expect(mockOnClick).toHaveBeenCalled()
  })

  it('has the correct button text', () => {
    render(<NewEntry />)

    const textSubmitButton = screen.getByText('Eintrag erstellen')
    const textClearButton = screen.getByText('Neue Auswahl')
    const textExitButton = screen.getByText('Abbrechen')

    expect(textSubmitButton).toBeInTheDocument()
    expect(textClearButton).toBeInTheDocument()
    expect(textExitButton).toBeInTheDocument()
  })

  xit('sends form', () => {
    const mockOnClick = jest.fn()

    render(<NewEntry onNewEntry={mockOnClick} />)

    const inputCategory = screen.getByLabelText(
      'Zu welcher Kategorie soll das Kleidungsstück hinzugefügt werden?',
    )
    userEvent.type(inputCategory, 'Pullover')

    const inputTitle = screen.getByLabelText(
      'Gib einen Namen für dein Kleidungsstück ein:',
    )
    userEvent.type(inputTitle, 'Lieblingspulli')

    const inputColor = screen.getByRole('radio', { value: 'gelb' })
    userEvent.click(inputColor)

    const inputPattern = screen.getByLabelText('geblümt')
    userEvent.click(inputPattern)

    const inputMaterial = screen.getByLabelText('Leinen')
    userEvent.click(inputMaterial)

    const inputFitting = screen.getByLabelText('Oversize')
    userEvent.click(inputFitting)

    const submitButton = screen.getByText('Eintrag erstellen')
    userEvent.click(submitButton)

    expect(mockOnClick).toHaveBeenCalledWith({
      id: expect.any(String),
      category: 'Pullover',
      title: 'Lieblingspulli',
      color: 'gelb',
      pattern: 'geblümt',
      material: 'Leinen',
      fitting: 'Oversize',
      imageUrl: expect.any(String),
      isBookmarked: false,
    })
  })
})
