import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const editProfileSchema = z.object({
  nickName: z.string().min(3).trim(),
})

export type EditProfileFormProps = z.infer<typeof editProfileSchema>

export const useEditProfile = () => {
  const { control, handleSubmit } = useForm<EditProfileFormProps>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      nickName: '',
    },
  })

  return { control, handleSubmit }
}
