import { coreApi } from "configs/store-query";

export const BASE_URL = "/otp";

export const OtpApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    requestOtp: builder.mutation({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/request/${path.mobileNo}`,
        method: "POST",
        ...config,
      }),
    }),
  }),
});

export default OtpApi;
