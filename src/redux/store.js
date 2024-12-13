import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from "./purchaseSlice";
import userReducer from "./userSlice";
import selectedPurchaseReducer from "./selectedPurchaseSlice";
export const store = configureStore({
    reducer: {
        purchase: purchaseReducer,
        user:  userReducer,
        selectedPurchase: selectedPurchaseReducer
    }
});