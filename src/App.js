import Clothing from './components/Clothing'
import styled from 'styled-components/macro'
import mockupData from './mockup-data'
import { useState } from 'react'
import saveToLocal from './lib/saveToLocal'
import loadFromLocal from './lib/loadFromLocal'

function App() {
  const [clothes, setClothes] = useState(() => {
    if (loadFromLocal('localClothing')) {
      return loadFromLocal('localClothing')
    } else {
      saveToLocal('localClothing', mockupData)
      return loadFromLocal('localClothing')
    }
  })

  const handleBookmark = (id) => {
    const index = loadFromLocal('localClothing').findIndex(
      (card) => card.id === id,
    )
    const cloth = clothes.find((card) => card.id === id)

    const newClothingArray = [
      ...loadFromLocal('localClothing').slice(0, index),
      {
        ...cloth,
        isBookmarked: !cloth.isBookmarked,
      },
      ...loadFromLocal('localClothing').slice(index + 1),
    ]
    saveToLocal('localClothing', newClothingArray)

    const indexVisible = clothes.findIndex((card) => card.id === id)
    const newVisibleArray = [
      ...clothes.slice(0, indexVisible),
      {
        ...cloth,
        isBookmarked: !cloth.isBookmarked,
      },
      ...clothes.slice(indexVisible + 1),
    ]
    setClothes(newVisibleArray)
  }

  function onClickEntries() {
    setClothes(loadFromLocal('localClothing'))
  }

  function onClickFilter() {
    const filteredData = clothes
      .slice()
      .filter((item) => item.isBookmarked === true)
    setClothes(filteredData)
    console.log('filter1: ' + filteredData)
  }

  return (
    <>
      <header>
        <button onClick={() => onClickEntries()}>Alle Einträge</button>
        <button onClick={() => onClickFilter()}>Favoriten</button>
      </header>
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
    </>
  )
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2px 16px 2px 2px;
  gap: 4px;
`

export default App
