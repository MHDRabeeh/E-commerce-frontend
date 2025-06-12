import { configureStore } from "@reduxjs/toolkit";
import productReducer from './featuers/productSlice'

export const store = configureStore({
  reducer: {
    products:productReducer
  },
});
