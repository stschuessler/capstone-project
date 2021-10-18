import { useState } from 'react'
import styled from 'styled-components/macro'

function Bookmark({ clothes, id, isBookmarked, onClickBookmark }) {
  const activeBookmark = clothes.find((item) => item.id === id)
  const [active, setActive] = useState(activeBookmark.isBookmarked)

  const handleBookmark = () => {
    activeBookmark.isBookmarked = !isBookmarked
    onClickBookmark(activeBookmark)
    setActive(!active)
  }

  return (
    <StyledButton onClick={() => handleBookmark()}>
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
