import React from 'react'
import Clothing from './Clothing'

export default {
  title: 'Component/Clothing',
  component: Clothing,
}

const Template = (args) => <Clothing {...args} />

export const SmallImage = Template.bind({})
SmallImage.args = {
  imageUrl: '/images/bluse-floral.png',
}
