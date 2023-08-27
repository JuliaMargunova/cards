import { ComponentPropsWithoutRef, ElementType } from 'react'

import classNames from 'classnames'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'subtitle1'
    | 'body2'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
} & ComponentPropsWithoutRef<T>
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & ComponentPropsWithoutRef<T>
) => {
  const { variant = 'body1', className, as: Component = 'p', ...rest } = props

  return <Component className={classNames(s[variant], className)} {...rest} />
}
