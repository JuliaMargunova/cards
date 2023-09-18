import { FC, useState } from 'react'

import { Link } from 'react-router-dom'

import s from './profile-info.module.scss'

import { EditProfileForm, EditProfileFormProps } from '@/components/forms'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'
import { useUpdateProfileMutation } from '@/features/profile/model/services/profile.ts'
import { AvatarUploader } from '@/pages/profile/avatar-uploader/avatar-uploader.tsx'

export type DataType = {
  avatar: string
  email: string
  name: string
}

type PropsType = {
  data: DataType
  update: (value: EditProfileFormProps) => void
  isEmailVer?: boolean
}

export const ProfileInfo: FC<PropsType> = props => {
  const { data, update } = props
  const [updateProfile] = useUpdateProfileMutation()
  const [isEditMode, setEditMode] = useState(false)

  const onSubmit = (data: EditProfileFormProps) => {
    update(data)
    toggleEditMode()
  }
  const toggleEditMode = () => {
    setEditMode(prevIsEditMode => !prevIsEditMode)
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Personal Information
          </Typography>
          <AvatarUploader data={data} updateAvatar={updateProfile} isEditMode={isEditMode} />
          {isEditMode ? (
            <EditProfileForm
              onSubmit={onSubmit}
              className={s.form}
              initialValues={{ name: data.name }}
            />
          ) : (
            <>
              <div className={s.nickName}>
                <Typography as="h1" variant="large">
                  {data.name}
                </Typography>
                <button className={s.editNickname} onClick={toggleEditMode}>
                  <Icon height={16} width={16} className={s.icon} name={'edit'} />
                </button>
              </div>
              <Typography as="h2" variant="body2" className={s.email}>
                {data.email}
              </Typography>
              <Button as={Link} to="/sign-in" variant="secondary" className={s.logout}>
                <Icon className={s.icon} name={'logout'} height={16} width={16} />
                <Typography variant={'subtitle2'}>Logout</Typography>
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  )
}
