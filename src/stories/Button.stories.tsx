import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps<any>> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
  variant: 'filled',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  variant: 'outline',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Button',
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Button',
  size: 'small',
}
