import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: undefined,
  ruqyahSubCatId: undefined,
};

export const RuqyahSubCatSlicer = createSlice({
  name: "ruqyahSubCatController",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },

    setRuqyahSubCatId: (state, action) => {
      state.ruqyahSubCatId = action.payload;;
    }
  },
});

export const { setLoading, setData, setRuqyahSubCatId } = RuqyahSubCatSlicer.actions;

export default RuqyahSubCatSlicer.reducer;
