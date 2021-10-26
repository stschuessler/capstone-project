import React from 'react'
import Categories from './Categories'

export default {
  title: 'Component/Categories',
  component: Categories,
}

const Template = (args) => <Categories {...args} />

export const form = Template.bind({})
form.args = {
  uniqueCategories: ['Hose', 'Bluse'],
}

form.argTypes = {
  onNavigate: { action: 'clicked' },
}
