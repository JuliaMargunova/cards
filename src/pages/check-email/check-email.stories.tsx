import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/pages'

const meta = {
  title: 'Pages/Check Email',
  component: CheckEmail,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'e-mail@example.com',
  },
}
