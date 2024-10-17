import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
    farmer:[]
  };


  
 export const FarmerSignup = createAsyncThunk(
    "/auth/user/signup",
    async (data, { rejectWithValue }) => {
      console.log("data in thunk", data);
      try {
        const resp = await axiosinstance.post("/api/auth/user/signup", data);

        console.log("resp", resp);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const FarmerLogin = createAsyncThunk(
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


  const FarmerSlice = createSlice({
    name: "farmer",
    initialState,
    reducers: {},
    // // extraReducers: (builder) => {
    // builder.addCase(FarmerLogin.fulfilled, (state, action) => {
      
    //   console.log("action", action.payload);
    //   state.isLoggedIn = true;
    //   state.role = action.payload?.data.userRole;
    //   state.data = action.payload?.data.userDetail;
    //   localStorage.setItem("isLoggedIn", true);
    //   localStorage.setItem("role", action.payload?.data.userRole);
    //   localStorage.setItem(
    //     "data",
    //     JSON.stringify(action.payload?.data.userDetail)
    //   );
    // });
// }
  });

export default FarmerSlice.reducer;