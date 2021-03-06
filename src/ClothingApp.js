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

function ClothingApp() {
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

  function addNewEntry(addEntry) {
    const newEntry = [...clothes, addEntry]
    setClothes(newEntry)
    saveToLocal('localClothing', newEntry)
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
      <StyledTitel id="titel">Kleiderschrank</StyledTitel>

      <Header onNavigate={handleNavigation} onReset={categorieReset}></Header>
      <StyledLine />
      {currentPage === 'home' && (
        <>
          <StyledSubTitel id="pageSubTitel">
            Deine Kleidungsst??cke
          </StyledSubTitel>
          <StyledSelection>
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
          </StyledSelection>
          <StyledLink href="#titel">Seitenanfang</StyledLink>
        </>
      )}

      {currentPage === 'favorites' && (
        <>
          <StyledSubTitel id="pageSubTitel">
            Deine Lieblingsst??cke
          </StyledSubTitel>
          <StyledSelection>
            {filteredClothes.map((item) => (
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
          </StyledSelection>
        </>
      )}

      {currentPage === 'categories' && (
        <>
          <StyledSubTitel id="pageSubTitel">
            W??hle deine Kategorien
          </StyledSubTitel>

          <Categories
            onNavigate={handleNavigation}
            uniqueCategories={uniqueCategories}
            onAddCategories={addCategories}
            onReset={categorieReset}
          />
          <StyledSelection>
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
          </StyledSelection>
        </>
      )}

      {currentPage === 'create' && (
        <>
          <StyledSubTitel id="pageSubTitel">Neuer Eintrag</StyledSubTitel>
          <NewEntry onNavigate={handleNavigation} onNewEntry={addNewEntry} />
        </>
      )}
    </>
  )
}

const StyledLine = styled.hr`
  background-color: var(--bordeaux-color);
  height: 5px;
  margin: 0px 5px;
`
const StyledTitel = styled.h1`
  text-align: center;
  background-color: var(--bordeaux-color);
  padding: 10px;
  color: white;
  margin: 5px;
`

const StyledSubTitel = styled.h2`
  text-align: center;
  background-color: var(--bordeaux-color);
  padding: 10px;
  color: white;
  margin: 20px 5px 5px 5px;
`

const StyledSelection = styled.section`
  gap: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const StyledLink = styled.a`
  color: white;
  padding: 5px 20px 10px 0px;
  text-align: right;
  background-color: var(--bordeaux-color);
  display: block;
  font-size: 0.8em;
  margin: 5px;
  border-bottom: 5px solid white;
`

export default ClothingApp
