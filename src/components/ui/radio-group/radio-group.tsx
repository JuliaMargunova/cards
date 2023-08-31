import { FC } from 'react'

import * as RadioGr from '@radix-ui/react-radio-group'
import classNames from 'classnames'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui/typography'

export type Option = Record<'label' | 'value', string>

export type RadioGroupProps = {
  options: Option[]
  value?: string
  onValueChange?: (value: string) => void
  errorMessage?: string
  disabled?: boolean
  name?: string
}

export const RadioGroup: FC<RadioGroupProps> = ({ options, errorMessage, ...rest }) => {
  const labelClasses = classNames(s.item, {
    [s.disabled]: rest.disabled,
  })

  return (
    <RadioGr.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {options.map(el => (
        <Typography as={'label'} variant={'body2'} key={el.value} className={labelClasses}>
          <RadioGr.Item value={el.value} className={s.radio}>
            <RadioGr.Indicator className={s.indicator} />
          </RadioGr.Item>
          {el.label}
        </Typography>
      ))}
      {errorMessage && (
        <Typography variant={'caption'} className={s.error}>
          {errorMessage}
        </Typography>
      )}
    </RadioGr.Root>
  )
}
