import { UpdateProfileFormData } from './types.ts'

import { ProfileResponse } from '@/features/auth/model/types.ts'
import { baseAPI } from '@/services/base-api.ts'

const profileAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    updateProfile: builder.mutation<ProfileResponse, UpdateProfileFormData>({
      query: body => ({
        url: `v1/auth/me`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
})

export const { useUpdateProfileMutation } = profileAPI
