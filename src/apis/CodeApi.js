import { coreApi } from "configs/store-query";

export const BASE_URL = "/codes";

export const CodeApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getCodeValuesInfo: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path?.id}/codevalues/info`,
        method: "GET",
        ...config,
      }),
    }),
    getStateLGA: builder.query({
      query: (stateId) => ({
        url: `/codes/27/child/${stateId}`,
      }),
    }),
  }),
});

export default CodeApi;
