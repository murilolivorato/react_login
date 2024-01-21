import { configureStore } from "@reduxjs/toolkit";
import adminLoginReducer from './modules/adminLogin/adminLoginSlice';
import adminUsersReducer from './modules/admin/usersSlice';
import providersSliceReducer from './modules/admin/providersSlice';
import adminAccessReducer from './modules/admin/accessSlice';
import adminMainReducer from './modules/admin/mainSlice';

export const store = configureStore({
    reducer: {
        adminLogin: adminLoginReducer,
        adminUsers: adminUsersReducer,
        adminProviders: providersSliceReducer,
        adminAccess: adminAccessReducer,
        adminMain: adminMainReducer
    }
})