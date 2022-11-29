import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plans: [{ id: 0, name: "Favorites", targetDays: 5, duas: [] },],
};

export const PlansSlicer = createSlice({
    name: "PlansController",
    initialState,
    reducers: {
        SetPlans: (state, action) => {
            state.plans = action.payload;
        },
    },
});

export const { SetPlans } = PlansSlicer.actions;

export default PlansSlicer.reducer;
