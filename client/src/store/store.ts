import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

const store = configureStore({
    reducer:{
    userReducer,
    productReducer
    }
})
export default store;