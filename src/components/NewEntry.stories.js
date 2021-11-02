import React from 'react'
import NewEntry from './NewEntry'

export default {
  title: 'Component/NewEntry',
  component: NewEntry,
}

const Template = (args) => <NewEntry {...args} />

export const Form = Template.bind({})

Form.argTypes = {
  onNavigate: { action: 'clicked' },
  onNewEntry: { action: 'clicked' },
}
