import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    backgroundColor: '#ffffff',
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload
    }
  }
});

export const { setBackgroundColor } = uiSlice.actions;

export default uiSlice.reducer;
