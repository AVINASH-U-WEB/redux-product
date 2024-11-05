import { configure } from "@testing-library/react";
import cartReducer from './cart';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer :{
        cart : cartReducer,
    }
})