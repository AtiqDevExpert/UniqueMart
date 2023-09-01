import { configureStore } from "@reduxjs/toolkit";
import navReducer from './Slices/NavSlices';

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})
