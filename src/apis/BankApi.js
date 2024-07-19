import { coreApi } from "configs/store-query";

export const BASE_URL = "/banks";

export const BankApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getBanks: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/business/info`,
        method: "GET",
        ...config,
      }),
    }),
  }),
});

export default BankApi;
