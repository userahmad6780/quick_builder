import { configureStore } from '@reduxjs/toolkit'
import resumeReducer from './resumeSlice'

const store = configureStore({
  reducer: {
    userResume : resumeReducer
  }
});

export default store;