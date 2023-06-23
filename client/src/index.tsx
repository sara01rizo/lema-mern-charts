import React from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <GoogleOAuthProvider clientId='process.env.REACT_APP_GOOGLE_CLIENT_ID' >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
