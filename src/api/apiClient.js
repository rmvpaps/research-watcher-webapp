import axios from 'axios';

// Fallback points directly to your AWS Lambda Gateway staging stage
const API_BASE_URL = process.env.REACT_APP_API_URL ||  'http://localhost:8000/';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

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
    (error) => {
        if (error.response && error.response.status === 401) {
            console.warn("Unauthorized request signature detected. Clearing session...");
            localStorage.removeItem('token');
            // Optional: window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;