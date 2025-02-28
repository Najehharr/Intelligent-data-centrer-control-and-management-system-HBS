import axios from "axios";
const token = localStorage.getItem('auth_token');
export default axios.create({
    baseURL:"http://127.0.0.1:8000",
    withCredentials:true,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
})