import styled from 'styled-components/macro'

function Clothing({ imageUrl }) {
  return (
    <button
      onClick={() => {
        alert('it is working')
      }}
    >
      <StyledImage src={imageUrl} alt="" />
    </button>
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
