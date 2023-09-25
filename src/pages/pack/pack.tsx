import { Link } from 'react-router-dom'

import s from './pack.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export const Pack = () => {
  return (
    <section className={s.root}>
      <Button as={Link} to="/packs" variant="link" className={s.button}>
        <Icon name={'arrow-back'} width={22} height={22} />
        <Typography variant="body2" className={s.text}>
          Back to Packs List
        </Typography>
      </Button>
    </section>
  )
}
