import axios from 'axios';

const BASE_URL = " http://localhost:5000/api/";
// const TOKEN = console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM2OTQ2MywiZXhwIjoxNjUxOTc0MjYzfQ.hiKWhn29YhGn8uCszrJoNtlSDrPb6flSOSm7C8Egllc";



//public request for fetching data
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})



export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})