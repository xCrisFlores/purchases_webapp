import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchases: []
};

export const purchasesSlice = createSlice({
    name: "purchases",
    initialState,
    reducers:{
        addPurchase: (state, action) =>{
            const{purchase} = action.payload;
            state.purchases.push(purchase);
        }
    }
});

export const {addPurchase} = purchasesSlice.actions;
export default purchasesSlice.reducer;