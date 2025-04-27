// store.js
// globalStateSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myBoolean: false, // initially true
};

const globalStateSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setTrue(state) {
      state.myBoolean = true;
    },
    setFalse(state) {
      state.myBoolean = false;
    },
    toggle(state) {
      state.myBoolean = !state.myBoolean;
    }
  },
});

export const { setTrue, setFalse, toggle } = globalStateSlice.actions;
export default globalStateSlice.reducer;