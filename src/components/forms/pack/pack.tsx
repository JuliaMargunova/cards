import { FC, useEffect, useState } from 'react'

import { SafeParseReturnType } from 'zod'

import s from './pack.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { PackFormType, usePackForm } from '@/components/forms/pack/use-pack-form.ts'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  onSubmit: (data: FormData) => void
  defaultValues?: PackFormType
  onCancel: () => void
}

export type CustomFile = SafeParseReturnType<File | undefined, File | undefined> | undefined

export const PackForm: FC<Props> = ({ onSubmit, defaultValues, onCancel }) => {
  const [downloaded, setDownloaded] = useState<string>('')

  const values: PackFormType = defaultValues || {
    name: '',
    isPrivate: false,
  }

  const {
    watch,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = usePackForm(values)

  useEffect(() => {
    const file = watch('cover') as CustomFile

    if (file && 'error' in file) {
      setError('cover', { type: 'custom', message: file.error.errors[0].message })
    }

    if (file && 'data' in file) {
      const img = URL.createObjectURL(file.data as File)

      if (errors.cover) clearErrors('cover')

      setDownloaded(img)
    }
  }, [watch('cover')])

  const sendHandler = (data: PackFormType) => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)
    data.cover?.data && form.append('cover', data.cover.data)

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={s.form}>
      <img src={downloaded || noCover} alt={'img'} className={s.image} />
      {typeof errors?.cover?.message === 'string' && (
        <Typography variant="caption" className={s.error}>
          {errors.cover.message}
        </Typography>
      )}
      <ControlledFileUploader control={control} name="cover" variant="secondary" fullWidth>
        Choose cover
      </ControlledFileUploader>
      <ControlledTextField control={control} name={'name'} label="Name Pack" />
      <ControlledCheckbox control={control} name={'isPrivate'} label="Private Pack" />
      <div className={s.controls}>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button>Send</Button>
      </div>
    </form>
  )
}
