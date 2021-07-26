import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from '../stores/reducers/favoriteSlice'
import userReducer from '../stores/reducers/userSlice'

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    user: userReducer,
  },
})