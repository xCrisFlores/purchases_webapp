import { configureStore } from "@reduxjs/toolkit";
import { purchasesSlice } from "./purchaseSlice";

export const store = configureStore({
    reducer: {purchase: purchasesSlice}
});