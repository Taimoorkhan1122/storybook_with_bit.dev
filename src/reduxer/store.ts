import {configureStore} from '@reduxjs/toolkit';
import taskStateReducer from '../components/taskBox/taskSlice'

export const store = configureStore({
  reducer: {
    tasksList: taskStateReducer,
  },
}); 

// exporting necessary types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;