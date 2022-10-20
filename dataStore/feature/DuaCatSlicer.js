import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined
}

export const duaCatSlicer = createSlice({
    name: 'duaCatController',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = !state.loading;
        },
        setData: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { setLoading, setData } = duaCatSlicer.actions

export default duaCatSlicer.reducer