import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const packSchema = z.object({
  name: z.string().nonempty('Required').min(3, 'The name must be at least 3 characters'),
  isPrivate: z.boolean(),
  cover: z.any().optional(),
})

export type PackFormType = z.infer<typeof packSchema>

export const usePackForm = (props: PackFormType) => {
  const { control, watch, formState, setError, clearErrors, handleSubmit } = useForm<PackFormType>({
    resolver: zodResolver(packSchema),
    defaultValues: props,
  })

  return { control, watch, setError, formState, clearErrors, handleSubmit }
}
