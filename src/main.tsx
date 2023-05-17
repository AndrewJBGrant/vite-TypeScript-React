// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import SettingsContextProvider from "./store/Settings-context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>
);
