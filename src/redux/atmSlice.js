import { createSlice} from "@reduxjs/toolkit";

const atmSlice = createSlice({
    name: "atm",
    initialState: {
        balance: 1000,
        showAtm: false
    },
    reducers: {
        incrementByValue: (state, action) => {
            state.balance += action.payload;
        },
        decrementByValue: (state, action) => {
            state.balance -= action.payload;
        },
        toggleAtm: (state) => {
            state.showAtm = !state.showAtm
        }
    }
})

export const {incrementByValue, decrementByValue, toggleAtm} = atmSlice.actions

export default atmSlice.reducer




