import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined
}

export const duaDailySlicer = createSlice({
    name: 'duaDailyController',
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

export const { setLoading, setData } = duaDailySlicer.actions

export default duaDailySlicer.reducer