import styled from 'styled-components/macro'

function Clothing({ imageUrl }) {
  return <StyledImage src={imageUrl} alt="" />
}

const StyledImage = styled.img`
  width: 200px;
`

export default Clothing
