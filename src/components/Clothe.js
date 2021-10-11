import styled from 'styled-components/macro'

function Clothe({ imageUrl }) {
  return <StyledImage src={imageUrl} alt="" />
}

const StyledImage = styled.img`
  width: 200px;
`

export default Clothe
