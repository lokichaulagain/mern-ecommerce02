import axios from 'axios';

const BASE_URL = " http://localhost:5000/api/";
const TOKEN = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTIwMTI5MCwiZXhwIjoxNjUxODA2MDkwfQ.JbTPUfj_zyH2TRp2HEil-zADsqKcyu9DO71j4EKwqM4";




//public request for fetching data
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})



export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})