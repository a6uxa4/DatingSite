import {
  getUserFromStorage,
  removeUserFromStorage,
  saveUserToStorage,
} from "@/lib/helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: getUserFromStorage() || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      saveUserToStorage(action.payload);
    },
    logout: (state) => {
      state.user = null;
      removeUserFromStorage();
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
