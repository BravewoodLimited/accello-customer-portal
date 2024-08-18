import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query";

export const BASE_URL = "/externals";

export const externalApi = createApi({
  // baseQuery:fetchBaseQuery({
  //     baseUrl: `https://test.accello.com.ng:9192/api/v1/thirdpartylender/2/staffinfo/18632738003`,
  //     headers:{}
  //   }),
  endpoints: (builder) => ({
    getexternals: builder.query({
      query: (config) => ({
        url: `https://test.accello.com.ng:9192/api/v1/thirdpartylender/2/staffinfo/18632738003`,
        method: "post",
        body: {
          ippis_number: "18632738021",
          bvn: "22147174268",
          account_number: "8136599720",
          first_name: "BAYONLE",
          last_name: "AMZAT",
          phone_number: "08136599720",
          email: "bayonle.amzat@zedvance.com",
          bank: "OPAY",
          next_of_kin: {
            name: "Oguns Sanchez",
            phone: "07039291102",
            address: "12, Aston villa",
          },
          referee: [
            {
              name: "Oguns Sanches",
              phone: "07039291112",
              address: "12, Aston villa",
            },
          ],
        },
      }),
    }),
  }),
});

export default externalApi;
