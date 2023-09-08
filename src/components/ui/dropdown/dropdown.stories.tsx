import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropDown } from '@/components/ui/dropdown'
import { ProfileBlock } from '@/components/ui/header/profile-block'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDown,
  tags: ['autodocs'],
} satisfies Meta<typeof DropDown>

export default meta

type Story = StoryObj<typeof meta>

// @ts-ignore
export const Default: Story = {
  render: () => {
    const items = [
      {
        component: (
          <Button variant="link">
            <Icon name={'playCircle'} />
            <Typography>Learn</Typography>
          </Button>
        ),
      },
      {
        component: (
          <Button variant="link">
            <Icon name={'edit'} />
            <Typography>Edit</Typography>
          </Button>
        ),
      },
      {
        component: (
          <Button variant="link">
            <Icon name={'delete'} />
            <Typography>Delete</Typography>
          </Button>
        ),
      },
    ]

    return (
      <div style={{ marginLeft: 200 }}>
        <DropDown trigger={<Button>Click</Button>} items={items} />
      </div>
    )
  },
}

// @ts-ignore
export const WithProfile: Story = {
  render: () => {
    const userData = {
      name: 'Alex',
      email: 'alexandr.1996@list.ru',
      img: '',
    }

    const items = [
      {
        component: <ProfileBlock userData={userData} />,
      },
      {
        component: (
          <Button variant="link">
            <Icon name={'user'} />
            <Typography>My Profile</Typography>
          </Button>
        ),
      },
      {
        component: (
          <Button variant="link">
            <Icon name={'logout'} />
            <Typography>Sign Out</Typography>
          </Button>
        ),
      },
    ]

    return (
      <div style={{ marginLeft: 200 }}>
        <DropDown trigger={<Avatar userName={'Alex'} />} items={items} />
      </div>
    )
  },
}
