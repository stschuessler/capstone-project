function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

export default saveToLocal
