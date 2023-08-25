import { FC } from 'react'

import s from './avatar.module.scss'

type Props = {
  avatar: string
  size?: number
}

export const Avatar: FC<Props> = ({ avatar, size = 36 }) => {
  return (
    <>
      <img className={s.avatar} src={avatar} alt={'avatar'} width={size} height={size} />
    </>
  )
}
