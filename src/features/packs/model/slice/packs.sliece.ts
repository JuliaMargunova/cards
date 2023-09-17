import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
  filter: {
    tabValue: '',
    searchName: '',
    sliderValue: [0, 10],
  },
}

const slice = createSlice({
  name: 'packs',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ newPage: number }>) => {
      state.pagination.currentPage = action.payload.newPage
    },
    setPageSize: (state, action: PayloadAction<{ newPageSize: number }>) => {
      state.pagination.pageSize = action.payload.newPageSize
    },
  },
})

export const packsReducer = slice.reducer

export const packsActions = slice.actions
