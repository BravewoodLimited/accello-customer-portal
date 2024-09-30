import { coreApi } from "configs/store-query";

export const MiscApi = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDocumentType: builder.mutation({
      query: () => ({
        url: `codes/1/document`,
        method: "POST",
      }),
      providesTags: [{ type: "misc" }],
    }),
    getSpecificDocumentType: builder.mutation({
      query: (id) => ({
        url: `codes/${id}`,
        method: "POST",
      }),
      providesTags: [{ type: "misc" }],
    }),
    addDocument: builder.mutation({
      query: (config) => ({
        url: `clients/document`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: [{ type: "misc" }],
    }),
    getStaff: builder.mutation({
      query: ({ path, ...config }) => ({
        url: `staff/${path}/number`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: [{ type: "misc" }],
    }),
    sendLaff: builder.mutation({
      query: ({ path, ...config }) => ({
        url: `otp/${path}/send`,
        method: "POST",
        ...config,
      }),
      invalidatesTags: [{ type: "misc" }],
    }),
    // getClientKycDetails: builder.query({
    //   query: ({ path, ...config }) => ({
    //     url: `${BASE_URL}/${path?.id}/get-kyc-details`,
    //     method: "POST",
    //     ...config,
    //   }),
    //   providesTags: [{ type: CLIENT }],
    // }),
  }),
});

export default MiscApi;
