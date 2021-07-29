import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import counter from './counterSlice';
// import sliceExample from './sliceExample.js';

const makeStore = () =>
  configureStore({
    reducer: {
      counter,
      // sliceExample
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
