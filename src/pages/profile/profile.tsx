import { EditProfileFormProps } from '@/components/forms'
import { useGetMeQuery } from '@/features/auth'
import { useUpdateProfileMutation } from '@/features/profile/model/services/profile.ts'
import { ProfileInfo } from '@/pages/profile/profile-info/profile-info.tsx'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const user =
    data && !('success' in data)
      ? {
          name: data.name,
          email: data.email,
          avatar: data.avatar,
        }
      : {
          name: '',
          email: '',
          avatar: '',
        }
  const onUpdate = (data: EditProfileFormProps) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      //form.append('name', data.name)
      form.append(key, data[key as keyof EditProfileFormProps])
    })
    updateProfile(form)
  }

  return <ProfileInfo data={user} update={onUpdate} />
}
