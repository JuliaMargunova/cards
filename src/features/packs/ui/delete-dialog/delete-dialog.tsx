import { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Typography } from '@/components/ui/typography'
import s from '@/features/packs/ui/pack-row/pack-row.module.scss'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  onCancel: () => void
  onConfirm: () => void
}

export const DeleteDialog: FC<Props> = ({ open, setOpen, onCancel, onConfirm }) => {
  return (
    <ModalWindow open={open} setOpen={setOpen} title="Delete Pack">
      <Typography>
        Do you really want to remove Pack Name? <br />
        All cards will be deleted.
      </Typography>
      <div className={s.buttons}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Delete Pack</Button>
      </div>
    </ModalWindow>
  )
}
