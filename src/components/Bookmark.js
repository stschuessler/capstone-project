import { useState } from 'react'
import styled from 'styled-components/macro'

function Bookmark() {
  const [bookmarkNotActiv, setBookmarkActiv] = useState(false)

  return (
    <StyledButton
      onClick={() => {
        setBookmarkActiv(!bookmarkNotActiv)
      }}
    >
      {!bookmarkNotActiv ? (
        <img src="/images/bookmark.png" alt="bookmark" />
      ) : (
        <img src="/images/bookmark-active.png" alt="active bookmark" />
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

// Icon Download:
// https://www.flaticon.com/premium-icon/bookmarks_3032982?term=bookmark&page=1&position=44&page=1&position=44&related_id=3032982&origin=search
