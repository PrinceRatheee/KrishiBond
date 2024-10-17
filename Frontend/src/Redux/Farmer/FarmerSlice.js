import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
  farmer: null,
  error:null,
};


export const FarmerDetail = createAsyncThunk(
  "user/detail/update",
  async (data, { rejectWithValue }) => {
    console.log("data in thunk", data);
    try {
      const resp = await axiosinstance.post("api/auth/user/login/farmerdetails", data);
      console.log("resp", resp);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);



  const FarmerSlice = createSlice({
    name: "farmer",
    initialState,
    reducers: {
        updateFarmer: (state, action) => {
        state.farmer= action.payload;
        }
    },

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


  
export const {
  updateFarmer,
} = FarmerSlice.actions;
export default FarmerSlice.reducer;

