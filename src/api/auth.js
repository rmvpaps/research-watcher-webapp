import apiClient from './apiClient';

export const login = async (username, password) => {
    try {
        // 🟢 Send credentials as clean JSON matching your Pydantic schema
        const response = await apiClient.post('/v1/token', { username, password });

        const { access_token } = response.data;

        // Save the asset string safely in the browser context layer
        localStorage.setItem('token', access_token);

        return response.data;
    } catch (error) {
        console.error("Login request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Authentication failed";
    }
};



export const getUser = async () => {
    try {
        // 🟢 Send credentials as clean JSON matching your Pydantic schema
        const response = await apiClient.get('/v1/users/me');

        return response.data;
    } catch (error) {
        console.error("user details request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant get logged in user";
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};