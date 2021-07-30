// This slice is not wired up. This is just an example of how you could make api calls within thunk to manage state.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

export const getApiData = createAsyncThunk(
  'example/getApiData',
  async (thunkAPI) => {
    const result = await axios.get('/api url address goes here');
    return result.data;
  }
);

export const postApiData = createAsyncThunk(
  'example/postApiData',
  async (payload, thunkAPI) => {
    // use information from payload to make api Call
    await axios.post('/api url address goes here', {
      // request configs goes here //
    });
    thunkAPI.dispatch(getApiData());
  }
);

export const deleteApiData = createAsyncThunk(
  'example/deleteApiData',
  async (payload, thunkAPI) => {
    // use information from payload to make api Call
    await axios.delete('/api url address goes here', {
      // request configs goes here //
    });
    thunkAPI.dispatch(getApiData());
  }
);

const initialState = {
  entities: {},
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    simpleIncrement(state, action) {
      // you can do something here
      state.entities += action.payload;
    },
    simpleDecrement(state, action) {
      // you can do something here
      state.entities -= action.payload;
    },
  },
  extraReducers: {
    // The HYDRATE function is what manages the state between client and server
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.example,
      };
    },
    [getApiData.fulfilled]: (state, action) => {
      state.entities = action.payload;
      // if you got here, the thunk was succesfull
    },
    [postApiData.fulfilled]: (state, action) => {
      console.log('postApiData.fulfilled');
      // if you got here, the thunk was succesfull
    },
    [deleteApiData.fulfilled]: (state, action) => {
      console.log('deleteApiData.fulfilled');
      // if you got here, the thunk was succesfull
    },
  },
});

// this is JavaScript Destructuring assignment
const { actions, reducer } = exampleSlice;
export const { simpleIncrement } = actions;
export default reducer;
