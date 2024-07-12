import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../services/product.service";
export const getAllProduct:any = createAsyncThunk("product/getAllProduct",getProduct)
const productReducer = createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProduct.fulfilled,(state,action)=>{
            state.products = action.payload
        })
    }
})
export default productReducer.reducer;