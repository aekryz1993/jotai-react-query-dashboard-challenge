import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient } from '@tanstack/react-query'
import "@/assets/scss/core.scss";
import router from "./routes";
import { makeServer } from "./__mocks__";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router(queryClient)} />
    </LocalizationProvider>
  </React.StrictMode>,
);
