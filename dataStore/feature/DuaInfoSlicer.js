import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: undefined,
};

export const duaInfoSlicer = createSlice({
  name: "duaInfoController",
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

export const { setLoading, setData } = duaInfoSlicer.actions;

export default duaInfoSlicer.reducer;
