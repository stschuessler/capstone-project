import styled from 'styled-components/macro'

function Header({ onNavigate, onReset }) {
  function callClickEvent(event) {
    onNavigate(event)
    onReset()
  }

  return (
    <>
      <StyledButtonEntries onClick={() => callClickEvent('home')}>
        Alle Einträge
      </StyledButtonEntries>
      <StyledButton onClick={() => callClickEvent('favorites')}>
        Favoriten
      </StyledButton>
      <StyledButton onClick={() => callClickEvent('categories')}>
        Kategorien
      </StyledButton>
      <StyledButton onClick={() => callClickEvent('create')}>
        Neuer Eintrag
      </StyledButton>
    </>
  )
}

export default Header

const StyledButton = styled.button`
  margin: 10px;
  padding: 5px;
  border: var(--default-border);
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  color: var(--default-button-color);
  font-weight: bold;
  :hover {
    background-color: var(--default-button-color);
    color: white;
    font-weight: bold;
  }
`

const StyledButtonEntries = styled.button`
  display: block;
  margin: 10px;
  padding: 5px 130px 5px 130px;
  border: var(--default-border);
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  color: var(--default-button-color);
  font-weight: bold;
  :hover {
    background-color: var(--default-button-color);
    color: white;
    font-weight: bold;
  }
`
