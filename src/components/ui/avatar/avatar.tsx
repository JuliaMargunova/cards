import { FC } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import classNames from 'classnames'

import s from './avatar.module.scss'

type Props = {
  size?: number
  image?: string
  style?: string
  userName: string
}
export const Avatar: FC<Props> = props => {
  const { style, image, size = 36, userName } = props

  let initials = userName
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join(' ')

  return (
    <div className={s.avatar}>
      <AvatarRadix.Root className="AvatarRoot">
        <AvatarRadix.Image
          className={style}
          src={image}
          alt="User Avatar"
          width={size}
          height={size}
        />
        {!image && (
          <AvatarRadix.Fallback className={classNames(s.fallback, size)} delayMs={600}>
            {initials}
          </AvatarRadix.Fallback>
        )}
      </AvatarRadix.Root>
    </div>
  )
}
