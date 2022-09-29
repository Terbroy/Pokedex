import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/username.slice'

export default configureStore({
  reducer: {
    userName: userNameSlice
	}
})