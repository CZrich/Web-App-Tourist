import axios from "axios";
const URL_LOGIN ="http://127.0.0.1:2024/api/auth/login"

export function Login(user){
    return axios.post(URL_LOGIN,user);
}
