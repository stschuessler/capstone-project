// import img1 from './images/bluse-floral.png'
// import img2 from './images/pullover-gruen.png'
// import img3 from './images/pullover-rosa.png'
// import img4 from './images/t-shirt-floral.png'
import Clothing from './components/Clothing'
import styled from 'styled-components/macro'

const INITIAL_DATA = [
  { id: '1', imageUrl: '/images/bluse-floral.png' },
  { id: '2', imageUrl: '/images/pullover-gruen.png' },
  { id: '3', imageUrl: '/images/pullover-rosa.png' },
  { id: '4', imageUrl: '/images/t-shirt-floral.png' },
  { id: '5', imageUrl: '/images/bluse-floral.png' },
  { id: '6', imageUrl: '/images/pullover-gruen.png' },
  { id: '7', imageUrl: '/images/pullover-rosa.png' },
  { id: '8', imageUrl: '/images/t-shirt-floral.png' },
]
console.log(INITIAL_DATA)

function App() {
  return (
    <StyledMain>
      {INITIAL_DATA.map((data) => (
        <Clothing key={data.id} imageUrl={data.imageUrl} />
      ))}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default App
