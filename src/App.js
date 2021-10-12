import Clothing from './components/Clothing'
import styled from 'styled-components/macro'
import data from './mockup-data'

function App() {
  return (
    <StyledMain>
      {data.map((data) => (
        <Clothing
          key={data.id}
          titel={data.titel}
          color={data.color}
          pattern={data.pattern}
          material={data.material}
          fitting={data.fitting}
          imageUrl={data.imageUrl}
        />
      ))}
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default App
