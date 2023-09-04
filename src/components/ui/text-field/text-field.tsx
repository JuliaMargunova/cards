import { forwardRef, useState, ComponentPropsWithoutRef } from 'react'

import classNames from 'classnames'

import s from './text-field.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export type TextFieldProps = {
  type?: 'search' | 'text' | 'password'
  label?: string
  errorMessage?: string
  clearField?: () => void
} & ComponentPropsWithoutRef<'input'>

type PropsType = TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  ({ type = 'text', errorMessage, className, clearField, label, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPasswordType = type === 'password'

    const isSearchType = type === 'search'

    const displayClearButton = isSearchType && clearField && rest.value

    const finalType = getFinalType(type, showPassword)

    const passwordHandler = () => setShowPassword(prev => !prev)

    const labelClasses = classNames(s.label, {
      [s.disabled]: rest.disabled,
    })

    const inputClasses = classNames(s.input, className, {
      [s.search]: isSearchType,
      [s.filled]: rest.value,
      [s.error]: !!errorMessage,
    })

    const searchIconClasses = classNames(s.searchIcon, {
      [s.disabledIcon]: rest.disabled,
      [s.filledIcon]: rest.value,
    })

    return (
      <div className={s.root}>
        <Typography as={'label'} variant="body2" className={labelClasses}>
          {label}
          <div className={s.container}>
            <input className={inputClasses} type={finalType} ref={ref} {...rest} />
            {isPasswordType && (
              <button
                type="button"
                className={s.button}
                onClick={passwordHandler}
                disabled={rest.disabled}
              >
                {showPassword ? <Icon name="eyeOff" /> : <Icon name="eye" />}
              </button>
            )}
            {isSearchType && (
              <Icon name="search" width={20} height={20} className={searchIconClasses} />
            )}
            {displayClearButton && (
              <button
                type="button"
                className={s.button}
                onClick={clearField}
                disabled={rest.disabled}
              >
                <Icon name="cross" width={16} height={16} />
              </button>
            )}
          </div>
        </Typography>
        {!!errorMessage && (
          <Typography variant="caption" className={s.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)

function getFinalType(type: TextFieldProps['type'], showPassword: boolean) {
  if (type === 'password' && !showPassword) {
    return 'password'
  }

  return 'text'
}
