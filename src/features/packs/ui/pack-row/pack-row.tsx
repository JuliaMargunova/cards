import { FC, memo, useState } from 'react'

import { Deck, useDeleteDeckMutation } from '../../model/services'

import s from './pack-row.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'

type Props = {
  pack: Deck
  authUserId: string
}

export const PackRow: FC<Props> = memo(({ pack, authUserId }) => {
  const isMyPack = authUserId === pack.author.id

  const [open, setOpen] = useState(false)

  const [deletePack] = useDeleteDeckMutation()

  const onConfirm = () => {
    deletePack({ id: pack.id })
    setOpen(false)
  }

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <ModalWindow open={open} setOpen={setOpen} title="Delete Pack">
        <Typography>
          Do you really want to remove Pack Name? <br />
          All cards will be deleted.
        </Typography>
        <div className={s.modalButtons}>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Delete Pack</Button>
        </div>
      </ModalWindow>

      <Table.Row key={pack.id}>
        <Table.Cell>{pack.name}</Table.Cell>
        <Table.Cell>{pack.cardsCount}</Table.Cell>
        <Table.Cell>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
        <Table.Cell>{pack.author.name}</Table.Cell>
        <Table.Cell className={s.controls}>
          {isMyPack ? (
            <div className={s.buttons}>
              <IconButton icon={<Icon name={'edit'} width={16} height={16} />} small />
              <IconButton icon={<Icon name={'play'} width={16} height={16} />} small />
              <IconButton
                icon={<Icon name={'trash-bin'} width={16} height={16} />}
                onClick={() => setOpen(true)}
                small
              />
            </div>
          ) : (
            <IconButton icon={<Icon name={'play'} width={16} height={16} />} small />
          )}
        </Table.Cell>
      </Table.Row>
    </>
  )
})
