import { useState } from 'react'
import styled from 'styled-components/macro'

function Clothing({ titel, color, pattern, material, fitting, imageUrl }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section>
      <button
        onClick={() => {
          if (showDetails) {
            setShowDetails(false)
          } else {
            setShowDetails(true)
          }
        }}
      >
        <StyledImage src={imageUrl} alt="" />
      </button>
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
    </section>
  )
}

const StyledImage = styled.img`
  width: 200px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 2px;
  margin: 2px;
`

export default Clothing
