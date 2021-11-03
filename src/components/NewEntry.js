import styled from 'styled-components/macro'
import { nanoid } from 'nanoid'
import clothingSubcatgories from '../lib/newEntrySubcategories'

function NewEntry({ onNavigate, onNewEntry }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    const { category, title, color, pattern, material, fitting } = form.elements

    const newEntry = {
      id: nanoid(),
      category: category.value,
      title: title.value,
      color: color.value,
      pattern: pattern.value,
      material: material.value,
      fitting: fitting.value,
      imageUrl: '/images/IMG_1280.JPG',
      isBookmarked: false,
    }

    onNewEntry(newEntry)
    form.reset()
    // alert('Dein Eintrag wurde gespeichert')
  }

  const colors = clothingSubcatgories.colors
  const pattern = clothingSubcatgories.pattern
  const material = clothingSubcatgories.material
  const fitting = clothingSubcatgories.fitting

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledTextLabel>
          Benenne dein Kleidungsstück:
          <StyledTextInput
            type="text"
            name="title"
            required
            autoComplete="Off"
          />
        </StyledTextLabel>
        <br />

        <StyledTextLabel>
          Benenne eine Kategorie:
          <StyledTextInput
            type="text"
            name="category"
            required
            autoComplete="Off"
          />
        </StyledTextLabel>

        <StyledRadioButtonWrapper>
          <p>Farbe</p>
          {colors.map((color) => (
            <StyledRadioLabel key={color}>
              {color}
              <StyledRadioInput
                type="radio"
                name="color"
                value={color}
                required
              />
            </StyledRadioLabel>
          ))}
        </StyledRadioButtonWrapper>

        <StyledRadioButtonWrapper>
          <p>Muster</p>
          {pattern.map((pattern) => (
            <StyledRadioLabel key={pattern}>
              {pattern}
              <StyledRadioInput
                type="radio"
                name="pattern"
                value={pattern}
                required
              />
            </StyledRadioLabel>
          ))}
        </StyledRadioButtonWrapper>

        <StyledRadioButtonWrapper>
          <p>Material</p>
          {material.map((material) => (
            <StyledRadioLabel key={material}>
              {material}
              <StyledRadioInput
                type="radio"
                name="material"
                value={material}
                required
              />
            </StyledRadioLabel>
          ))}
        </StyledRadioButtonWrapper>

        <StyledRadioButtonWrapper>
          <p>Passform</p>
          {fitting.map((fitting) => (
            <StyledRadioLabel key={fitting}>
              {fitting}
              <StyledRadioInput
                type="radio"
                name="fitting"
                value={fitting}
                required
              />
            </StyledRadioLabel>
          ))}
        </StyledRadioButtonWrapper>
      </StyledContainer>

      <StyledSubmitButton>Eintrag erstellen</StyledSubmitButton>
      <StyledResetButton type="reset">Neue Auswahl</StyledResetButton>
      <StyledResetButton type="button" onClick={() => onNavigate('home')}>
        Abbrechen
      </StyledResetButton>
    </StyledForm>
  )
}

export default NewEntry
const StyledForm = styled.form`
  margin-top: 10px;
`

const StyledContainer = styled.div`
  padding: 20px 6px;
  background: var(--bordeaux-color);
  margin: 0px 5px;
  border-radius: 10px;
  box-shadow: var(--default-shadow);
`
const StyledRadioButtonWrapper = styled.div`
  padding: 10px;
  background-color: transparent;
  border: none;
  text-align: left;
  color: white;
`
const StyledTextLabel = styled.label`
  color: white;
  margin-left: 6px;
  padding: 2px;
`

const StyledRadioLabel = styled.label`
  text-align: left;
  color: white;
  font-size: 15px;
  white-space: nowrap;
  margin-right: 10px;
`

const StyledTextInput = styled.input`
  border-radius: 8px;
  width: 330px;
  height: 30px;
  padding: 6px;
  margin: 6px;
  color: var(--bordeaux-color);
`

const StyledRadioInput = styled.input`
  padding: 10px;
  margin: 4px;
`
const StyledSubmitButton = styled.button`
  margin: 9px;
  padding: 5px;
  border: var(--default-border);
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  color: var(--default-button-color);
  font-weight: bold;
  :hover {
    border: var(--activ-button-border);
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
    border: var(--activ-button-border);
    background-color: var(--default-button-color);
    color: white;
    font-weight: bold;
  }
`
