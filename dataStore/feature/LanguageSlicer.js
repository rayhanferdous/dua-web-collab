import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

export const languageSlicer = createSlice({
  name: "languageController",
  initialState,
  reducers: {
    SetLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { SetLanguage } = languageSlicer.actions;

export default languageSlicer.reducer;
