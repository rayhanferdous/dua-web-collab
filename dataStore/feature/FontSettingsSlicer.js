import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    arabicFont: 16,
    translationFont: 16,
    selectedScript: "KGFQ",
    selectedFont: "KGFQ",
  },
};

export const FontSettingsSlicer = createSlice({
  name: "FontSettingsController",
  initialState,
  reducers: {
    SetFontSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SetFontSettings } = FontSettingsSlicer.actions;

export default FontSettingsSlicer.reducer;
