import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../components'

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
export default meta

const Template: Story<ButtonProps<any>> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  variant: 'filled',
}

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
  children: 'Button',
  variant: 'filled',
  disabled: true,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  variant: 'outline',
}

export const DisabledOutline = Template.bind({})
DisabledOutline.args = {
  children: 'Button',
  variant: 'outline',
  disabled: true,
}

export const Text = Template.bind({})
Text.args = {
  children: 'Button',
  variant: 'text',
}

export const DisabledText = Template.bind({})
DisabledText.args = {
  children: 'Button',
  variant: 'text',
  disabled: true,
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
