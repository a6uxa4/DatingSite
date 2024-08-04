import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/auth.slice";
import authService from "@/services/auth.service";
import newsService from "@/services/news.service";
import feedbacksService from "@/services/feedback.service";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [newsService.reducerPath]: newsService.reducer,
    [feedbacksService.reducerPath]: feedbacksService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authService.middleware,
      newsService.middleware,
      feedbacksService.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
