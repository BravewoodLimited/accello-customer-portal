import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import externalApi from "apis/external";
import axios from "axios";
import { API_BASE_URL, DEVELOPMENT } from "constants/env";
import * as tags from "constants/tags";
import { decrypt, encrypt } from "utils/object";

// Function to refresh the token and store it in sessionStorage

function refreshAuthToken(refreshToken) {
  return axios
    .post(
      `${API_BASE_URL}/refresh-token`,
      { refreshToken },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((response) => {
      const result = response.data;
      if (result?.authToken) {
        // Store the new authToken in sessionStorage
        sessionStorage.setItem("authToken", result.authToken);
        return result.authToken;
      }
      return null;
    })
    .catch((error) => {
      console.error("Failed to refresh token:", error);
      return null;
    });
}

// Function to get the auth token initially and store it in sessionStorage
function getAuthToken() {
  axios
    .get(`${API_BASE_URL}/auth/token`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      const result = response.data;
      if (result?.access_token) {
        // Store the authToken in sessionStorage
        sessionStorage.setItem("authToken", result.access_token);
        sessionStorage.setItem("refreshToken", result.refresh_token);
        // return null
      }
      // return null;
    })
    .catch((error) => {
      console.error("Failed to get token:", error);
      // return null;
    });
    let a = 1
}

export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: customFetchBaseQuery({
    baseUrl: `${API_BASE_URL}/thompson-wrapper/api/v1`,
    prepareArgs: (args, { getState }) => {
      let body = {};
      let authToken = sessionStorage.getItem("authToken");
      // const refreshToken = getState().global.authUser?.refreshToken;
      const authUser = getState().global.authUser;

      const base64EncodedAuthenticationKey =
        authUser?.base64EncodedAuthenticationKey;

      // if (!authToken || authToken == "null") {
      //   getAuthToken();
      //   // Store in sessionStorage after getting a new token
      //   sessionStorage.setItem("authToken", authToken);
      // }

      // // Attach authToken to headers
      // if (authToken || authToken != "null") {
      //   args.headers = {
      //     ...args.headers,
      //     Authorization: `Bearer ${authToken}`,
      //   };
      // }

      if (base64EncodedAuthenticationKey) {
        if (args.body) {
          body.data = args.body;
        }

        body.authorization = base64EncodedAuthenticationKey;

        if (authUser?.twoFactor?.token) {
          body.token = authUser?.twoFactor?.token;
        }
      } else {
        body = args.body ?? body;
      }

      if (DEVELOPMENT) {
        // console.info("@Request", {
        //   url: args.url,
        //   params: args.params,
        //   body: args.body,
        // });
        console.groupCollapsed(`@Request`, args.url);
        if (args.params) {
          console.groupCollapsed("params");
          console.info(args.params);
          console.groupEnd();
        }
        if (args.body) {
          console.groupCollapsed("body");
          console.info(args.body);
          console.groupEnd();
        }
        console.groupEnd();
      }

      args.method = "POST";
      args.body = {
        request: body && typeof body !== "string" ? encrypt(body) : body,
      };

      return args;
    },
    responseHandler: async (response, args, api) => {
      try {
        const resultText = await response.text();
        const resultData = resultText.length ? JSON.parse(resultText) : null;

        resultData.data =
          resultData?.enc && typeof resultData?.data === "string"
            ? decrypt(resultData.data)
            : resultData?.data;

        // if (response.status === 401) {
        //   // If Unauthorized, attempt token refresh
        //   const authUser = api.getState().global.authUser;
        //   const refreshToken = authUser?.refreshToken;
        //   if (refreshToken) {
        //     const newAuthToken = await refreshAuthToken(refreshToken);

        //     if (newAuthToken) {
        //       // Update store with the new authToken
        //       api.dispatch({
        //         type: "auth/setAuthToken",
        //         payload: newAuthToken,
        //       });

        //       // Retry the original request with new token
        //       args.headers.Authorization = `Bearer ${newAuthToken}`;
        //       return fetchBaseQuery(args, api);
        //     }
        //   }
        // }
        if (DEVELOPMENT) {
          // console.info("@Response", {
          //   url: response.url,
          //   body: resultData,
          // });
          const url = new URL(response.url);
          console.groupCollapsed(
            `@Response`,
            url.pathname.replace("/thompson-wrapper/api/v1", ""),
            response.status
          );
          if (resultData) {
            console.groupCollapsed("body");
            console.info(resultData);
            console.groupEnd();
          }
          console.groupEnd();
        }

        return resultData;
      } catch (e) {
        console.error("responseHandler-Error", e);
        return null;
      }
    },
  }),
  endpoints: (builder) => ({}),
});

[coreApi, externalApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(tags) });
});

/**
 *
 * @param {{
 * prepareArgs?: (args: import("@reduxjs/toolkit/query").FetchArgs, api: import("@reduxjs/toolkit/query").BaseQueryApi, extraOptions: any) => MaybePromise<Headers | void>;
 * } & import("@reduxjs/toolkit/dist/query/fetchBaseQuery").FetchBaseQueryArgs} baseArg
 */
function customFetchBaseQuery({ prepareArgs, ...baseArg }) {
  const fetchQuery = fetchBaseQuery(baseArg);

  /**
   *
   * @type {typeof fetchQuery}
   */
  return (args, api, extraOptions) => {
    const newArgs = prepareArgs(
      ((args) => {
        return {
          ...args,
          headers: args.headers ?? new Headers(baseArg?.headers),
        };
      })(typeof args == "string" ? { url: args } : args),
      api,
      extraOptions
    );
    return fetchQuery(newArgs, api, extraOptions);
  };
}

/**
 * @template T
 * @typedef {T | PromiseLike<T>} MaybePromise
 */
