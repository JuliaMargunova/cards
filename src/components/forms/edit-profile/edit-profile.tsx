import { PropsWithChildren } from 'react'

import { DevTool } from '@hookform/devtools'
import { clsx } from 'clsx'

import s from './edit-profile.module.scss'

import { EditProfileFormProps, useEditProfile } from './'

import { ControlledTextField } from '@/components/controlled'
import { Button } from '@/components/ui/button'

type Props = {
  onSubmit: (data: EditProfileFormProps) => void
  className?: string
} & PropsWithChildren

export const EditProfileForm = ({ onSubmit, className, children }: Props) => {
  const classes = clsx(s.form, className)

  const { control, handleSubmit } = useEditProfile()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <DevTool control={control} />
      <ControlledTextField
        control={control}
        name={'nickName'}
        label={'NickName'}
        className={s.nickName}
      />
      {children}
      <Button fullWidth className={s.button}>
        Save Changes
      </Button>
    </form>
  )
}
