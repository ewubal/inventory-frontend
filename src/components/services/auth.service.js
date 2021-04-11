import axios from 'axios';

const API_URL = "/users"

class AuthService {

    login(email, password) {
        return axios.post(API_URL + "/login", {
            email,
            password
        }).then(res => {
            if (res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("userId", JSON.stringify(res.data.id));
            }
            return res.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(name, surname, email, password) {
        return axios.post(API_URL + "/register", {
            name,
            surname,
            email,
            password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
