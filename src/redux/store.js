import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from "./purchaseSlice";

export const store = configureStore({
    reducer: {purchase: purchaseReducer}
});