import styled from 'styled-components/macro'

function Bookmark() {
  return (
    <StyledButton>
      <img src="/images/bookmark.png" alt="" />
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

// https://www.flaticon.com/premium-icon/bookmarks_3032982?term=bookmark&page=1&position=44&page=1&position=44&related_id=3032982&origin=search
