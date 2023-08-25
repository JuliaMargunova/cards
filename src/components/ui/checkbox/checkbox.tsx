import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as RadixLabel from '@radix-ui/react-label'
import classNames from 'classnames'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
  label?: string
  disabled?: boolean
}

export const Checkbox: FC<CheckboxProps> = props => {
  const { checked, label, disabled, id, onChange } = props

  return (
    <div className={s.container}>
      <RadixLabel.Root className={classNames(s.label, { [s.disabled]: disabled })}>
        <div className={classNames(s.checkboxWrapper, { [s.disabled]: disabled })}>
          <RadixCheckbox.Root
            id={id}
            className={classNames(s.checkbox, s.hover)}
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
          >
            {checked && (
              <RadixCheckbox.Indicator className={s.indicator} forceMount>
                <Check />
              </RadixCheckbox.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </RadixLabel.Root>
    </div>
  )
}

export const Check: FC = () => {
  return (
    <svg width={24} height={24} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 0H2a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V2a2 2 0 00-2-2zM7 14L2 9l1.41-1.41L7 11.17l7.59-7.59L16 5l-9 9z"
        fill="currentColor"
      />
    </svg>
  )
}
