import { coreApi } from "configs/store-query";

export const BASE_URL = "/staff";

export const StaffApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getStaffByMobileNo: builder.query({
      query: ({ path, ...config }) => ({
        url: `${BASE_URL}/${path?.mobileNo}/number`,
        method: "GET",
        ...config,
      }),
    }),
  }),
});

export default StaffApi;
