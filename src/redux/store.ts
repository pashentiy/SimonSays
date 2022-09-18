import { configureStore } from '@reduxjs/toolkit';
import sequenceReducer from './slices/sequenceSlice'

export const store = configureStore({
  reducer: {
    userSequence: sequenceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
