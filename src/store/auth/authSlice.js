import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", // checking, authenticated, not-authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;
      state.status = 'authenticated';
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.photoURL = photoURL;
      state.errorMessage = null;
    },
    logout: (state, {payload}) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const {login, logout, checkingCredentials} = authSlice.actions;

export default authSlice.reducer;
