import { baseAPI } from '@/services/base-api.ts'
import { DecksParams, DecksResponse } from '@/services/decks/types.ts'

const decksAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, DecksParams>({
      query: params => ({
        url: `v1/decks`,
        method: 'GET',
        params: params ?? {},
      }),
    }),
  }),
})

export const { useGetDecksQuery } = decksAPI
