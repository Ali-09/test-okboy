import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from 'state/slices/coins-slice'

export const store = configureStore({
  reducer: {
    coins: coinsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})