import { configureStore, combineReducers } from "@reduxjs/toolkit"
import orderReducer from "./reducers/OrderSlice"
import productReducer from "./reducers/ProductSlice"

const rootReduser = combineReducers({
    orderReducer,
    productReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReduser,
    })
 }


 export type RootState = ReturnType<typeof rootReduser>
 export type AppStore = ReturnType<typeof setupStore>
 export type AppDispatch = AppStore['dispatch']