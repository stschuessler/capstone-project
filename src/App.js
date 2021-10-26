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

  const [currentPage, setCurrentPage] = useState('home')

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

  const filteredClothes = clothes.filter(
    (garment) => garment.isBookmarked === true,
  )

  function handleNavigation(page) {
    setCurrentPage(page)
  }

  const allCategorieEntries = clothes.map((item) => item.category)
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  const uniqueCategories = allCategorieEntries.filter(unique)

  return (
    <>
      <Header onNavigate={handleNavigation}></Header>

      {currentPage === 'home' && (
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
      )}
      {currentPage === 'favorites' &&
        filteredClothes.map((item) => (
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

      {currentPage === 'categories' && (
        <Categories
          onNavigate={handleNavigation}
          uniqueCategories={uniqueCategories}
        />
      )}
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
