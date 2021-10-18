import { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import Bookmark from './Bookmark'

function Clothing({
  data,
  id,
  title,
  color,
  pattern,
  material,
  fitting,
  imageUrl,
  isBookmarked,
}) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <StyledSection showDetails={showDetails}>
      <Bookmark data={data} id={id} isBookmarked={isBookmarked} />
      <StyledButton
        aria-label={showDetails ? 'Hide details' : 'Show details'}
        onClick={() => {
          setShowDetails(!showDetails)
        }}
      >
        <StyledImage src={imageUrl} alt="" />
      </StyledButton>
      {showDetails && (
        <StyledWrapper>
          <h2>{title}</h2>
          <p>Farbe: {color}</p>
          <p>Muster: {pattern}</p>
          <p>Material: {material}</p>
          <p>Passform: {fitting}</p>
        </StyledWrapper>
      )}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  overflow: ${({ showDetails }) => (showDetails ? 'hidden' : 'auto')};
  background: white;
  padding: 4px;
  position: relative;
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

const StyledButton = styled.button`
  border: none;
  background: white;
`

const StyledImage = styled.img`
  width: 100%;
  border: var(--default-border);
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  padding: 2px;
`

const StyledWrapper = styled.div`
  border: var(--default-border);
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  padding: 2px;
  margin: 2px;
  text-align: center;
`

export default Clothing
