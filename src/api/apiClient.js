import axios from 'axios';

// Fallback points directly to your AWS Lambda Gateway staging stage
const API_BASE_URL = process.env.REACT_APP_API_URL ||  'http://localhost:8000/';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//REFRESH WITHOUT LOOP

// Separate clean instance just for auth tasks
const authApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    },
});

let isRefreshing = false;

const rotateToken = async (refresh_token) => {
 try {
        // Send credentials as clean JSON matching your Pydantic schema
        const response = await authApi.get('/v1/refresh-token',{refresh_token:refresh_token});


        const { access_token, refresh_token:new_refresh_token, token_type } = response.data;

        // Save the asset string safely in the browser context layer
        localStorage.setItem('token', access_token);
        localStorage.setItem('refresh',new_refresh_token)

        

 
    } catch (error) {
        console.error("refresh token request failed:", error.response?.data || error.message);
        throw error.response?.data?.detail || "Cant login with refreshtoken";
        //return {username : "test"}
    }

};

/**
 * Request Interceptor: Automatically intercept outgoing HTTP calls
 * and insert the Bearer token straight from LocalStorage.
 */
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Response Interceptor: Centralized Error handling layer for 401
 * we can automatically wipe local storage or redirect the user.
 */
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {

        const originalRequest = error.config;

        if (error.response && error.response.status === 401) {
            console.warn("Unauthorized request signature detected. Clearing session...");
            localStorage.removeItem('token');
            
            //attempt refreshtoken if no other request is making refresh
            if(!isRefreshing){
                refresh_token = localStorage.getItem('refresh')
                isRefreshing = true
                await rotateToken(refresh_token)
                isRefreshing = false
            }

            //retry same request
            //avoid inifinite loop of same request
            if(!originalRequest._retry){
                const token = localStorage.getItem('token');
                if (token) {
                    originalRequest._retry = true
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    return apiClient(originalRequest);
                }
            }

        }
        return Promise.reject(error);
    }
);



export default apiClient;