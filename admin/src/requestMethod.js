import axios from 'axios';

const BASE_URL = " http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM5MjY1MCwiZXhwIjoxNjUxOTk3NDUwfQ.UJLyy9STryitVut2_Q-48q5OKDM80SHgaVG-YnlYuNc";

//user has been logged in and persisted in local storage so fetching Token from local storage
console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);





//public request for fetching data
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})



export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }

})