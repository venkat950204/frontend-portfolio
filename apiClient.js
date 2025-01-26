import axios from 'axios';

// Create an Axios instance to handle API requests
const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api/stocks',  // Replace with your backend API URL
    headers: {
        'Content-Type': 'application/json',  // Ensure this matches the API's expected content type
    },
});

export default apiClient;
