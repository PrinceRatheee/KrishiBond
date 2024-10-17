/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
  auth: [],
};

export const AuthSignup = createAsyncThunk(
  "/auth/user/signup",
  async (data, { rejectWithValue }) => {
    console.log("data in thunk", data);
    try {
      const resp = await axiosinstance.post("/api/auth/user/signup", data);

      console.log("resp", resp);
      return resp?.request?.status;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const AuthLogin = createAsyncThunk(
  "/auth/user/login",
  async (data, { rejectWithValue }) => {
    console.log("data in thunk", data);
    try {
      const resp = await axiosinstance.post("/api/auth/user/login", data);

      console.log("resp", resp);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(AuthLogin.fulfilled, (state, action) => {
      console.log("action", action.payload.data.sendUser.role)
     

      if (action.payload.data.sendUser.role == "industry") {
        console.log('here')
      }
    });
  },
});

export default AuthSlice.reducer;
