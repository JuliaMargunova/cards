import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'

type DropDownProps = {
  trigger?: ReactNode
  children: ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
} & DropdownMenu.DropdownMenuProps

export const DropDown: FC<DropDownProps> = ({ trigger, children, align = 'end', className }) => {
  const classNames = {
    trigger: s.trigger,
    btn: s.btn,
    content: clsx(s.content, className),
  }

  return (
    <DropdownMenu.Root modal>
      <DropdownMenu.Trigger className={classNames.trigger}>
        {trigger ?? (
          <button className={classNames.btn}>
            <Icon name="more" />
          </button>
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={align} className={classNames.content}>
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

type DropDownItemProps = {
  children: ReactNode
  onSelect?: (e: Event) => void
  className?: string
}

export const DropDownItem: FC<DropDownItemProps> = ({ children, className, onSelect }) => {
  const itemClass = clsx(s.profileBlock, className)

  return (
    <DropdownMenu.Item className={itemClass} onSelect={onSelect}>
      {children}
    </DropdownMenu.Item>
  )
}

type DropDownItemWithIconProps = Omit<DropDownItemProps, 'children'> & {
  icon: ReactNode
  text: string
}

export const DropDownItemWithIcon: FC<DropDownItemWithIconProps> = props => {
  const { icon, text, className, onSelect } = props

  const itemClass = clsx(s.item, className)

  return (
    <DropdownMenu.Item className={itemClass} onSelect={onSelect}>
      {icon} {text}
    </DropdownMenu.Item>
  )
}
