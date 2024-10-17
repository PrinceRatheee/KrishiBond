/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "./../../Helper/axiosinstance";
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
  role: localStorage.getItem("role") || "",
  token: localStorage.getItem("token") || "",
  data: JSON.parse(localStorage.getItem("data")) || {},
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
  reducers: {
    logout: (state, action) => {
      console.log("logout");
      state.isLoggedIn = false;
      state.role = "";
      state.data = "";
      state.token = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      localStorage.removeItem("data");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(AuthLogin.fulfilled, (state, action) => {
      console.log("action in builder", action.payload);
      state.isLoggedIn = true;
      state.role = action.payload?.data.sendUser.role;
      state.data = action.payload?.data.sendUser;
      state.token = action.payload?.data.token;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", action.payload?.data.sendUser.role);
      localStorage.setItem("token", action.payload?.data.token);
      localStorage.setItem(
        "data",
        JSON.stringify(action.payload?.data.sendUser)
      );
    });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
