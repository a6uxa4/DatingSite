import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/auth.slice";
import authService from "@/services/auth.service";
import newsService from "@/services/news.service";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [newsService.reducerPath]: newsService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authService.middleware,
      newsService.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
