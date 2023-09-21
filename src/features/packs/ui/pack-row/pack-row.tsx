import { FC, memo, useState } from 'react'

import { Deck, useDeleteDeckMutation } from '../../model/services'

import s from './pack-row.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Table } from '@/components/ui/table'
import { DeleteDialog } from '@/features/packs/ui'

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
      <DeleteDialog open={open} setOpen={setOpen} onCancel={onCancel} onConfirm={onConfirm} />

      <Table.Row key={pack.id}>
        <Table.Cell>{pack.name}</Table.Cell>
        <Table.Cell>{pack.cardsCount}</Table.Cell>
        <Table.Cell>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
        <Table.Cell>{pack.author.name}</Table.Cell>
        <Table.Cell className={s.controls}>
          {isMyPack ? (
            <div className={s.buttons}>
              <IconButton icon={<Icon name={'edit'} width={16} height={16} />} small />
              <IconButton
                icon={<Icon name={'play'} width={16} height={16} />}
                disabled={!pack.cardsCount}
                small
              />
              <IconButton
                icon={<Icon name={'trash-bin'} width={16} height={16} />}
                onClick={() => setOpen(true)}
                small
              />
            </div>
          ) : (
            <IconButton
              icon={<Icon name={'play'} width={16} height={16} />}
              disabled={!pack.cardsCount}
              small
            />
          )}
        </Table.Cell>
      </Table.Row>
    </>
  )
})
