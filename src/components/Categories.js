import styled from 'styled-components/macro'

function Categories({
  onNavigate,
  uniqueCategories,
  onAddCategories,
  onReset,
}) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    const elements = Object.values(form.elements) // Makes array from object
    const checkedElements = elements.filter((element) => element.checked)
    const selectedCategories = checkedElements.map((el) => el.value)
    const categories = [...new Set(selectedCategories)] // ...new Set allows to remove double entries
    onAddCategories(categories)
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        {uniqueCategories.map((category) => (
          <StyledLabel key={category}>
            {category}
            <StyledInput type="checkbox" name={category} value={category} />
          </StyledLabel>
        ))}
      </div>
      <div>
        <StyledButton>Auswahl anzeigen</StyledButton>
        <StyledButton type="reset" value="Reset" onClick={() => onReset()}>
          Neue Auswahl
        </StyledButton>
        <StyledButton type="button" onClick={() => onNavigate('home')}>
          Abbrechen
        </StyledButton>
      </div>
    </StyledForm>
  )
}

export default Categories

const StyledForm = styled.form`
  /* position: fixed;
  z-index: 2;
  background-color: white; */
`

const StyledLabel = styled.label`
  padding: 10px;
  white-space: nowrap;
`

const StyledInput = styled.input`
  margin: 10px;
`

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
