import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: undefined
}

export const drawerSlicer = createSlice({
    name: 'darwerController',
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

export const { setLoading, setData } = drawerSlicer.actions

export default drawerSlicer.reducer