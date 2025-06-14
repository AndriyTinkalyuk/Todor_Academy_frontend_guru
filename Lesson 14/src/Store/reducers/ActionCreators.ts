import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../Services/ProductService";
// import type { AppDispatch } from "../store";
// import { productSlice } from "./ProductSlice";

// export const fetchProducts = () => async (dispatch: AppDispatch) => { 
//     try {
//         dispatch(ProductSlice.actions.productsFetching())
//         const response = await ProductService.getProducts();
//          dispatch(ProductSlice.actions.productsFetchingSuccess(response))
//     } catch (error) {
//        let message = 'Unknown error';
//   if (error instanceof Error) {
//     message = error.message;
//   } else if (typeof error === 'string') {
//     message = error;
//   }
//   dispatch(ProductSlice.actions.productsFetchingError(message));
// }
//     }


export const fetchProducts = createAsyncThunk(
    'Product/fetchAll',
    async (_ , thunkAPI) => {
        try {
        const response = await ProductService.getProducts();
        return response   
        } catch (error) {
            return thunkAPI.rejectWithValue("failed to load goods \n" + error)
        }
    }
)