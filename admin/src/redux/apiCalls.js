import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import axios from "axios";
import { getAllProductsStart, getAllProductsSuccess, getAllProductsFailure } from "./productRedux";



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


//products
export const getAllProducts = async (dispatch) => {
    dispatch(getAllProductsStart());
    try {
        const res = await axios.get("/products", {
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTEzZjI3ZGVhZGYxYzYzY2RiYjcwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM3MjQ5MSwiZXhwIjoxNjUxOTc3MjkxfQ.exFnXehZ-C9g43u45GEUUETfdm_0zM_fNTP90nsu1kU"
            }
        });
        dispatch(getAllProductsSuccess(res.data));
        console.log(res.data);

    } catch (error) {
        dispatch(getAllProductsFailure(error));

    }

}