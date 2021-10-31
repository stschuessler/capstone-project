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
      imageUrl: '/images/bluse-floral.png', // cloudinary einbinden
      isBookmarked: false,
    }

    onNewEntry(newEntry)
    form.reset()
    alert('Dein Eintrag wurde gespeichert')
  }

  const colors = clothingSubcatgories.colors
  const pattern = clothingSubcatgories.pattern
  const material = clothingSubcatgories.material
  const fitting = clothingSubcatgories.fitting

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledTextLabel>
          Gib einen Namen für dein Kleidungsstück ein:
          <StyledTextInput
            type="text"
            name="title"
            required
            autoComplete="Off"
          />
        </StyledTextLabel>
        <br />

        <StyledTextLabel>
          Zu welcher Kategorie soll das Kleidungsstück hinzugefügt werden?
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
            <StyledLabel key={color}>
              {color}
              <StyledInput type="radio" name="color" value={color} required />
            </StyledLabel>
          ))}
        </StyledRadioButtonWrapper>

        <StyledRadioButtonWrapper>
          <p>Muster</p>
          {pattern.map((pattern) => (
            <StyledLabel key={pattern}>
              {pattern}
              <StyledInput
                type="radio"
                name="pattern"
                value={pattern}
                required
              />
            </StyledLabel>
          ))}
        </StyledRadioButtonWrapper>

        <StyledRadioButtonWrapper>
          <p>Material</p>
          {material.map((material) => (
            <StyledLabel key={material}>
              {material}
              <StyledInput
                type="radio"
                name="material"
                value={material}
                required
              />
            </StyledLabel>
          ))}
        </StyledRadioButtonWrapper>

        <StyledRadioButtonWrapper>
          <p>Passform</p>
          {fitting.map((fitting) => (
            <StyledLabel key={fitting}>
              {fitting}
              <StyledInput
                type="radio"
                name="fitting"
                value={fitting}
                required
              />
            </StyledLabel>
          ))}
        </StyledRadioButtonWrapper>
      </StyledContainer>

      {/* <StyledContainer>
        <p>Image Upload</p>
      </StyledContainer> */}

      <StyledSubmitButton>Eintrag erstellen</StyledSubmitButton>
      <StyledResetButton type="reset">Neue Auswahl</StyledResetButton>
      <StyledResetButton type="button" onClick={() => onNavigate('home')}>
        Abbrechen
      </StyledResetButton>
    </StyledForm>
  )
}

export default NewEntry
const StyledForm = styled.form``

const StyledContainer = styled.div`
  padding: 6px;
  background: var(--default-button-color);
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
`

const StyledLabel = styled.label`
  padding: 10px;
  text-align: left;
  color: white;
  font-size: 15px;
  white-space: nowrap;
`

const StyledTextInput = styled.input`
  border-radius: 8px;
  padding: 4px;
  margin: 5px;
  color: black;
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
