import { Link, Navigate } from 'react-router-dom'

import s from './sign-up-page.module.scss'

import { SignUpForm } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { InitLoader } from '@/components/ui/loading'
import { Toast } from '@/components/ui/toast'
import { Typography } from '@/components/ui/typography'
import { useSignUpMutation } from '@/features/auth/model/services/auth.ts'
import { SignUpArgs } from '@/features/auth/model/types.ts'

export const SignUpPage = () => {
  const onSubmit = (data: SignUpArgs) => {
    signUp({
      email: data.email,
      password: data.password,
    })
  }
  const [signUp, { data, error, isLoading }] = useSignUpMutation()

  if (isLoading) return <InitLoader />
  if (error) {
    return (
      <>
        <SignUpPage />
        <Toast description={'Email already exists'} title={'Error'} variant={'destructive'} />
      </>
    )
  }

  if (data) {
    return <Navigate to={'/sign-in'} />
  }
  //<Toast description={`Account ${data.email} created successfully`} title={'Success'} />

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Sign Up
          </Typography>
          <SignUpForm onSubmit={onSubmit} className={s.form} />
          <div className={s.login}>
            <Typography variant="body2">Already have an account?</Typography>
            <Button as={Link} to="/sign-in" variant="link" className={s.signIn}>
              Sign In
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
