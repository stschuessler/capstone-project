import ClothingApp from './ClothingApp'
// import Kleiderschrank from './components/Kleiderschrank'
import styled from 'styled-components/macro'
import { useState } from 'react'

function App(clothingApp) {
  const [wardrobePicture, setWardrobePicture] = useState(true)

  return (
    // <Kleiderschrank />
    <>
      <StyledWrapper>
        {wardrobePicture && (
          <StyledImage src="/images/kleiderschrank-farbig.svg" alt="" />
        )}
      </StyledWrapper>
      {wardrobePicture && (
        <StyledButton
          onClick={() => {
            setWardrobePicture(!wardrobePicture)
          }}
        >
          Öffne deinen Kleiderschrank
        </StyledButton>
      )}
      {!wardrobePicture && <ClothingApp data={clothingApp} />}
    </>
  )
}

export default App

const StyledWrapper = styled.div`
  position: relative;
  /* margin: 10px 10px 60px 10px; */
`

const StyledButton = styled.button`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ wardrobePicture }) => (!wardrobePicture ? 'auto' : 'none')};
  padding: 20px;
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

const StyledImage = styled.img`
  max-width: 100%;
  max-height: auto;
  display: ${({ wardrobePicture }) => (!wardrobePicture ? 'block' : 'none')};
`
