import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Option, RadioGroup } from './'

const meta = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    // variant: {
    //   options: ['primary', 'secondary', 'tertiary', 'link'],
    //   control: { type: 'radio' },
    // },
  },
} satisfies Meta<typeof RadioGroup>

const baseData: Option[] = [
  { label: 'First', value: '1' },
  { label: 'Second', value: '2' },
  { label: 'Third', value: '3' },
]

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('1')

    return (
      <>
        <RadioGroup {...args} value={value} onValueChange={setValue} />
        <div>Selected value: {value}</div>
      </>
    )
  },

  args: {
    options: baseData,
  },
}
