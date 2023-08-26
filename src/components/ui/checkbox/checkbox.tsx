import { FC } from 'react'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import * as RadixLabel from '@radix-ui/react-label'
import classNames from 'classnames'

import s from './checkbox.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'

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
              <RadixCheckbox.Indicator
                className={classNames(s.indicator, { [s.disabled]: disabled })}
                forceMount
              >
                <Icon name={'check'} />
              </RadixCheckbox.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </RadixLabel.Root>
    </div>
  )
}
