import { Link, useParams } from 'react-router-dom'

import s from './pack.module.scss'

import { Button } from '@/components/ui/button'
import { DropDown, DropDownItemWithIcon } from '@/components/ui/dropdown'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/features/auth'
import { ProfileResponse } from '@/features/auth/model/types.ts'
import { useGetDeckInfoQuery } from '@/features/packs/model/services'

export const Pack = () => {
  const { id: packId } = useParams()
  const { data: pack, isLoading: packLoading } = useGetDeckInfoQuery({ id: packId as string })
  const authorId = pack?.userId

  const { data: me } = useGetMeQuery()
  const authUserId = (me as ProfileResponse)?.id

  const isMyPack = authorId === authUserId

  if (packLoading) return <p>Loading...</p>

  return (
    <section className={s.root}>
      <Button as={Link} to="/packs" variant="link" className={s.button}>
        <Icon name={'arrow-back'} width={22} height={22} />
        <Typography variant="body2" className={s.text}>
          Back to Packs List
        </Typography>
      </Button>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large" className={s.title}>
            {pack?.name}
            {isMyPack && (
              <DropDown>
                <DropDownItemWithIcon icon={<Icon name="play" />} text="Learn" />
                <DropDownItemWithIcon icon={<Icon name="edit" />} text="Edit" />
                <DropDownItemWithIcon icon={<Icon name="delete" />} text="Delete" />
              </DropDown>
            )}
          </Typography>
          <Button onClick={() => alert('a')}>{isMyPack ? 'Add New Card' : 'Learn Cards'}</Button>
        </div>
        {pack?.cover && <img src={pack.cover} alt="Cover" className={s.cover} />}
        <TextField type="search" placeholder="Search by question" />
      </div>
    </section>
  )
}
