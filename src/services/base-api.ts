import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from '@/services/base-query-with-reauth.ts'

export const baseAPI = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me', 'Cards'],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
