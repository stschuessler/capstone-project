import { render, screen } from '@testing-library/react'
import Clothe from './Clothe'

describe('Clothe', () => {
  const imageUrl = 'http://hp-api.herokuapp.com/images/harry.jpg'

  it('has an image', () => {
    render(<Clothe imageUrl={imageUrl} />)

    const img = screen.getByRole('img')

    expect(img).toBeInTheDocument()
  })

  it('has a alt text', () => {
    render(<Clothe imageUrl={imageUrl} />)

    const url = screen.getByAltText('')

    expect(url).toBeInTheDocument()
  })
})
