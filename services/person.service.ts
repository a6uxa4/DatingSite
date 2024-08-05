import { baseQueryWithReauth } from "@/api/baseQueryWithReauth";
import { IGetPerson } from "@/common/person.interface";
import { createApi } from "@reduxjs/toolkit/query/react";

const personService = createApi({
  reducerPath: "PersonApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getPerson: builder.query<IGetPerson[], void>({
      query: () => {
        return {
          url: "person",
        };
      },
    }),
  }),
});
export default personService;

export const { useGetPersonQuery } = personService;
