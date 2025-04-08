import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "../services/jsonPlaceholderApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store=configureStore({
    reducer:{
        [jsonPlaceholderApi.reducerPath]:jsonPlaceholderApi.reducer//auto generate a reducer for us;
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
})

setupListeners(store.dispatch);