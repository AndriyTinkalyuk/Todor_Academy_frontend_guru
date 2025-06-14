import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../Model/IProduct";




interface OrderState {
    orders: IProduct[];
}

const initialState: OrderState = { 
    orders: [],
}



export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<IProduct>) => {
            state.orders.push(action.payload)
        },
        
        removeOrder: (state, action: PayloadAction<string>) =>  {
            state.orders.splice( Number(action.payload), 1);
        },

        clearOrders: (state) =>  { 
            state.orders = []
        }
    }
})


export default orderSlice.reducer;