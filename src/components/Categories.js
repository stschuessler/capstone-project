import styled from 'styled-components/macro'

function Categories({ categories, onClickExit, uniqueCategories, checkbox }) {
  return (
    <>
      {categories && (
        <section>
          <form>
            <div>
              <StyledLabel>
                <StyledInput
                  name={uniqueCategories[0]}
                  type="checkbox"
                  value=""
                  //   checked={checkbox}
                />
                {uniqueCategories[0]}
              </StyledLabel>

              <StyledLabel>
                <StyledInput
                  name={uniqueCategories[1]}
                  type="checkbox"
                  value=""
                  //   checked={checkbox}
                />
                {uniqueCategories[1]}
              </StyledLabel>

              <StyledLabel>
                <StyledInput
                  name={uniqueCategories[2]}
                  type="checkbox"
                  value=""
                  //   checked={checkbox}
                />
                {uniqueCategories[2]}
              </StyledLabel>
            </div>
            <div>
              <StyledButton>Load</StyledButton>
              <StyledButton type="reset" value="Reset">
                Clear
              </StyledButton>
              <StyledButton onClick={() => onClickExit()}>Exit</StyledButton>
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
