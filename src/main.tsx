import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

const providerId = import.meta.env.VITE_GOOGLE_PROVIDER_ID;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={providerId}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
