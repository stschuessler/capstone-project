// import Clothing from './Clothing'
// import Header from './Header'
// import Categories from './Categories'
// import NewEntry from './NewEntry'
// import styled from 'styled-components/macro'
// import mockupData from '../mockup-data'
// import { useState } from 'react'
// import saveToLocal from '../lib/saveToLocal'
// import loadFromLocal from '../lib/loadFromLocal'
// import filterAllCategories from '../lib/filterAllCategories'

// function Kleiderschrank() {
//   const [clothes, setClothes] = useState(() => {
//     if (!loadFromLocal('localClothing')) {
//       saveToLocal('localClothing', mockupData)
//     }
//     return loadFromLocal('localClothing')
//   })

//   const [currentPage, setCurrentPage] = useState('home')
//   const [categories, setCategories] = useState([])

//   const handleBookmark = (id) => {
//     const garment = clothes.find((card) => card.id === id)

//     const indexClothes = clothes.findIndex((card) => card.id === id)
//     const newClothesArray = [
//       ...clothes.slice(0, indexClothes),
//       {
//         ...garment,
//         isBookmarked: !garment.isBookmarked,
//       },
//       ...clothes.slice(indexClothes + 1),
//     ]
//     setClothes(newClothesArray)
//     saveToLocal('localClothing', newClothesArray)
//   }

//   function addNewEntry(addEntry) {
//     const newEntry = [...clothes, addEntry]
//     setClothes(newEntry)
//     saveToLocal('localClothing', newEntry)
//   }

//   const filteredClothes = clothes.filter(
//     (garment) => garment.isBookmarked === true,
//   )

//   function handleNavigation(page) {
//     setCurrentPage(page)
//   }

//   const filteredCategoriesClothes = clothes.filter((garment) =>
//     categories.includes(garment.category),
//   )

//   function addCategories(selectedCategories) {
//     setCategories(selectedCategories)
//   }

//   const uniqueCategories = filterAllCategories(clothes)

//   function categorieReset() {
//     setCategories([])
//   }

//   return (
//     <>
//       <StyledSchrank>
//         <StyledNeuerEintrag onClick={() => handleNavigation('create')}>
//           Neuer Eintrag
//         </StyledNeuerEintrag>
//         <StyledFach1></StyledFach1>
//         <StyledFach2></StyledFach2>
//         <StyledKategorie onClick={() => handleNavigation('categories')}>
//           Kategorien
//         </StyledKategorie>
//         <StyledFach3></StyledFach3>
//         <StyledFach4></StyledFach4>
//         <StyledFach5></StyledFach5>
//         <StyledFach6></StyledFach6>
//         <StyledFavoriten onClick={() => handleNavigation('favorites')}>
//           Favoriten
//         </StyledFavoriten>
//         <StyledFach8></StyledFach8>
//       </StyledSchrank>
//       {currentPage === 'create' && (
//         <StyledPositioningWrapper>
//           <NewEntry onNavigate={handleNavigation} onNewEntry={addNewEntry} />
//         </StyledPositioningWrapper>
//       )}
//       {currentPage === 'categories' && (
//         <StyledPositioningWrapper>
//           <Categories
//             onNavigate={handleNavigation}
//             uniqueCategories={uniqueCategories}
//             onAddCategories={addCategories}
//             onReset={categorieReset}
//           />
//           <StyledSelection>
//             {filteredCategoriesClothes.map((item) => (
//               <Clothing
//                 clothes={clothes}
//                 key={item.id}
//                 id={item.id}
//                 title={item.title}
//                 color={item.color}
//                 pattern={item.pattern}
//                 material={item.material}
//                 fitting={item.fitting}
//                 imageUrl={item.imageUrl}
//                 isBookmarked={item.isBookmarked}
//                 onClickBookmark={handleBookmark}
//               />
//             ))}
//           </StyledSelection>
//         </StyledPositioningWrapper>
//       )}
//       {currentPage === 'favorites' && (
//         <StyledPositioningWrapper>
//           <StyledSelection>
//             {filteredClothes.map((item) => (
//               <Clothing
//                 clothes={clothes}
//                 key={item.id}
//                 id={item.id}
//                 title={item.title}
//                 color={item.color}
//                 pattern={item.pattern}
//                 material={item.material}
//                 fitting={item.fitting}
//                 imageUrl={item.imageUrl}
//                 isBookmarked={item.isBookmarked}
//                 onClickBookmark={handleBookmark}
//               />
//             ))}
//           </StyledSelection>
//         </StyledPositioningWrapper>
//       )}
//     </>
//   )
// }

// export default Kleiderschrank

// const StyledSchrank = styled.div`
//   height: 100%;
//   padding: 10px;
//   display: grid;
//   grid-template-columns: 100px 1fr;
//   grid-template-rows: repeat(14, calc(calc(100% - 140px) / 15));
//   grid-template-areas:
//     'NeuerEintrag Kategorie'
//     'NeuerEintrag Kategorie'
//     'Fach1 Kategorie'
//     'Fach1 Kategorie'
//     'Fach2 Kategorie'
//     'Fach2 Kategorie'
//     'Fach2 Kategorie'
//     'Fach3 Fach4'
//     'Fach5 Fach4'
//     'Fach6 Favoriten'
//     'Fach8 Favoriten';

//   gap: 10px;
//   background-color: white;
//   * {
//     background-color: white;
//     border: 2px solid black;
//   }
// `
// const StyledNeuerEintrag = styled.div`
//   grid-area: NeuerEintrag;
//   height: 100%;
//   width: 100%;
//   cursor: pointer;
// `

// const StyledFach1 = styled.div`
//   grid-area: Fach1;
// `

// const StyledFach2 = styled.div`
//   grid-area: Fach2;
// `

// const StyledKategorie = styled.div`
//   grid-area: Kategorie;
// `
// const StyledFach3 = styled.div`
//   grid-area: Fach3;
// `
// const StyledFach4 = styled.div`
//   grid-area: Fach4;
// `
// const StyledFach5 = styled.div`
//   grid-area: Fach5;
// `
// const StyledFach6 = styled.div`
//   grid-area: Fach6;
// `
// const StyledFavoriten = styled.div`
//   grid-area: Favoriten;
// `
// const StyledFach8 = styled.div`
//   grid-area: Fach8;
// `
// const StyledPositioningWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   background-color: rgba(255, 255, 255, 0.95); // or white
// `
// const StyledSelection = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   padding: 2px 16px 2px 2px;
//   gap: 4px;
//   padding-top: 150px;
// `
