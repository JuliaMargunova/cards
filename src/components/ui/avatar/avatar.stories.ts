import type { Meta, StoryObj } from '@storybook/react'

import avatar from './../../../assets/icons/Ellipse 54.png'

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
    avatar: avatar,
  },
}
