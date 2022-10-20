import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined
}

export const bookSlicer = createSlice({
    name: 'bookController',
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

export const { setLoading, setData } = bookSlicer.actions

export default bookSlicer.reducer