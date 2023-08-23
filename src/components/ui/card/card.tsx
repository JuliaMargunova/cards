import { FC, ReactNode } from 'react'

import s from './card.module.scss'

interface CardProps {
  children?: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={s.box}>
      <div className={`${s.container} ${className}`}> {children}</div>
    </div>
  )
}
