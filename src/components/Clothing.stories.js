import React from 'react'
import Clothing from './Clothing'
import imageUrl from '../images/bluse-floral.png'

export default {
  title: 'Component/Clothing',
  component: Clothing,
}

const Template = (args) => <Clothing {...args} />

export const SmallImage = Template.bind({})
SmallImage.args = {
  imageUrl: imageUrl,
}
