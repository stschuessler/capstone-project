import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Clothing from './Clothing'

describe('Clothing', () => {
  const title = 'Hose'
  const color = 'blau'
  const pattern = 'gestreift'
  const material = 'Jeansstoff'
  const fitting = 'figurbetont'
  const imageUrl = 'http://hp-api.herokuapp.com/images/harry.jpg'
  const isBookmarked = false
  const mockHandleBookmark = jest.fn()

  it('has an bookmark image', () => {
    render(<Clothing />)

    const img = screen.getByAltText('Bookmark clothing')

    expect(img).toBeInTheDocument()
  })

  it('has an clothing image', () => {
    render(<Clothing imageUrl={imageUrl} />)

    const img = screen.getByAltText('')

    expect(img).toBeInTheDocument()
  })

  it('has an alt attribute', () => {
    render(<Clothing imageUrl={imageUrl} />)

    const url = screen.getByAltText('')

    expect(url).toBeInTheDocument()
  })

  it('has two buttons', () => {
    render(<Clothing imageUrl={imageUrl} />)

    const imageButton = screen.getAllByRole('button')

    expect(imageButton).toHaveLength(2)
  })

  it('does not render any html elements', () => {
    render(
      <Clothing
        title={title}
        color={color}
        pattern={pattern}
        material={material}
        fitting={fitting}
        imageUrl={imageUrl}
      />,
    )
    const clothingTitle = screen.queryByRole('header')
    const clothingColor = screen.queryByText('Farbe: blau')
    const clothingPattern = screen.queryByText('Muster: gestreift')
    const clothingMaterial = screen.queryByText('Material: Jeansstoff')
    const clothingFitting = screen.queryByText('Passform: figurbetont')

    expect(clothingTitle).not.toBeInTheDocument()
    expect(clothingColor).not.toBeInTheDocument()
    expect(clothingPattern).not.toBeInTheDocument()
    expect(clothingMaterial).not.toBeInTheDocument()
    expect(clothingFitting).not.toBeInTheDocument()
  })

  it('it renders all html elements by clicking button', () => {
    render(
      <Clothing
        title={title}
        color={color}
        pattern={pattern}
        material={material}
        fitting={fitting}
        imageUrl={imageUrl}
      />,
    )

    const imageButton = screen.getByRole('button', { name: 'Show details' })
    userEvent.click(imageButton)

    const clothingTitle = screen.getByText('Hose')
    const clothingColor = screen.getByText('Farbe: blau')
    const clothingPattern = screen.getByText('Muster: gestreift')
    const clothingMaterial = screen.getByText('Material: Jeansstoff')
    const clothingFitting = screen.getByText('Passform: figurbetont')

    expect(clothingTitle).toBeInTheDocument()
    expect(clothingColor).toBeInTheDocument()
    expect(clothingPattern).toBeInTheDocument()
    expect(clothingMaterial).toBeInTheDocument()
    expect(clothingFitting).toBeInTheDocument()
  })
})
