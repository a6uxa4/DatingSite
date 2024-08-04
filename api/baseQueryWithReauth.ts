import { RootState } from "@/store";
import { FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080",
  prepareHeaders(headers, api) {
    const token = (api.getState() as RootState).auth.user?.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: FetchArgs | string,
  api: any,
  extraOptions: any
) => {
  const result: any = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403 || result?.response?.status === 403) {
    //-----
  } else if (result?.error?.status === 401 || result?.response?.status) {
    //----
  }
  return result;
};
