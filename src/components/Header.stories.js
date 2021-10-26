import React from 'react'
import Header from './Header'

export default {
  title: 'Component/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const buttons = Template.bind({})

buttons.argTypes = {
  onNavigate: { action: 'clicked' },
}
