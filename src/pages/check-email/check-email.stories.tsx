import { Meta, StoryObj } from '@storybook/react'

import { BrowserRouterDecorator } from '@/app/providers'
import { CheckEmail } from '@/pages'

const meta: Meta = {
  title: 'Pages/Check Email',
  component: CheckEmail,
  parameters: {
    args: {
      email: 'e-mail@example.com',
    },
  },
  tags: ['autodocs'],
  decorators: [BrowserRouterDecorator],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
