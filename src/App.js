import ClothingApp from './ClothingApp'
import styled from 'styled-components/macro'
import { useState } from 'react'

function App(clothingApp) {
  const [wardrobePicture, setWardrobePicture] = useState(true)

  return (
    <>
      <StyledWrapper>
        {wardrobePicture && <StyledImage src="/images/wardrobe.svg" alt="" />}

        {wardrobePicture && (
          <StyledButton
            onClick={() => {
              setWardrobePicture(!wardrobePicture)
            }}
          >
            Öffne deinen Kleiderschrank
          </StyledButton>
        )}
      </StyledWrapper>
      {!wardrobePicture && <ClothingApp data={clothingApp} />}
    </>
  )
}

export default App

const StyledWrapper = styled.div`
  position: relative;
`

const StyledButton = styled.button`
  position: absolute;
  bottom: 296px;
  right: 35px;
  display: ${({ wardrobePicture }) => (!wardrobePicture ? 'auto' : 'none')};
  padding: 10px;
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: var(--bordeaux-color);
  border: none;
  margin: 0px 20px 0px 320px;
  :hover {
    background-color: var(--default-button-color);
    color: white;
    font-weight: bold;
  }
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: auto;
  display: ${({ wardrobePicture }) => (!wardrobePicture ? 'block' : 'none')};
`
