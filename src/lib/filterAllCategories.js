const unique = (value, index, self) => {
  return self.indexOf(value) === index
}

function filterAllCategories(clothes) {
  const allCategorieEntries = clothes.map((item) => item.category)
  const filteredEntries = allCategorieEntries.filter(unique)
  return filteredEntries
}

export default filterAllCategories
