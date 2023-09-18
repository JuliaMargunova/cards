import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import s from './avatar-uploader.module.scss'

import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { DataType } from '@/pages/profile/profile-info/profile-info.tsx'

type PropsType = {
  data: DataType
  updateAvatar: (formData: FormData) => void
  isEditMode: boolean
}

export const AvatarUploader: FC<PropsType> = props => {
  const { data, updateAvatar, isEditMode } = props
  const [avatar, setAvatar] = useState(data.avatar)
  const inputRef = useRef<HTMLInputElement>(null)
  const photoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])
      updateAvatar(formData)
    }
  }

  useEffect(() => {
    setAvatar(data.avatar)
  }, [data.avatar])

  return (
    <div className={s.avatarContainer}>
      <Avatar size={96} className={s.avatar} userName={data.name || data.email} image={avatar} />
      {!isEditMode && (
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
}
