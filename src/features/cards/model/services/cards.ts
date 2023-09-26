import { CardsParams, CardsResponse } from '@/features/cards/model/services/types.ts'
import { baseAPI } from '@/services/base-api.ts'

const cardsAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
      query: ({ id, params }) => ({
        url: `v1/decks/${id}/cards`,
        method: 'GET',
        params: params ?? {},
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsAPI
