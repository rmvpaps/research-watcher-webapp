import apiClient from './apiClient';
import {jwtDecode} from 'jwt-decode';

export const login = async (username, password) => {
    try {
        // 🟢 Send credentials as clean JSON matching your Pydantic schema
        const response = await apiClient.post('/v1/token', { username, password },{withCredentials:true});

        const { access_token, refresh_token, token_type } = response.data;

        // Save the asset string safely in the browser context layer
        localStorage.setItem('token', access_token);
        localStorage.setItem('refresh',refresh_token)

        const user = await getUser()

        return user

    } catch (error) {
        console.error("Login request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Authentication failed";
    }
};



export const getUser = async () => {
    try {
        // 🟢 Send credentials as clean JSON matching your Pydantic schema
        console.log("getUser")
        const response = await apiClient.get('/v1/users/me');

        return response.data;
    } catch (error) {
        console.error("user details request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get logged in user";
        //return {username : "test"}
    }
};

export const getUserSync = () => {
    const token = localStorage.getItem('token');
    if(token == null){
        return null;
    }
    try {
        const decodedToken = jwtDecode(token);
        console.log('token decode')
        const currentTime = Date.now() / 1000; // Convert to seconds
        if(decodedToken.exp > currentTime){
            return {
                email: decodedToken.sub
            }
        }
        return null;
        

    } catch (error) {
        console.error('Error decoding token:', error);
        return null; // Treat as expired if decoding fails
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh')
};


export const verify = (token) => {

    try {
        const decodedToken = jwtDecode(token);
        console.log('token verify local')
        const currentTime = Date.now() / 1000; // Convert to seconds
        return decodedToken.exp > currentTime
        

    } catch (error) {
        console.error('Error decoding token:', error);
        return false; // Treat as expired if decoding fails
    }

};



export const getRefresh = async (refresh_token) => {
    try {
        // 🟢 Send credentials as clean JSON matching your Pydantic schema
        console.log("getRefresh")

        const response = await apiClient.post('/v1/refresh-token',{refresh_token:refresh_token},{withCredentials:true});

        const { access_token, refresh_token:new_refresh_token, token_type } = response.data;
        console.log("updating tokens",access_token,new_refresh_token)
        // Save the asset string safely in the browser context layer
        localStorage.setItem('token', access_token);
        localStorage.setItem('refresh',new_refresh_token)

        

        const user = await getUser()

        return user

    } catch (error) {
        console.error("user details request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get logged in user";
        //return {username : "test"}
    }
};
