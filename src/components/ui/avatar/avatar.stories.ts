import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/ui/avatar/avatar.tsx'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarStory: Story = {
  args: {
    userName: 'Jon Frieda',
    image: 'https://aquarium-fish-home.ru/wp-content/uploads/2019/08/s1200-3.jpg',
  },
}

export const AvatarFallback: Story = {
  args: {
    userName: 'Jon Frieda',
  },
}
