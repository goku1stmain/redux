// going to represent user reducer or user slice
import { createSlice } from "@reduxjs/toolkit";
// createSlice is going to create reducers in very easy way

// now creating new user reducer
export const themeSlice = createSlice({
  // contains all the information about the reducers, what action it should take place
  name: "theme", // name of the reducer is what you pass inside name variable
  initialState: { value: "" }, // your initial value
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
