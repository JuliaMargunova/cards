import { ChangeEvent, useState } from 'react'

import s from './packs.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Slider } from '@/components/ui/slider'
import { Table } from '@/components/ui/table'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.ts'

export const Packs = () => {
  const [sliderValue, setSliderValue] = useState([0, 10])
  const [searchName, setSearchName] = useState('')

  const packs = useGetDecksQuery({
    name: searchName,
    itemsPerPage: 15,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
  })

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = () => {
    createDeck({ name: 'Created Deck' })
  }

  const searchNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.currentTarget.value)
  }

  const clearFilterHandler = () => {
    setSliderValue([0, 10])
    setSearchName('')
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
        <div className={s.filter}>
          <TextField
            type="search"
            value={searchName}
            onChange={searchNameHandler}
            className={s.textField}
          />
          <div className={s.slider}>
            <Typography variant="body2">Number of cards</Typography>
            <Slider value={sliderValue} onChange={setSliderValue} max={10} />
          </div>
          <Button variant="secondary" onClick={clearFilterHandler}>
            <Icon name={'trash-bin'} className={s.icon} />
            Clear Filter
          </Button>
        </div>
      </div>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Cards</Table.HeadCell>
            <Table.HeadCell>Last Updated</Table.HeadCell>
            <Table.HeadCell>Created by</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {packs?.data?.items.map(pack => (
            <Table.Row key={pack.id}>
              <Table.Cell>{pack.name}</Table.Cell>
              <Table.Cell>{pack.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
              <Table.Cell>{pack.author.name}</Table.Cell>
              <Table.Cell>icon buttons</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
