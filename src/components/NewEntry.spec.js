import { fireEvent, render, screen } from '@testing-library/react'
import NewEntry from './NewEntry'
import userEvent from '@testing-library/user-event'

describe('NewEntry', () => {
  it('has radio input fields with the expected text', () => {
    render(<NewEntry />)

    const firstInputField = screen.getByDisplayValue('weiß')
    const secondInputField = screen.getByDisplayValue('einfarbig')
    const thirdInputField = screen.getByDisplayValue('Baumwolle')
    const forthInputField = screen.getByDisplayValue('Figurbetont')

    expect(firstInputField).toBeInTheDocument()
    expect(secondInputField).toBeInTheDocument()
    expect(thirdInputField).toBeInTheDocument()
    expect(forthInputField).toBeInTheDocument()
  })

  it('has two input fields with the expected label-texts', () => {
    render(<NewEntry />)

    const labelText1 = screen.getByLabelText(
      'Gib einen Namen für dein Kleidungsstück ein:',
    )

    const labelText2 = screen.getByLabelText(
      'Zu welcher Kategorie soll das Kleidungsstück hinzugefügt werden?',
    )

    expect(labelText1).toBeInTheDocument()
    expect(labelText2).toBeInTheDocument()
  })

  it('has 2 input fields of the textbox type', () => {
    render(<NewEntry />)

    const inputField = screen.getAllByRole('textbox')

    expect(inputField).toHaveLength(2)
  })

  it('has 32 input fields of the radio type', () => {
    render(<NewEntry />)

    const inputField = screen.getAllByRole('radio')

    expect(inputField).toHaveLength(32)
  })

  xit('has 34 input fields which are required', () => {
    render(<NewEntry />)

    const inputFieldType1 = screen.getAllByRole('input')
    const inputFieldType2 = screen.getAllByRole('radio')

    expect(inputFieldType1).toBeRequired()
    expect(inputFieldType2).toBeRequired() // funktiniert nich bei Arrays
  })

  xit('has nine input fields of the category of color', () => {
    render(<NewEntry />)

    const inputField1 = screen.getByDisplayValue(`weiß`)
    const inputField2 = screen.getByDisplayValue(`schwarz`)
    const inputField3 = screen.getByDisplayValue(`grün`)
    const inputField4 = screen.getByDisplayValue(`gelb`)
    const inputField5 = screen.getByDisplayValue(`blau`)
    const inputField6 = screen.getByDisplayValue(`rosa`)
    const inputField7 = screen.getByDisplayValue(`lila`)
    const inputField8 = screen.getByDisplayValue(`pink`)
    const inputField9 = screen.getByDisplayValue(`keine`)

    expect(inputField1).toBeInTheDocument()
    expect(inputField2).toBeInTheDocument()
    expect(inputField3).toBeInTheDocument()
    expect(inputField4).toBeInTheDocument()
    expect(inputField5).toBeInTheDocument()
    expect(inputField6).toBeInTheDocument()
    expect(inputField7).toBeInTheDocument()
    expect(inputField8).toBeInTheDocument()
    expect(inputField9).toBeInTheDocument()
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

  it('sends form', () => {
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

    const inputColor = screen.getByDisplayValue('gelb')
    userEvent.click(inputColor)

    const inputPattern = screen.getByDisplayValue('geblümt')
    userEvent.click(inputPattern)

    const inputMaterial = screen.getByDisplayValue('Leinen')
    userEvent.click(inputMaterial)

    const inputFitting = screen.getByDisplayValue('Oversize')
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
      imageUrl: expect.any(String), // cloudinary einbinden
      isBookmarked: false,
    })
  })
})
