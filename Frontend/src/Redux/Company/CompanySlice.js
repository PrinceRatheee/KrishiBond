import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
  Company: [],
};


const CompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {},
});

export default CompanySlice.reducer;
