import { createSlice } from '@reduxjs/toolkit';

const userCredSlice = createSlice({
  name: 'usercred', 
  initialState: {
    bvnCred: {}, 
    ninCred:{}
  },
  reducers: {
    updateBVNCred: (state, action) => {
      state.bvnCred = action.payload; 
    },
    updateNINCred: (state, action) => {
      state.ninCred = action.payload;
    },
   
  },
});


export const { updateBVNCred, updateNINCred } = userCredSlice.actions;


export default userCredSlice.reducer;
