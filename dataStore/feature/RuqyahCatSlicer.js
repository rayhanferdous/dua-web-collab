import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: undefined,
};

export const RuqyahCatSlicer = createSlice({
  name: "ruqyahCatController",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
   
  },
});

export const { setLoading, setData } = RuqyahCatSlicer.actions;

export default RuqyahCatSlicer.reducer;
