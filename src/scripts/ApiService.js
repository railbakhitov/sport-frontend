import axios from 'axios';

// const url = "http://localhost:8080";
const url = "http://192.168.0.106:8080";

class ApiService {
    error() {
        console.log("ошибка");
    }

    registration(data) {
        return axios.post(`${url}/register`, data).catch(this.error);
    }

    auth(data) {
        return axios.post(`${url}/auth`, data).catch(this.error);
    }
}

export default new ApiService();