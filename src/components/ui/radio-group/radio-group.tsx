import { FC } from 'react'

import * as RadioGr from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui/typography'

export type Option = {
  label: string
  value: string
}

type RadioGroupProps = {
  options: Option[]
  value?: string
  onValueChange?: (value: string) => void
}

export const RadioGroup: FC<RadioGroupProps> = ({ options, ...rest }) => {
  return (
    <RadioGr.Root aria-label={'Aria label'} {...rest} className={s.root}>
      {options.map(el => (
        <div key={el.value} className={s.item}>
          <RadioGr.Item value={el.value} className={s.radio}>
            <RadioGr.Indicator className={s.indicator} />
          </RadioGr.Item>
          <Typography variant={'body2'}>{el.label}</Typography>
        </div>
      ))}
    </RadioGr.Root>
  )
}
