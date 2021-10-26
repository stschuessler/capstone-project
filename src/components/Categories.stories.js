import React from 'react'
import Categories from './Categories'

export default {
  title: 'Component/Categories',
  component: Categories,
}

const Template = (args) => <Categories {...args} />

export const form = Template.bind({})
form.args = {
  categories: true,
  uniqueCategories: ['Hose', 'Bluse'],
}
