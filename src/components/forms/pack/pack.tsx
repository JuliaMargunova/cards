import { FC, useEffect, useState } from 'react'

import { DevTool } from '@hookform/devtools'
import { SafeParseReturnType } from 'zod'

import s from './pack.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { PackFormType, usePackForm } from '@/components/forms/pack/use-pack-form.ts'
import { Button } from '@/components/ui/button'

type Props = {
  onSubmit: (data: FormData) => void
  defaultValues?: PackFormType
}

export type CustomFile = SafeParseReturnType<File | undefined, File | undefined> | undefined

export const PackForm: FC<Props> = ({ onSubmit, defaultValues }) => {
  // const [imgError, setImgError] = useState('')
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
    data.cover.data && form.append('cover', data.cover.data)

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)}>
      <DevTool control={control} />
      <img src={downloaded || noCover} alt={'img'} className={s.image} />
      <ControlledFileUploader control={control} name="cover" variant="secondary" fullWidth>
        Choose cover
      </ControlledFileUploader>
      <ControlledTextField control={control} name={'name'} label="Name Pack" />
      <ControlledCheckbox control={control} name={'isPrivate'} label="Private Pack" />
      {typeof errors?.cover?.message === 'string' && (
        <p style={{ color: 'red' }}>{errors.cover.message}</p>
      )}
      <Button>Send</Button>
    </form>
  )
}
