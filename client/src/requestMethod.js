import axios from 'axios';

const BASE_URL = " http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTI4MzMxMCwiZXhwIjoxNjUxODg4MTEwfQ.nmyFGZisumLamx7ec400WVpk9n4cEuPW9a9a26a5BhU";




//public request for fetching data
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})



export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})