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

  const handleBookmark = (bookmarkActive) => {
    const index = data.findIndex((card) => card.id === bookmarkActive.id)

    localStorage.setItem(
      'localClothing',
      JSON.stringify([
        ...data.slice(0, index),
        bookmarkActive,
        ...data.slice(index + 1),
      ]),
    )
  }

  return (
    <StyledMain>
      {data.map((item) => (
        <Clothing
          data={data}
          key={item.id}
          id={item.id}
          title={item.title}
          color={item.color}
          pattern={item.pattern}
          material={item.material}
          fitting={item.fitting}
          imageUrl={item.imageUrl}
          isBookmarked={item.isBookmarked}
          onClickBookmark={handleBookmark}
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
