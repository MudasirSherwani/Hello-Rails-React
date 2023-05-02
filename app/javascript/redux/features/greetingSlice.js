import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const FETCH_GREETING = 'redux/messages/FETCH_GREETING';

const url = 'http://127.0.0.1:3000/api/greeting';

// Fetch the greeting
export const fetchGreetings = createAsyncThunk(
  FETCH_GREETING,
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Set the initial state
const initialState = {
  greetings: [],
  error: null,
  status: 'idle',
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    greeting(state, action) {
      state.greetings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greetings = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const { greeting } = greetingSlice.actions;
export default greetingSlice.reducer;