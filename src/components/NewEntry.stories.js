import React from 'react'
import NewEntry from './NewEntry'

export default {
  title: 'Component/NewEntry',
  component: NewEntry,
}

const Template = (args) => <NewEntry {...args} />

export const form = Template.bind({})

form.argTypes = {
  onNavigate: { action: 'clicked' },
  onNewEntry: { action: 'clicked' },
}
