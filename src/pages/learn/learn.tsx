import { useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import s from './learn.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { useGetRandomCardQuery } from '@/features/cards/model/services'
import { useGetDeckInfoQuery } from '@/features/packs/model/services'

export const Learn = () => {
  const [rateMode, setRateMode] = useState(false)
  const params = useParams()
  const id = params.id as string
  const { data: pack } = useGetDeckInfoQuery({ id })
  const { data: card } = useGetRandomCardQuery({ id })

  console.log(card)

  return (
    <>
      <Button as={Link} to="/packs" variant="link" className={s.button}>
        <Icon name={'arrow-back'} width={22} height={22} />
        <Typography variant="body2" className={s.text}>
          Back to Pack List
        </Typography>
      </Button>
      <section className={s.root}>
        <Card className={s.content}>
          <Typography as="h1" variant="large">
            Learn {pack?.name}
          </Typography>
          <div className={s.question}>
            <Typography variant="body1">
              <b>Question:</b> {card?.question}
            </Typography>
            <Typography variant="body2" className={s.caption}>
              Count of attempts: {card?.shots}
            </Typography>
          </div>

          {rateMode ? (
            <>
              <div className={s.answer}>
                <Typography variant="body1">
                  <b>Answer:</b> {card?.answer}
                </Typography>
              </div>
              <Button onClick={() => setRateMode(false)} fullWidth>
                Next Question
              </Button>
            </>
          ) : (
            <Button onClick={() => setRateMode(true)} fullWidth>
              Show Answer
            </Button>
          )}
        </Card>
      </section>
    </>
  )
}
