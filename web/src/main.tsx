import WebApp from "@twa-dev/sdk";
import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "@/components/Root";

import "../globals.css";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
