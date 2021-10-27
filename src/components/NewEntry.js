import styled from 'styled-components/macro'

const colorArray = [
  'weiß',
  'schwarz',
  'grün',
  'gelb',
  'blau',
  'rosa',
  'lila',
  'pink',
  'keine',
]

const patternArray = [
  'einfarbig',
  'geblümt',
  'gemustert',
  'gepunktet',
  'gestreift',
  'kariert',
  'leopardenmuster',
  'nadelstreifen',
  'schlangenmuster',
  'keine',
]

const materialArray = [
  'Baumwolle',
  'Denim',
  'Leinen',
  'Mesh',
  'Satin',
  'Seide',
  'Spitze',
  'Wolle',
]

const fittingArray = [
  'Figurbetont',
  'Loose Fit',
  'Oversize',
  'Regular Fit',
  'Relaxed Fit',
]

function NewEntry({ onNavigate }) {
  // function NewEntry() {
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const form = event.target
  //   const elements = Object.values(form.elements)
  //   console.log(elements)
  // }

  return (
    <form>
      {/* onSubmit={handleSubmit}> */}
      <StyledContainer>
        <StyledLabel>
          Gib einen Namen für dein Kleidungsstück ein:
          <StyledInput type="text" name="title" required autoComplete="Off" />
        </StyledLabel>
      </StyledContainer>

      <StyledContainer>
        <StyledLabel>
          Zu welcher Kategorie soll das Kleidungsstück hinzugefügt werden?
          <StyledInput
            type="text"
            name="category"
            required
            autoComplete="Off"
          />
        </StyledLabel>
      </StyledContainer>

      <StyledContainer>
        <p>Farbe</p>
        <StyledRadioButton>
          {colorArray.map((color) => (
            <StyledLabel key={color}>
              {color}
              <StyledInput type="radio" name="color" value="{color}" required />
            </StyledLabel>
          ))}
        </StyledRadioButton>
      </StyledContainer>

      <StyledContainer>
        <p>Muster</p>
        <StyledRadioButton>
          {patternArray.map((pattern) => (
            <StyledLabel key={pattern}>
              {pattern}
              <StyledInput
                type="radio"
                name="pattern"
                value="{pattern}"
                required
              />
            </StyledLabel>
          ))}
        </StyledRadioButton>
      </StyledContainer>

      <StyledContainer>
        <p>Material</p>
        <StyledRadioButton>
          {materialArray.map((material) => (
            <StyledLabel key={material}>
              {material}
              <StyledInput
                type="radio"
                name="material"
                value="{material}"
                required
              />
            </StyledLabel>
          ))}
        </StyledRadioButton>
      </StyledContainer>

      <StyledContainer>
        <p>Passform</p>
        <StyledRadioButton>
          {fittingArray.map((fitting) => (
            <StyledLabel key={fitting}>
              {fitting}
              <StyledInput
                type="radio"
                name="fitting"
                value="{fitting}"
                required
              />
            </StyledLabel>
          ))}
        </StyledRadioButton>
      </StyledContainer>

      <StyledContainer>
        <p>Image Upload</p>
      </StyledContainer>

      <StyledSubmitButton>Eintrag erstellen</StyledSubmitButton>
      <StyledResetButton type="reset">Neue Auswahl</StyledResetButton>
      <StyledResetButton type="button" onClick={() => onNavigate('home')}>
        Abbrechen
      </StyledResetButton>
    </form>
  )
}

export default NewEntry

const StyledContainer = styled.div`
  padding: 6px;
`
const StyledRadioButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  text-align: left;
`

const StyledLabel = styled.label`
  padding: 10px;
  text-align: left;
`
const StyledInput = styled.input`
  padding: 10px;
  margin: 4px;
`
const StyledSubmitButton = styled.button`
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

const StyledResetButton = styled.button`
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
