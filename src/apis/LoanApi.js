import { coreApi } from "configs/store-query";
import { LOAN } from "constants/tags";

export const BASE_URL = "/loans";

export const LoanApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getLoans: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/business/info`,
        method: "GET",
        ...config,
      }),
      providesTags: [{ type: LOAN }],
    }),
    getLoanTemplate: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/template`,
        method: "GET",
        ...config,
      }),
    }),
    getLoan: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/business/${path?.id}/info`,
        method: "GET",
        ...config,
      }),
      providesTags: [{ type: LOAN }],
    }),
    getLoanBalance: builder.query({
      query: ({ path, ...config }) => ({
        url: `/document/loan_balance/${path.id}/api`,
        method: "GET",
        ...config,
      }),
      providesTags: [{ type: LOAN }],
    }),
    calculateLoanSchedule: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/business/calculate-schedule`,
        method: "POST",
        ...config,
      }),
    }),
    createLoan: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/business/createloan`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: [{ type: LOAN }],
    }),
    getLoanTransactions: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path.id}/transactions`,
        method: "GET",
        ...config,
      }),
      providesTags: [{ type: LOAN }],
    }),
  }),
});

export default LoanApi;
