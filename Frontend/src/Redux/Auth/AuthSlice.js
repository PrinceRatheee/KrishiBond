import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "./../../Helper/axiosinstance";
import { useSelector } from "react-redux";

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
      console.log("action", action.payload.data.sendUser.role);
      const user = useSelector((state) => state.farmer);
      const company = useSelector((state) => state.Company);

      if (action.payload.data.sendUser.role == "industry") {
        console.log(user);
        console.log(company);
      }
    });
  },
});

export default AuthSlice.reducer;
