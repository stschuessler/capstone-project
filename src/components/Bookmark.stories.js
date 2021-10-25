import React from 'react'
import Bookmark from './Bookmark'

export default {
  title: 'Component/Bookmark',
  component: Bookmark,
}

const Template = (args) => <Bookmark {...args} />

export const bookmarkButton = Template.bind({})
bookmarkButton.args = {
  id: 33,
  isBookmarked: false,
}
bookmarkButton.argTypes = {
  onClickBookmark: { action: 'clicked' },
}
