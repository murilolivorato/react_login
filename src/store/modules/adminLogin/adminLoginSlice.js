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

export const getSSOLogin = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(process.env.REACT_APP_API_URL + 'api/sso-login')
            return await response.data;
        };

        try {
            return await fetchData();
        } catch (error) {
            throw error.response
        }
    }
}

export const getAuth = (data) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.post(process.env.REACT_APP_API_URL + 'api/get-auth', data)
            return await response.data;
        };

        try {
            return await fetchData();
        } catch (error) {
            console.log('eerroorrr --->', error.response)
            throw error.response
        }
    }
}

export const getCurrentUserInfo = (token) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const header = { headers: { Authorization: 'Bearer ' + token } }
            const response = await axios.get(process.env.REACT_APP_API_URL + 'api/admin/load-user-info', header)
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