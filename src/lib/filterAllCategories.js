const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

function filterAllCategories(clothes) {
  const allCategorieEntries = clothes.map((item) => item.category)
  const bla = allCategorieEntries.filter(unique)
  return bla
}

export default filterAllCategories
