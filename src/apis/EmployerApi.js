import { coreApi } from "configs/store-query";

export const BASE_URL = "/employers";

export const EmployerApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployers: builder.query({
      query: (config) => ({
        url: `${BASE_URL}/list`,
        method: "GET",
        ...config,
      }),
    }),
  }),
});

export default EmployerApi;
