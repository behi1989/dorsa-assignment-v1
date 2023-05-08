import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/dist/query'

import {reviewsApi} from './slices/reviewsSlice'

export const store = configureStore({
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([reviewsApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
