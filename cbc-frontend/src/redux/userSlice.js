import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async (credentials) => {
  const res = await axios.post("http://localhost:3000/api/users/login", credentials);
  return res.data;
});

export const signup = createAsyncThunk("user/signup", async (data) => {
  const res = await axios.post("http://localhost:3000/api/users/", data);
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, token: null, status: "idle" },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;