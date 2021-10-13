import { useState } from 'react'
import styled, { css } from 'styled-components/macro'

function Clothing({ titel, color, pattern, material, fitting, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <StyledSection>
      <StyledButton
        showDetails={showDetails}
        onClick={() => {
          if (showDetails) {
            setShowDetails(false)
          } else {
            setShowDetails(true)
          }
        }}
      >
        <StyledImage src={imageUrl} alt="" />
        {showDetails ? (
          <div>
            <h2>{titel}</h2>
            <p>Farbe: {color}</p>
            <p>Muster: {pattern}</p>
            <p>Material: {material}</p>
            <p>Passform: {fitting}</p>
          </div>
        ) : (
          <div></div>
        )}
      </StyledButton>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  overflow: ${({ showDetails }) => (showDetails ? 'hidden' : 'auto')};
`

const StyledButton = styled.button`
  ${({ showDetails }) =>
    showDetails &&
    css`
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
    `}
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 2px;
  margin: 2px;
`

export default Clothing
