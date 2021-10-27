import Clothing from './components/Clothing'
import Header from './components/Header'
import Categories from './components/Categories'
import NewEntry from './components/NewEntry'
import styled from 'styled-components/macro'
import mockupData from './mockup-data'
import { useState } from 'react'
import saveToLocal from './lib/saveToLocal'
import loadFromLocal from './lib/loadFromLocal'
import filterAllCategories from './lib/filterAllCategories'

function App() {
  const [clothes, setClothes] = useState(() => {
    if (!loadFromLocal('localClothing')) {
      saveToLocal('localClothing', mockupData)
    }
    return loadFromLocal('localClothing')
  })

  const [currentPage, setCurrentPage] = useState('home')
  const [categories, setCategories] = useState([])

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

  const filteredCategoriesClothes = clothes.filter((garment) =>
    categories.includes(garment.category),
  )

  function addCategories(selectedCategories) {
    setCategories(selectedCategories)
  }

  const uniqueCategories = filterAllCategories(clothes)

  function categorieReset() {
    setCategories([])
  }

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
        <>
          <Categories
            onNavigate={handleNavigation}
            uniqueCategories={uniqueCategories}
            onAddCategories={addCategories}
            onReset={categorieReset}
          />
          {filteredCategoriesClothes.map((item) => (
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
        </>
      )}

      {currentPage === 'create' && <NewEntry />}
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
