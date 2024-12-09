"use client";

import { configureStore } from "@reduxjs/toolkit";
import * as globalStore from "./store-slice";
import { coreApi } from "./store-query";
import { setupListeners } from "@reduxjs/toolkit/query";
import { mergeDeep, isEmpty } from "utils/object";
import { logout, refresh } from "./store-actions";
import { throttle } from "utils/function";
import * as tags from "constants/tags";
import userCredReducer from "./store-slicecred"

export const store = configureStore({
  reducer: {
    userCred: userCredReducer,
    [coreApi.reducerPath]: coreApi.reducer,
    [globalStore.slice.reducerPath]: globalStore.slice.reducer,
  },
  preloadedState: loadState({
    [globalStore.slice.name]: globalStore.initialState,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coreApi.middleware,
      rtkqOnResetMiddleware(coreApi)
    ),
});

export default store;

setupListeners(store.dispatch);

store.subscribe(
  throttle(() => {
    const state = store.getState();
    saveState({
      [globalStore.slice.name]: globalStore.getStorageState(
        state[globalStore.slice.name]
      ),
    });
  }, 1000)
);

function saveState(state) {
  try {
    localStorage.setItem("@state", JSON.stringify(state));
  } catch (error) {}
}

function loadState(initialState = {}) {
  try {
    const newState = Object.assign({}, initialState);
    const storageState = getStorageState();
    if (storageState && !isEmpty(storageState)) {
      Object.assign(newState, mergeDeep(newState, storageState));
    }
    return newState;
  } catch (error) {}
  return undefined;
}

function getStorageState() {
  const state = localStorage.getItem("@state");
  if (state) {
    return JSON.parse(state);
  }
  return null;
}

export function rtkqOnResetMiddleware(...apis) {
  return (store) => (next) => (action) => {
    const result = next(action);
    if (logout.match(action)) {
      for (const api of apis) {
        store.dispatch(api.util.resetApiState());
      }
      localStorage.clear();
      window?.postMessage?.({ type: "LOGOUT" }, window.location.origin);
    }
    if (refresh.match(action)) {
      for (const api of apis) {
        store.dispatch(api.util.invalidateTags(Object.values(tags)));
      }
    }
    return result;
  };
}

/** @typedef {typeof store} Store */
/** @typedef {ReturnType<Store['getState']>} StoreState */
/** @typedef {Store['dispatch']} StoreDispatch */
