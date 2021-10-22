function Header({ onClickEntries, onClickFilter }) {
  return (
    <>
      <button onClick={() => onClickEntries()}>Alle Einträge</button>
      <button onClick={() => onClickFilter()}>Favoriten</button>
    </>
  )
}

export default Header
