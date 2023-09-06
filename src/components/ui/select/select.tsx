import { FC, ReactNode } from 'react'

import * as Label from '@radix-ui/react-label'
import * as Select from '@radix-ui/react-select'

import { Typography } from '../typography'

import s from './select.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'

export type OptionType = {
  value: any
  label: any
}
export type SelectPropsType = {
  label?: string
  placeholder?: ReactNode
  value?: string
  onValueChange?: (value: any) => void
  defaultValue?: any
  options: OptionType[]
  disabled?: boolean
  required?: boolean
  className?: string
}

export const SelectDemo: FC<SelectPropsType> = ({
  label,
  placeholder,
  value,
  onValueChange,
  defaultValue,
  options,
  disabled,
  required,
  className,
}) => (
  <Label.Root>
    <Typography
      variant={'body2'}
      as={'label'}
      className={`${s.label} ${disabled && s.labelDisabled}`}
    >
      {label}
    </Typography>
    <Select.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
    >
      <Select.Trigger
        className={`${disabled ? s.triggerDisabled : s.trigger} ${className}`}
        asChild
        aria-label={'select'}
        tabIndex={1}
      >
        <div>
          <Select.Value placeholder={placeholder} />
          <Icon name={'arrowDown'} className={disabled ? s.iconDisabled : s.icon} />
        </div>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position={'popper'} className={s.content}>
          <Select.Viewport>
            {options.map(el => (
              <Select.Item key={el.value} value={el.value} className={s.item}>
                <Select.ItemText>{el.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </Label.Root>
)
