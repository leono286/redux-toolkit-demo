import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';
import uiSlice from './UiSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    ui: uiSlice
  }
});

export default store;
