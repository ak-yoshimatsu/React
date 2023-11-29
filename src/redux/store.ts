import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

// カウンターが今どのような値なのか？
// どのコンポーネントからも使えるようにする
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
