import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/home";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/task/:id",
    component: lazy(() => import("./pages/task"))
  },
  {
    path: "/tasks",
    component: lazy(() => import("./pages/tasks"))
  },
  {
    path: "/report",
    component: lazy(() => import("./pages/report"))
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404"))
  }
];
