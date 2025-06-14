import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { IUser } from "../../Model/IUser";
import { fetchProducts } from "./ActionCreators";
import type { IProduct } from "../../Model/IProduct";


interface ProductState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
}

const initialState: ProductState = { 
    products: [],
    isLoading: false,
    error: ''
}


export const productSlice = createSlice(
   { name: 'Product',
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) { 
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        }),
        builder.addCase(fetchProducts.pending, (state) => {
              state.isLoading = true;
        }),
        builder.addCase(fetchProducts.rejected, (state, action) => {
             state.isLoading = false;
             if (action.payload && typeof action.payload === 'string') {
                state.error = action.payload;
                } else {
                 state.error = action.error?.message || 'Unknown error';
                }
        })
    }
}

)



export default productSlice.reducer