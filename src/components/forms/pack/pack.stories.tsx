import { Meta, StoryObj } from '@storybook/react'

import { PackForm } from '@/components/forms/pack/pack.tsx'
import { PackFormType } from '@/components/forms/pack/use-pack-form.ts'

const meta = {
  title: 'Forms/Pack',
  component: PackForm,
} satisfies Meta<typeof PackForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const onSubmit = (data: PackFormType) => {
      alert(JSON.stringify(data))
    }

    return <PackForm onSubmit={onSubmit} />
  },
  args: {} as any,
}
