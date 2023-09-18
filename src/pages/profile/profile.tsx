import { EditProfileFormProps } from '@/components/forms'
import { useGetMeQuery, useUpdateProfileMutation } from '@/features/auth'
import { DataType, ProfileInfo } from '@/pages/profile/profile-info/profile-info.tsx'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const user = data as DataType
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
