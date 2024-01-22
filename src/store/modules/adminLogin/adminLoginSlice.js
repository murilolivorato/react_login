import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [
    {}
]

const adminLoginSlice = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {

    }
})

export const store = (data) => {
    return async () => {
        const fetchData = async () => {
            const response = await axios.post(process.env.REACT_APP_API_URL + 'api/post-login', data)
            return await response.data.access_token;
        };

        try {
            return await fetchData();
        } catch (error) {
            throw error.response
        }
    }
}

export const getUserInfo = (token) => {
    return async () => {
        const fetchData = async () => {
            const header = { headers: { Authorization: 'Bearer ' + token } }
            const response = await axios.post(process.env.REACT_APP_API_URL + 'api/user-info', null,  header)
            return await response.data;
        };
        try {
            return await fetchData();
        } catch (error) {
            throw error.response
        }
    }
}

export default adminLoginSlice.reducer