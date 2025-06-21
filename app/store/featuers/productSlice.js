import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// product fetching

export const fetchProduct = createAsyncThunk("listProduct", async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get`
    );

    return data.products;
  } catch (error) {
    console.log(error);
  }
});

/////     product slice ////

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading:false,
    error:null,
  },
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(fetchProduct.pending,(state)=>{
    state.loading = true;
   })
   .addCase(fetchProduct.fulfilled,(state,action)=>{
    state.loading = false;
    console.log(action);
    
    state.products = action.payload;
   }).addCase(fetchProduct.rejected,(state,action)=>{
    state.loading = false;
    state.error = action.error.message
   })

    
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
