import { useEffect, useMemo, useState } from 'react'

import s from './packs.module.scss'

import { PackForm } from '@/components/forms/pack'
import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { usePacksFilter, usePacksPagination } from '@/features/packs/model/hooks'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/model/services'
import { FilterControls, PacksTable } from '@/features/packs/ui'

export const Packs = () => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = usePacksPagination()
  const { searchName, tabValue, sliderValue, setSearchName, setTabValue, setSliderValue } =
    usePacksFilter()

  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
  const sortedString = useMemo(() => {
    if (!sort) return ''

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const packs = useGetDecksQuery({
    authorId: tabValue,
    name: searchName,
    orderBy: sortedString,
    currentPage,
    itemsPerPage: pageSize,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [sliderValue, searchName, tabValue, pageSize])

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = (data: FormData) => {
    createDeck(data)
    setOpen(false)
  }

  return (
    <section className={s.root}>
      <ModalWindow open={open} setOpen={setOpen} title="Create new pack">
        <PackForm onSubmit={createDeckHandler} onCancel={() => setOpen(false)} />
      </ModalWindow>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large">
            Packs list
          </Typography>
          <Button onClick={() => setOpen(true)}>Add New Pack</Button>
        </div>
        <FilterControls
          searchName={searchName}
          setSearchName={setSearchName}
          sliderValue={sliderValue}
          sliderMaxValue={packs?.data?.maxCardsCount}
          setSliderValue={setSliderValue}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
      </div>
      {packs?.data?.items && <PacksTable items={packs.data.items} sort={sort} onSort={setSort} />}
      <Pagination
        totalCount={packs?.data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        className={s.pagination}
      />
    </section>
  )
}
