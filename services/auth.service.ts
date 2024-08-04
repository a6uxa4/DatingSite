import { baseQueryWithReauth } from "@/api/baseQueryWithReauth";
import { createApi } from "@reduxjs/toolkit/query/react";

const authService = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
export default authService;

export const {} = authService;
