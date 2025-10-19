import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.js";
import ReviewList from "./components/review-list/ReviewList.js";
import "./styles/colors.css";
import "./styles/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/review-list" element={<ReviewList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
