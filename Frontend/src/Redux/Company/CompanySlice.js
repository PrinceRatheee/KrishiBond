import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "./../../Helper/axiosinstance";

const initialState = {
  Company: null,
  error: null,
};


export const CompanyDetail = createAsyncThunk(
  "user/detail/update",
  async (data, { rejectWithValue }) => {
    console.log("data in thunk", data);
    try {
      const resp = await axiosinstance.post("api/auth/user/login/companydetails", data);
      console.log("resp", resp);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }


);

const CompanySlice = createSlice({
  name: "Company",
  initialState,
  reducers: {
    updateCompany: (state, action) => {
      state.Company = action.payload;
      state.error = null;
    },
  },
});

export const { updateCompany } = CompanySlice.actions;
export default CompanySlice.reducer;
