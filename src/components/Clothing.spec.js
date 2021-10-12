import { render, screen } from '@testing-library/react'
import Clothing from './Clothing'

describe('Clothing', () => {
  const imageUrl = 'http://hp-api.herokuapp.com/images/harry.jpg'

  it('has an image', () => {
    render(<Clothing imageUrl={imageUrl} />)

    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
  })

  it('has an alt attribute', () => {
    render(<Clothing imageUrl={imageUrl} />)

    const url = screen.getByAltText('')

    expect(url).toBeInTheDocument()
  })
})
