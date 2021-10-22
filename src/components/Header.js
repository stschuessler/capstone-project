import styled from 'styled-components/macro'

function Header({ onClickEntries, onClickFilter }) {
  return (
    <>
      <StyledButton onClick={() => onClickEntries()}>
        Alle Einträge
      </StyledButton>
      <StyledButton onClick={() => onClickFilter()}>Favoriten</StyledButton>
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
