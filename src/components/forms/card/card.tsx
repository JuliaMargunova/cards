import { FC, useState } from 'react'

import s from './card.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { useCardForm } from '@/components/forms/card/use-card-form.ts'
import { Button } from '@/components/ui/button'

type Props = {
  onSubmit: (data: any) => void
  onCancel: () => void
  withPicture?: boolean
}

export const CardForm: FC<Props> = ({ onSubmit, onCancel, withPicture }) => {
  const [uploadedQI, setUploadedQI] = useState('')
  const [uploadedAI, setUploadedAI] = useState('')

  const {} = useCardForm()

  return (
    <form onSubmit={onSubmit} className={s.root}>
      {withPicture && <img src={uploadedQI || noCover} alt={'img'} className={s.image} />}
      {withPicture && <img src={uploadedAI || noCover} alt={'img'} className={s.image} />}
      <div className={s.controls}>
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button>Add New Card</Button>
      </div>
    </form>
  )
}
