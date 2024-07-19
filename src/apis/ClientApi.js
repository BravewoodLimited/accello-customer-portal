import { coreApi } from "configs/store-query";
import { CLIENT } from "constants/tags";

export const BASE_URL = "/clients";

export const ClientApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getClientKycDetails: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path?.id}/get-kyc-details`,
        method: "POST",
        ...config,
      }),
      providesTags: [{ type: CLIENT }],
    }),
    createClientKyc: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/kyc`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: [{ type: CLIENT }],
    }),
    verifyClientOtp: builder.mutation({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/otp/verify/${path?.mobileNo}`,
        method: "POST",
        ...config,
      }),
    }),
    sendNewClientOtp: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/otp/new-client`,
        method: "POST",
        ...config,
      }),
    }),
    verifyNewClientOtp: builder.mutation({
      query: (config) => ({
        url: `${BASE_URL}/verify-new-client`,
        method: "POST",
        ...config,
      }),
    }),
    verifyClientAccountNumber: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/verify-account-number`,
        method: "POST",
        ...config,
      }),
    }),
    verifyClientBVN: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/verify-bvn`,
        method: "POST",
        ...config,
      }),
    }),
    verifyClientNIN: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/verify-nin`,
        method: "POST",
        ...config,
      }),
    }),
  }),
});

export default ClientApi;
