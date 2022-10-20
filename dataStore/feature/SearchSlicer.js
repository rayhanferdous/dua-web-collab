import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: undefined,
};

export const searchSlicer = createSlice({
  name: "searchController",
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

export const { setLoading, setData } = searchSlicer.actions;

export default searchSlicer.reducer;
