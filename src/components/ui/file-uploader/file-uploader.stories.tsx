import { Meta, StoryObj } from '@storybook/react'

import s from '@/components/ui/file-uploader/file-uploader.module.scss'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'
import { Icon } from '@/components/ui/icon/icon.tsx'

const meta = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
} satisfies Meta<typeof FileUploader>

export default meta

type Story = StoryObj<typeof meta>

// @ts-ignore
export const DefaultModeButton: Story = {
  render: () => {
    return <FileUploader update={() => {}} validate={() => true} />
  },
}

export const ModeDrag: Story = {
  render: () => {
    return (
      <FileUploader update={() => {}} validate={() => true} mode={'drag'}>
        <span>Upload</span>
        <Icon height={16} width={16} className={s.icon} name={'more'} />
      </FileUploader>
    )
  },
}
