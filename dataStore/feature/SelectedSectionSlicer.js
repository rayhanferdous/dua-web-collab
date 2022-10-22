import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "The servant is dependent on his Lord",
};

export const SelectedSectionSlicer = createSlice({
  name: "SelectedSectionController",
  initialState,
  reducers: {
    SetSelectedSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SetSelectedSection } = SelectedSectionSlicer.actions;

export default SelectedSectionSlicer.reducer;
