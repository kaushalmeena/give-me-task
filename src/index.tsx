import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";

import "./index.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !root) {
  throw new Error("Failed to find the root element");
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root
);
