import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined
}

export const bookDetailsSlicer = createSlice({
    name: 'bookDetailsController',
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

export const { setLoading, setData } = bookDetailsSlicer.actions

export default bookDetailsSlicer.reducer