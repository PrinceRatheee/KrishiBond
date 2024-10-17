import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
  farmer: [],
};




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

