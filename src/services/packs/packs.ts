import { baseAPI } from '@/services/base-api.ts'

const decksAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<any, void>({
      query: () => `v1/decks`,
    }),
  }),
})

export const { useGetDecksQuery } = decksAPI
