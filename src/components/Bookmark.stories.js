import React from 'react'
import Bookmark from './Bookmark'

export default {
  title: 'Component/Bookmark',
  component: Bookmark,
}

const Template = (args) => <Bookmark {...args} />

export const Button = Template.bind({})
Button.args = {}
