import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purchases: []  
};

export const purchasesSlice = createSlice({
  name: 'purchases',
  initialState,
  reducers: {
    
    addPurchase: (state, action) => {
      state.purchases.push(action.payload); 
    },
    
    setPurchases: (state, action) => {
        state.purchases = action.payload;
    },
   
    removePurchase: (state, action) => {
      state.purchases = state.purchases.filter(
        (purchase) => purchase._id !== action.payload  
      );
    }
  },
});

export const { addPurchase, setPurchases, removePurchase } = purchasesSlice.actions;
export default purchasesSlice.reducer;
