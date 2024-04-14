import type { ComponentType, JSX } from "react";

import { HomePage } from "@/pages/Home/page";
// import { InitDataPage } from "@/pages/InitData/page";
// import { LaunchParamsPage } from "@/pages/LaunchParams/page";
// import { ThemeParamsPage } from "@/pages/ThemeParams/page";
// import { TONConnectPage } from "@/pages/TONConnect/page";
import { StorePage } from "@/pages/Store/page";
import { StatusPage } from "@/pages/Status/page";
import { OrderSummaryPage } from "@/pages/OrderSummary/page";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: HomePage, title: "בית" },
  { path: "/status", Component: StatusPage, title: "תודה שנרשמת" },
  { path: "/store", Component: StorePage, title: "חנות" },
  { path: "/order-summary", Component: OrderSummaryPage, title: "חנות" },
  // { path: "/init-data", Component: InitDataPage, title: "Init Data" },
  // { path: "/theme-params", Component: ThemeParamsPage, title: "Theme Params" },
  // {
  //   path: "/launch-params",
  //   Component: LaunchParamsPage,
  //   title: "Launch Params",
  // },
  // {
  //   path: "/ton-connect",
  //   Component: TONConnectPage,
  //   title: "TON Connect",
];
