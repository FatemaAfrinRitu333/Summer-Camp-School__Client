import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  </HelmetProvider>
);
