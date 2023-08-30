import { CSSProperties, FC } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

type Props = {
  size?: number
  image?: string
  style?: CSSProperties
  userName: string
}

export const Avatar: FC<Props> = ({ style, image, size = 36, userName }) => {
  let initials = userName
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join(' ')

  const styles: CSSProperties = {
    width: size,
    height: size,
    ...(style || {}),
  }

  return (
    <div className={s.avatar}>
      <AvatarRadix.Root className="AvatarRoot">
        <AvatarRadix.Image className={s.image} src={image} alt="User Avatar" style={styles} />
        {!image && (
          <AvatarRadix.Fallback className={s.fallback} style={styles} delayMs={600}>
            {initials}
          </AvatarRadix.Fallback>
        )}
      </AvatarRadix.Root>
    </div>
  )
}
