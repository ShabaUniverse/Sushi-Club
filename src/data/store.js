import { configureStore } from '@reduxjs/toolkit';
import menu from './slices/menuSlice';
const store = configureStore({
  reducer: {
    menu
  },
});

export default store;