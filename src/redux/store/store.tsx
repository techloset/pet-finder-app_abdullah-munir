import { configureStore } from '@reduxjs/toolkit'
import  petDataReducer  from '../slice/userSlice'
import detailSliceReducer from '../slice/detailSlice'
import organizationSliceReducer from '../slice/organizationSlice'

export const store = configureStore({
  reducer: {
    orgData: organizationSliceReducer,
    petData: detailSliceReducer,
    data :petDataReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch