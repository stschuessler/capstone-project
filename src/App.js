import Clothing from './components/Clothing'
import styled from 'styled-components/macro'
import mockupData from './mockup-data'

function App() {
  let data

  if (localStorage.getItem('localClothing')) {
    data = JSON.parse(localStorage.getItem('localClothing'))
  } else {
    localStorage.setItem('localClothing', JSON.stringify(mockupData))
    data = JSON.parse(localStorage.getItem('localClothing'))
  }

  return (
    <StyledMain>
      {data.map((data) => (
        <Clothing
          key={data.id}
          title={data.title}
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
  padding: 2px 16px 2px 2px;
  gap: 4px;
`

export default App
