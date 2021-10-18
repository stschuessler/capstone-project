import { useState } from 'react'
import styled from 'styled-components/macro'

function Bookmark({ data, id, isBookmarked }) {
  let bookmarkActive = data.find((item) => item.id === id)
  const [active, setActive] = useState(bookmarkActive.isBookmarked)
  return (
    <StyledButton
      onClick={() => {
        bookmarkActive.isBookmarked = !isBookmarked

        setActive(!active)
      }}
    >
      {!active ? (
        <img src="/images/bookmark.png" alt="Bookmark clothing" />
      ) : (
        <img src="/images/bookmark-active.png" alt="Remove bookmark" />
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
