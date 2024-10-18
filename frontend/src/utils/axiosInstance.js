import axios from "axios";
const token = localStorage.getItem('authToken');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:1111/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
});
export default axiosInstance;
