import { EditProfileFormProps } from '@/components/forms'
import { useGetMeQuery, useUpdateProfileMutation } from '@/features/auth'
import { ProfileInfo } from '@/features/profile/ui'
import { DataType } from '@/features/profile/ui/profile-info/profile-info.tsx'

export const Profile = () => {
  const { data } = useGetMeQuery()
  const [updateProfile] = useUpdateProfileMutation()
  const user = data as DataType
  const onUpdate = (data: EditProfileFormProps) => {
    const form = new FormData()

    Object.keys(data).forEach(key => {
      form.append(key, data[key as keyof EditProfileFormProps])
    })
    updateProfile(form)
  }

  return <ProfileInfo data={user} update={onUpdate} />
}
