import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react'

import s from './avatar-uploader.module.scss'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'

type PropsType = {
  avatar?: string
  name: string
  updateAvatar: (formData: FormData) => void
  editable?: boolean
  size?: number
}

export const AvatarUploader: FC<PropsType> = memo(props => {
  const { avatar, name, updateAvatar, editable = true, size = 96 } = props
  const [image, setImage] = useState(avatar)
  const inputRef = useRef<HTMLInputElement>(null)
  const photoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])
      updateAvatar(formData)
    }
  }

  useEffect(() => {
    setImage(avatar)
  }, [avatar])

  return (
    <div className={s.avatarContainer}>
      <Avatar size={size} className={s.avatar} userName={name} image={image} />
      {editable && (
        <>
          <Button
            onClick={() => inputRef?.current?.click()}
            variant="secondary"
            className={s.editImage}
          >
            <Icon height={16} width={16} className={s.icon} name={'edit'} />
          </Button>
          <input
            ref={inputRef}
            type={'file'}
            style={{ display: 'none' }}
            onChange={photoSelected}
            accept={'image/*'}
          />
        </>
      )}
    </div>
  )
})
