import { useState } from 'react'
import styled, { css } from 'styled-components/macro'

function Clothing({ title, color, pattern, material, fitting, imageUrl }) {
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
          <StyledWrapper>
            <h2>{title}</h2>
            <p>Farbe: {color}</p>
            <p>Muster: {pattern}</p>
            <p>Material: {material}</p>
            <p>Passform: {fitting}</p>
          </StyledWrapper>
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
  border: none;
  background: white;

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
  border: solid 0.1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 2px;
  margin: 2px;
`

const StyledWrapper = styled.div`
  border: solid 0.1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 2px;
  margin: 2px;
`

export default Clothing
