import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: undefined,
};

export const RuqyahDetailsSlicer = createSlice({
  name: "ruqyahDetailsSlicerController",
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

export const { setLoading, setData } = RuqyahDetailsSlicer.actions;

export default RuqyahDetailsSlicer.reducer;
