import s from './packs.module.scss'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/packs/packs.ts'

export const Packs = () => {
  const packs = useGetDecksQuery()

  console.log(packs?.data?.items)

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large">
            Packs list
          </Typography>
          <Button>Add New Pack</Button>
        </div>
      </div>
      Content
    </div>
  )
}
