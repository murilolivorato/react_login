import { configureStore } from "@reduxjs/toolkit";
import adminLoginReducer from './modules/adminLogin/adminLoginSlice';

export const store = configureStore({
    reducer: {
        adminLogin: adminLoginReducer
    }
})