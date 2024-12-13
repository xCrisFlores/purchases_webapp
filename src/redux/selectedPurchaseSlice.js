import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    _id: "",
    amount: 0,
    date: Date.now(),
    buyer: ""
}

export const selectedPurchaseSlice = createSlice({

    name: "selectedPurchase",
    initialState,

    reducers:{
        selectPurchase(state,action){
            console.log(action.payload);
            state._id = action.payload._id;
            state.amount = action.payload.amount;
            state.date = action.payload.date;
            state.buyer = action.payload.buyer;
        },
        setAmount(state,action){
            state.amount = action.payload;
        },
        setDate(state,action){
            state.date = action.payload;
        }
    }
})

export const {selectPurchase, setAmount, setDate} = selectedPurchaseSlice.actions;
export default selectedPurchaseSlice.reducer;