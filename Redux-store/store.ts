import { configureStore } from '@reduxjs/toolkit';
import rootSliceReducer from './index';

export const store = configureStore({
  reducer: {
    rootState: rootSliceReducer,
  },
});

store.subscribe(() => console.log(store.getState()));
