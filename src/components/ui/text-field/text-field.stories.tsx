import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/Text Field',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['text', 'search', 'password'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Text = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <TextField
        value={state}
        placeholder="Placeholder"
        label="Email text field"
        name={'email'}
        onChange={e => setState(e.currentTarget.value)}
        clearField={() => setState('')}
        onEnter={() => alert(state)}
      />
    )
  },
}

export const Password = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <TextField
        variant={'password'}
        placeholder="Placeholder"
        label="Password text field"
        value={state}
        onChange={e => setState(e.currentTarget.value)}
        clearField={() => setState('')}
      />
    )
  },
}

export const Search = {
  render: () => {
    const [state, setState] = useState('')

    return (
      <TextField
        variant={'search'}
        placeholder="Placeholder"
        label="Search text field"
        value={state}
        onChange={e => setState(e.currentTarget.value)}
        clearField={() => setState('')}
      />
    )
  },
}

export const TextWithError: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Error example text field',
    errorMessage: 'Some error occurred',
  },
}

export const DisabledPassword: Story = {
  args: {
    variant: 'password',
    placeholder: 'Placeholder',
    label: 'Disabled password text field',
    disabled: true,
  },
}

export const DisabledSearch: Story = {
  args: {
    variant: 'search',
    placeholder: 'Placeholder',
    label: 'Disabled search text field',
    disabled: true,
  },
}