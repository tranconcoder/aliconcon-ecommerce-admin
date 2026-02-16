import axios from 'axios';
import { API_URL } from './env.config';

// Create axios instance
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});

export default axiosInstance;
