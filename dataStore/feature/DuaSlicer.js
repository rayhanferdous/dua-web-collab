import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    subCatDua: undefined,
}

export const duaSlicer = createSlice({
    name: 'duaController',
    initialState,
    reducers: {
        getSubCatDua: (state, action) => {
            state.subCatDua = action.payload;
        },


    },
})

export const { setLoading, setData, getSubCatDua } = duaSlicer.actions

export default duaSlicer.reducer