import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '@/components/ui/tabs/tabs.tsx'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState(args.defaultValue)

    return (
      <div>
        <Tabs
          defaultValue={args.defaultValue}
          tabs={args.tabs}
          onValueChange={value => setValue(value)}
        />
        {value}
      </div>
    )
  },
  args: {
    defaultValue: 'myCards',
    tabs: [
      { value: 'myCards', text: 'My cards' },
      { value: 'allCards', text: 'All cards' },
      { value: 'other', text: 'Other' },
      { value: 'disabled', text: 'Disabled', disabled: true },
    ],
  },
}
