import s from './packs.module.scss'

import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.ts'

export const Packs = () => {
  const packs = useGetDecksQuery()
  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = () => {
    createDeck({ name: 'Created Deck' })
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large">
            Packs list
          </Typography>
          <Button onClick={createDeckHandler}>Add New Pack</Button>
        </div>
        <div className={s.filter}></div>
      </div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created by</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {packs?.data?.items.map(pack => (
            <Table.Row key={pack.id}>
              <Table.Cell>{pack.name}</Table.Cell>
              <Table.Cell>{pack.cardsCount}</Table.Cell>
              <Table.Cell>{pack.updated}</Table.Cell>
              <Table.Cell>{pack.author.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
