import styled from 'styled-components/macro'

function Bookmark({ id, isBookmarked, onClickBookmark }) {
  return (
    <StyledButton onClick={() => onClickBookmark(id)}>
      {!isBookmarked ? (
        <img src="/images/heart-border.png" alt="Bookmark clothing" />
      ) : (
        <img src="/images/heart-filled.png" alt="Remove bookmark" />
      )}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
`

export default Bookmark
