import { FC, ReactNode } from 'react'

import s from './card.module.scss'

interface CardProps {
  children?: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`${s.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}
