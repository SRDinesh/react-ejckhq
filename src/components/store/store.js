import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoReducer';

export default () => {
  return configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
};
