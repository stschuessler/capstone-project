import React from 'react'
import Bookmark from './Bookmark'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Component/Bookmark',
  component: Bookmark,
}

const Template = (args) => <Bookmark {...args} />

export const bookmarkButton = Template.bind({})
bookmarkButton.args = {
  id: 33,
  isBookmarked: false,

  // onClickBookmark: action({ action: 'clicked' }),
}
bookmarkButton.argTypes = {
  onClickBookmark: { action: 'clicked' },
}
