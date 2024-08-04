import { baseQueryWithReauth } from "@/api/baseQueryWithReauth";
import { IGetNews } from "@/common/news.interface";
import { createApi } from "@reduxjs/toolkit/query/react";

const newsService = createApi({
  reducerPath: "newsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getNews: builder.query<IGetNews[], void>({
      query: () => {
        return {
          url: "news",
        };
      },
    }),
  }),
});
export default newsService;

export const { useGetNewsQuery } = newsService;
