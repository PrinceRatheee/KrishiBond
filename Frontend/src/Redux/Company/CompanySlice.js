import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
  Company: null,
    error: null,
};


const CompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    updateCompany: (state) => {
        state.Company = action.payload;
        state.error = null;
      }
  },
});

export default CompanySlice.reducer;
