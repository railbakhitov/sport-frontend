import axios from 'axios';

// const url = "http://localhost:8080";
const url = "http://192.168.0.106:8080";

class ApiService {
    registration(data) {
        return axios.post(`${url}/register`, data);
    }
}

export default new ApiService();