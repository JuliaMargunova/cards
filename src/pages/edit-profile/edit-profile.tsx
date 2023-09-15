import { ChangeEvent, useState } from 'react'

import { Link } from 'react-router-dom'

import s from './edit-profile.module.scss'

import { EditProfileFormProps, EditProfileForm } from '@/components/forms'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

export const EditProfile = () => {
  const [isEditMode, setEditMode] = useState(false)
  const profile = {
    userName: 'Ivan',
    email: 'j&johnson@gmail.com',
    image: 'https://aquarium-fish-home.ru/wp-content/uploads/2019/08/s1200-3.jpg',
  }
  const onSubmit = (data: EditProfileFormProps) => {
    alert(JSON.stringify(data))
    toggleEditMode()
  }
  const toggleEditMode = () => {
    setEditMode(prevIsEditMode => !prevIsEditMode)
  }

  const photoSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const formData = new FormData()

      formData.append('avatar', event.target.files[0])
      alert(formData)
    }
  }

  return (
    <div className={s.root}>
      <Card>
        <div className={s.content}>
          <Typography as="h2" variant="large">
            Personal Information
          </Typography>
          <div className={s.avatarContainer}>
            <Avatar
              size={96}
              className={s.avatar}
              userName={profile.userName}
              image={profile.image}
            />
            {!isEditMode && (
              <label>
                <Button variant="secondary" className={s.editImage}>
                  <Icon height={16} width={16} className={s.icon} name={'edit'} />
                </Button>
                <input type={'file'} style={{ display: 'none' }} onChange={photoSelected} />
              </label>
            )}
          </div>
          {isEditMode ? (
            <EditProfileForm
              onSubmit={onSubmit}
              className={s.form}
              initialValues={{ nickName: profile.userName }}
            />
          ) : (
            <>
              <div className={s.nickName}>
                <Typography as="h1" variant="large">
                  {profile.userName}
                </Typography>
                <button className={s.editNickname} onClick={toggleEditMode}>
                  <Icon height={16} width={16} className={s.icon} name={'edit'} />
                </button>
              </div>
              <Typography as="h2" variant="body2" className={s.email}>
                {profile.email}
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
