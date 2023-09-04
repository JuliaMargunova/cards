import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Click',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Click',
  },
}

export const Disabled: Story = {
  args: {
    checked: true,
    label: 'Click',
    disabled: true,
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click',
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
  },
}
