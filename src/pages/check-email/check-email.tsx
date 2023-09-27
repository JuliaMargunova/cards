import { FC } from 'react'

import { Link } from 'react-router-dom'

import s from './check-email.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { CheckEmailImage } from '@/pages/check-email/check-email-image/check-email-image.tsx'

type PropsType = {
  email: string
}

export const CheckEmail: FC<PropsType> = ({ email }) => {
  return (
    <div className={s.container}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Check your email
          </Typography>
          <div>
            <CheckEmailImage />
          </div>
          <Typography variant="body2" className={s.notification}>
            We have sent an e-mail with instructions to {email}
          </Typography>
          <Button as={Link} to={'/sign-in'} variant="link" className={s.loggingIn}>
            Try logging in
          </Button>
        </div>
      </Card>
    </div>
  )
}
