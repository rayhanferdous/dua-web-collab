import { createSlice } from '@reduxjs/toolkit'

export const globalDataSlicer = createSlice({
  name: 'globalData',
  initialState: {
    scriptDropdown: false,
  },
  reducers: {
    ScriptDropdown: (state, action) => {
      state.arabicScriptDrop = action.payload
    },
  }
})

export const { ScriptDropdown } = globalDataSlicer.actions

export default globalDataSlicer.reducer