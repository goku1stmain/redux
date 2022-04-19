// going to represent user reducer or user slice
import { createSlice } from "@reduxjs/toolkit";
// createSlice is going to create reducers in very easy way

// now creating new user reducer
export const userSlice = createSlice({
  // contains all the information about the reducers, what action it should take place
  name: "user", // name of the reducer is what you pass inside name variable
  initialState: { value: { name: "sdsd", age: 0, email: "dsdls@gmail.com" } }, // your initial value
  reducers: {
    // passing different functions to change the value
    login: (state, action) => {
      state.value = action.payload;
    }, // each functions takes in two values they are your state and action to be performed
    logout: (state, action) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
