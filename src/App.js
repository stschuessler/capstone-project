import Clothing from './components/Clothing'
import styled from 'styled-components/macro'
import mockupData from './mockup-data'
import { useState } from 'react'
import saveToLocal from './lib/saveToLocal'
import loadFromLocal from './lib/loadFromLocal'

function App() {
  const [clothes, setClothes] = useState(() => {
    if (!loadFromLocal('localClothing')) {
      saveToLocal('localClothing', mockupData)
    }
    return loadFromLocal('localClothing')
  })

  const handleBookmark = (id) => {
    const cloth = clothes.find((card) => card.id === id)

    const indexClothes = clothes.findIndex((card) => card.id === id)
    const newClothesArray = [
      ...clothes.slice(0, indexClothes),
      {
        ...cloth,
        isBookmarked: !cloth.isBookmarked,
      },
      ...clothes.slice(indexClothes + 1),
    ]
    setClothes(newClothesArray)
    saveToLocal('localClothing', newClothesArray)
  }

  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false)

  let shownClothes
  if (showOnlyBookmarked) {
    shownClothes = clothes.filter((cloth) => cloth.isBookmarked === true)
  } else {
    shownClothes = clothes
  }

  function onClickEntries() {
    setShowOnlyBookmarked(false)
  }

  function onClickFilter() {
    setShowOnlyBookmarked(true)
  }

  return (
    <>
      <header>
        <button onClick={() => onClickEntries()}>Alle Einträge</button>
        <button onClick={() => onClickFilter()}>Favoriten</button>
      </header>
      <StyledMain>
        {shownClothes.map((item) => (
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
