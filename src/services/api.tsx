import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":  "*",
        "Access-Control-Allow-Headers": "*",
        "mode": 'no-cors'
    }
});

export default api;
