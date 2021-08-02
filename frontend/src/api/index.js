import axios from "axios";

const instane = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
    return instane.post('/signup',userData);
}

export {registerUser}