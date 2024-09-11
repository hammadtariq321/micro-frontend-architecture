// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { guardianApi } from "./services/guardianApi";
import { Provider } from "react-redux";
import { postsApi } from "./services/postsApi";

export const store = configureStore({
    reducer: {
        [guardianApi.reducerPath]: guardianApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware().concat(newsApi.middleware)
        getDefaultMiddleware().concat(guardianApi.middleware, postsApi.middleware)
});

setupListeners(store.dispatch);

export function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
}