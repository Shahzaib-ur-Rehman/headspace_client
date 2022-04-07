import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import TopFaq from "./components/TopFaq";
import Header from "./components/Header";
import TrendingTopics from "./components/TrendingTopics";
import TrendingTopicsDetail from "./components/TrendingTopicsDetail";
import Footer from "./components/Footer";
import("bootstrap/dist/js/bootstrap");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <header>
      <Header />
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TopFaq" element={<TopFaq />} />
      <Route path="/TopFaq/TrendingTopics" element={<TrendingTopics />} />
      <Route path="/trendingTopicsDetail" element={<TrendingTopicsDetail />} />
    </Routes>
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
