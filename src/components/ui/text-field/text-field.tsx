import { ComponentProps, forwardRef, useState, KeyboardEvent } from 'react'

import classNames from 'classnames'

import s from './text-field.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export type TextFieldProps = {
  type?: 'search' | 'text' | 'password'
  label?: string
  errorMessage?: string
  className?: string
  clearField?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

type PropsType = TextFieldProps & Omit<ComponentProps<'input'>, keyof TextFieldProps>

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  (
    { type = 'text', errorMessage, className, onEnter, onKeyDown, clearField, label, ...rest },
    ref
  ) => {
    const [currentType, setCurrentType] = useState(type)

    const displayClearButton = clearField && rest.value

    const error = !!errorMessage?.length

    const showPasswordHandler = () => {
      if (type === 'password') {
        setCurrentType(prevState => (prevState === 'text' ? 'password' : 'text'))
      }
    }

    const keyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') onEnter(e)
      else onKeyDown?.(e)
    }

    const labelClasses = classNames(s.label, {
      [s.disabled]: rest.disabled,
    })

    const inputClasses = classNames(className, s.input, {
      [s.search]: type === 'search',
      [s.filled]: rest.value,
      [s.error]: error,
    })

    const searchIconClasses = classNames(s.searchIcon, {
      [s.disabledIcon]: rest.disabled,
      [s.filledIcon]: rest.value,
    })

    return (
      <div className={s.root}>
        {label && (
          <Typography variant="body2" className={labelClasses}>
            {label}
          </Typography>
        )}
        <div className={s.container}>
          <input
            className={inputClasses}
            type={type === 'password' ? currentType : 'text'}
            ref={ref}
            {...rest}
            onKeyDown={keyHandler}
          />
          {type === 'password' && (
            <button className={s.button} onClick={showPasswordHandler} disabled={rest.disabled}>
              {currentType === 'text' ? <Icon name="eyeOff" /> : <Icon name="eye" />}
            </button>
          )}
          {type === 'search' && (
            <Icon name="search" width={20} height={20} className={searchIconClasses} />
          )}
          {type === 'search' && displayClearButton && (
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
