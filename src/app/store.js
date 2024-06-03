import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import extraSlice from '../features/slice/extraSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    extra: extraSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})