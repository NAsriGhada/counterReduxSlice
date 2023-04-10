import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++
        },
        incrementByValue: (state, action) => {
            state.count = state.count + action.payload
        }
    }
})

export default countSlice.reducer
export const {increment, incrementByValue} = countSlice.actions