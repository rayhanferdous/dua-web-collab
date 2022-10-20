import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined,
    subCatId: undefined,
    allDuaOfCatID: undefined,
}

export const subCatSlicer = createSlice({
    name: 'subCatController',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = !state.loading;
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setSubCatIdData: (state, action) => {
            state.subCatId = action.payload
        },
        setallDuaOfCatID: (state, action) => {
            state.allDuaOfCatID = action.payload
        }
    },
})

export const { setLoading, setData, setSubCatIdData, setallDuaOfCatID } = subCatSlicer.actions

export default subCatSlicer.reducer