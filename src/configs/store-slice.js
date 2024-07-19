import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./store-actions";
import OtpApi from "apis/OtpApi";
import ClientApi from "apis/ClientApi";

export const initialState = {
  authUser: null,
  isSideNavigation: false,
};

export const slice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setAuthUser: (state, { payload }) => {
      state.authUser = payload;
    },
    toggleSideNavigation: (state, { payload }) => {
      state.isSideNavigation =
        payload !== undefined ? !!payload : !state.isSideNavigation;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logout, () => ({ ...initialState }))
      .addMatcher(
        OtpApi.endpoints.requestOtp.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            twoFactor: {
              requestTime: Date.now(),
              tokenLiveTimeInSec: 60 * 5,
            },
          };
        }
      )

      .addMatcher(
        ClientApi.endpoints.verifyClientOtp.matchFulfilled,
        (state, { payload }) => {
          state.authUser = {
            ...state.authUser,
            ...payload.data,
            token: true,
            clientId: payload?.data?.id,
          };
        }
      )
      .addMatcher(
        ClientApi.endpoints.verifyNewClientOtp.matchFulfilled,
        (state, { payload }) => {
          state.authUser.clientId = payload?.data?.clientId;
        }
      ),
});

export default slice;

export function getStorageState({ authUser }) {
  return { authUser };
}
