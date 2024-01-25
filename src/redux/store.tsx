import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ProductApi } from "./queries/ProductApi";

export const Store =  configureStore({
  reducer: {[ProductApi.reducerPath]: ProductApi.reducer},
  middleware: (d) =>d().concat(ProductApi.middleware),
});
setupListeners(Store.dispatch)