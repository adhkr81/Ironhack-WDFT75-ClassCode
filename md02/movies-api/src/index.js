import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HookFlow } from "./HookFlow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExemploFilmes } from "./ExemploFilmes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useEffect" element={<HookFlow />} />
        <Route path="/exemplo-filmes" element={<ExemploFilmes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
