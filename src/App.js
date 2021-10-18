import Clothing from './components/Clothing'
import styled from 'styled-components/macro'
import mockupData from './mockup-data'
import { useState } from 'react'

function App() {
  const [clothes, setClothes] = useState(() => {
    if (localStorage.getItem('localClothing')) {
      return JSON.parse(localStorage.getItem('localClothing'))
    } else {
      localStorage.setItem('localClothing', JSON.stringify(mockupData))
      return JSON.parse(localStorage.getItem('localClothing'))
    }
  })

  const handleBookmark = (bookmarkActive) => {
    const index = clothes.findIndex((card) => card.id === bookmarkActive.id)

    const newClothingArray = [
      ...clothes.slice(0, index),
      bookmarkActive,
      ...clothes.slice(index + 1),
    ]

    setClothes(newClothingArray)
    localStorage.setItem('localClothing', JSON.stringify(newClothingArray))
  }

  return (
    <StyledMain>
      {clothes.map((item) => (
        <Clothing
          clothes={clothes}
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
