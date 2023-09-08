import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type DropDownMenuType = {
  items: Array<{ component: ReactNode }>
  trigger: ReactNode
} & DropdownMenu.DropdownMenuProps

export const DropDown: FC<DropDownMenuType> = ({ trigger, items }) => {
  const itemsForRender = items.map((el, i) => (
    <DropdownMenu.Item className={s.item} key={i}>
      {el.component}
    </DropdownMenu.Item>
  ))

  return (
    <DropdownMenu.Root modal>
      <DropdownMenu.Trigger className={s.trigger}>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align="end" className={s.content}>
          {itemsForRender}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
