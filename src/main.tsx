import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="79716695247-m1gv029poh9q4nj1sol8am1vk8tj2300.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
