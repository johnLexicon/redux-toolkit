import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  // Redux Toolkit allows to mutate state in reducers, it uses the Immer library in the background
  reducers: {
    increment: (state) => state.count + 1,
    decrement: (state) => state.count - 1,
    incrementByAmount: (state, action) => state.count + action.payload
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
