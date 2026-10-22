import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "./app.css";
import "./plantillas.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
