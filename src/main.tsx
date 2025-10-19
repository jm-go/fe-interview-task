import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App.js";
import { FilmsProvider } from "./context/FilmsProvider";
import ReviewList from "./components/review-list/ReviewList.js";
import DetailsView from "./components/details-view/DetailsView.js";
import "./styles/colors.css";
import "./styles/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <FilmsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/review-list" element={<ReviewList />} />
          <Route path="/reviews/:id" element={<DetailsView />} />
        </Routes>
      </BrowserRouter>
    </FilmsProvider>
  </StrictMode>
);
