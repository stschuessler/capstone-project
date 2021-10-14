import React from 'react'
import Clothing from './Clothing'

export default {
  title: 'Component/Clothing',
  component: Clothing,
}

const Template = (args) => <Clothing {...args} />

export const Button = Template.bind({})
Button.args = {
  title: 'Bluse',
  color: 'grau',
  pattern: 'floral',
  material: 'Leinen',
  fitting: 'Lose Fit',
  imageUrl: '/images/bluse-floral.png',
}
