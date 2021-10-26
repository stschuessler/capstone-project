import styled from 'styled-components/macro'

function Header({ onNavigate, onClickCategories }) {
  return (
    <>
      <StyledButton onClick={() => onNavigate('home')}>
        Alle Einträge
      </StyledButton>
      <StyledButton onClick={() => onNavigate('favorites')}>
        Favoriten
      </StyledButton>
      <StyledButton onClick={() => onClickCategories()}>
        Kategorien
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
