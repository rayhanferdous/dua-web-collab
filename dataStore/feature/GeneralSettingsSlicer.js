import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    showArabic: false,
    showTranslation: false,
    showTransliteration: false,
    showReference: false,
  },
};

export const GeneralSettingsSlicer = createSlice({
  name: "GeneralSettingsController",
  initialState,
  reducers: {
    SetGeneralSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { SetGeneralSettings } = GeneralSettingsSlicer.actions;

export default GeneralSettingsSlicer.reducer;
