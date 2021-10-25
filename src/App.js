import Clothing from './components/Clothing'
import Header from './components/Header'
import Categories from './components/Categories'
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
    const garment = clothes.find((card) => card.id === id)

    const indexClothes = clothes.findIndex((card) => card.id === id)
    const newClothesArray = [
      ...clothes.slice(0, indexClothes),
      {
        ...garment,
        isBookmarked: !garment.isBookmarked,
      },
      ...clothes.slice(indexClothes + 1),
    ]
    setClothes(newClothesArray)
    saveToLocal('localClothing', newClothesArray)
  }

  const [showBookmarked, setShowBookmarked] = useState(false)

  let shownClothes
  if (showBookmarked) {
    shownClothes = clothes.filter((garment) => garment.isBookmarked === true)
  } else {
    shownClothes = clothes
  }

  const handleEntries = () => {
    setShowBookmarked(false)
  }

  const handleFavorites = () => {
    setShowBookmarked(true)
  }

  const [categories, setCategories] = useState(false)

  const handleCategories = () => {
    setCategories(true)
  }

  const handleExit = () => {
    setCategories(false)
  }

  const allCategorieEntries = mockupData.map((item) => item.category)
  //Nachfragen: mockupData auszutauschen mit welchen Daten
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const uniqueCategories = allCategorieEntries.filter(unique)
  console.log(uniqueCategories)

  return (
    <>
      <Header
        onClickEntries={handleEntries}
        onClickFavorites={handleFavorites}
        onClickCategories={handleCategories}
      ></Header>
      <StyledMain>
        <Categories categories={categories} onClickExit={handleExit} />
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
