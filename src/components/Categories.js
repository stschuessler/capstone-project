import styled from 'styled-components/macro'

function Categories({ categories, onClickExit, uniqueCategories, checkbox }) {
  return (
    <>
      {categories && (
        <section>
          <form>
            <div>
              {uniqueCategories.map((category) => (
                <StyledLabel key={category}>
                  {category}
                  <StyledInput
                    type="checkbox"
                    name={category}
                    value={category}
                    //   checked={checkbox}
                  />
                </StyledLabel>
              ))}
            </div>
            <div>
              <StyledButton>Auswahl anzeigen</StyledButton>
              <StyledButton type="reset" value="Reset">
                Neue Auswahl
              </StyledButton>
              <StyledButton onClick={() => onClickExit()}>
                Abbrechen
              </StyledButton>
            </div>
          </form>
        </section>
      )}
    </>
  )
}

export default Categories

const StyledLabel = styled.label`
  padding: 10px;
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
