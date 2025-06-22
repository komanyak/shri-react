import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { AnalyticsPage } from "./pages/AnalyticsPage/AnalyticsPage";
import { GeneratorPage } from "./pages/GeneratorPage/GeneratorPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import "./App.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<AnalyticsPage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
