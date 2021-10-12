import Clothing from './components/Clothing'
import styled from 'styled-components/macro'
import data from './mockup-data'

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
