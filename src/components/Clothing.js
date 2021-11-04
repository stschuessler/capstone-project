import { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import Bookmark from './Bookmark'

function Clothing({
  id,
  title,
  color,
  pattern,
  material,
  fitting,
  imageUrl,
  isBookmarked,
  onClickBookmark,
}) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <StyledSection showDetails={showDetails}>
      <Bookmark
        id={id}
        isBookmarked={isBookmarked}
        onClickBookmark={onClickBookmark}
      />
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
  width: 100%;
  border: none;
  background: white;
`

const StyledImage = styled.img`
  width: 100%;
  border: solid 3px white;
  border-radius: 10px;
  box-shadow: var(--default-shadow);
`

const StyledWrapper = styled.div`
  border: solid 1px white;
  border-radius: 10px;
  box-shadow: var(--default-shadow);
  padding: 10px;
  margin: 12px 2px;
  text-align: center;
  background-color: var(--bordeaux-color);
  color: white;
  p {
    padding: 2px;
  }
`

export default Clothing
