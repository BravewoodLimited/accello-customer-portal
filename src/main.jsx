import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MuiThemeProvider from "contexts/MuiThemeProvider";
import MuiDatePickerProvider from "contexts/MuiDatePickerProvider";
import MuiSnackbarProvider from "contexts/MuiSnackbarProvider";
import ReduxStoreProvider from "contexts/ReduxStoreProvider";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxStoreProvider>
      <MuiThemeProvider>
        <MuiDatePickerProvider>
          <MuiSnackbarProvider>
            <RouterProvider router={router} />
          </MuiSnackbarProvider>
        </MuiDatePickerProvider>
      </MuiThemeProvider>
    </ReduxStoreProvider>
  </React.StrictMode>
);
