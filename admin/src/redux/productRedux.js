import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'product',
    //initial state
    initialState: {
        Products: [],
        isFetching: false,
        error: false,
    },


    reducers: {
        getAllProductsStart: (state) => {
            state.isFetching = true
            state.error = false
        },

        getAllProductsSuccess: (state, action) => {
            state.isFetching = false
            state.allProducts = action.payload
        },

        getAllProductsFailure: (state) => {
            state.isFetching = false
            state.error = true
        }

    },
}

)


export const { getAllProductsStart, getAllProductsSuccess, getAllProductsFailure } = productSlice.actions
export default productSlice.reducer