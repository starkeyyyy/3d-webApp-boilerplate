
import { configureStore } from '@reduxjs/toolkit';
import globalStateReducer from './storeSlice';

export const store = configureStore({
  reducer: {
    globalState: globalStateReducer,
  },
});
