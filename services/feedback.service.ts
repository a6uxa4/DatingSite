import { baseQueryWithReauth } from "@/api/baseQueryWithReauth";
import { IGetFeedback } from "@/common/feedbacks.interface";
import { createApi } from "@reduxjs/toolkit/query/react";

const feedbacksService = createApi({
  reducerPath: "feedbacksApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getFeedback: builder.query<IGetFeedback[], void>({
      query: () => {
        return {
          url: "feedback",
        };
      },
    }),
  }),
});
export default feedbacksService;

export const { useGetFeedbackQuery } = feedbacksService;
