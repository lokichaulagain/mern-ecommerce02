import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethod"
import axios from "axios";



export const loginUser = async (dispatch, userCredentials) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/login", userCredentials);
        dispatch(loginSuccess(res.data));
        console.log(res.data);

    } catch (error) {
        dispatch(loginFailure(error));

    }

}