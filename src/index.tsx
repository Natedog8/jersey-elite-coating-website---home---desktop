import React from "react";
import { createRoot } from "react-dom/client";
import { HomeDesktop } from "./screens/HomeDesktop/HomeDesktop";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  React.createElement(React.StrictMode, null,
    React.createElement(HomeDesktop)
  )
);
