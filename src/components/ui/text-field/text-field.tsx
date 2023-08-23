import { ComponentProps, forwardRef, useEffect, useState, KeyboardEvent } from 'react'

import classNames from 'classnames'

import s from './text-field.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export type TextFieldProps = {
  variant?: 'search' | 'text' | 'password'
  label?: string
  errorMessage?: string
  className?: string
  clearField?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { variant = 'text', errorMessage, className, onEnter, onKeyDown, clearField, label, ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const [currentType, setCurrentType] = useState(variant)

    const displayClearButton = clearField && rest.value

    const error = !!errorMessage?.length

    useEffect(() => {
      if (variant === 'password') {
        if (showPassword) setCurrentType('text')
        else setCurrentType('password')
      }
    }, [variant, showPassword])

    const showPasswordHandler = () => {
      showPassword ? setShowPassword(false) : setShowPassword(true)
    }

    const keyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') onEnter(e)
      else onKeyDown?.(e)
    }

    const labelClasses = classNames(s.label, {
      [s.disabled]: rest.disabled,
    })

    const inputClasses = classNames(className, s.input, {
      [s.search]: variant === 'search',
      [s.filled]: rest.value,
      [s.error]: error,
    })

    const searchIconClasses = classNames(s.searchIcon, {
      [s.disabledIcon]: rest.disabled,
      [s.filledIcon]: rest.value,
    })

    return (
      <div className={s.root}>
        <Typography variant="body2" className={labelClasses}>
          {label}
        </Typography>
        <div className={s.container}>
          <input
            className={inputClasses}
            type={variant === 'password' ? currentType : rest.type}
            ref={ref}
            {...rest}
            onKeyDown={keyHandler}
          />
          {variant === 'password' && (
            <button className={s.button} onClick={showPasswordHandler} disabled={rest.disabled}>
              {showPassword ? <Icon name="eyeOff" /> : <Icon name="eye" />}
            </button>
          )}
          {variant === 'search' && (
            <Icon name="search" width={20} height={20} className={searchIconClasses} />
          )}
          {variant === 'search' && displayClearButton && (
            <button className={s.button} onClick={clearField} disabled={rest.disabled}>
              <Icon name="cross" width={16} height={16} />
            </button>
          )}
        </div>
        {error && (
          <Typography variant="caption" className={s.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
