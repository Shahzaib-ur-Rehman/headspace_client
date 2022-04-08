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
import ContactUs from "./components/ContactUs";
import SubcriptionAndBilling from "./components/SubcriptionAndBilling";
import AccountSettings from "./components/AccountSettings";
import Troubleshooting from "./components/Troubleshooting";
import UsingHeadSpace from "./components/UsingHeadSpace";
import HeadspaceFamilyPlan from "./components/HeadspaceFamilyPlan";
import MeditationTips from "./components/MeditationTips";
import HeadspaceGifts from "./components/HeadspaceGifts";
import HeadspaceForWork from "./components/HeadspaceforWork";
import ScientificBenefitsOfMeditation from "./components/ScientificBenefitsOfMeditation";
import PrivacyAtHeadspace from "./components/PrivacyAtHeadspace";
import SearchSection from "./components/SearchSection";
import("bootstrap/dist/js/bootstrap");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <header>
      <Header />
      <SearchSection />
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TopFaq" element={<TopFaq />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route
        path="/SubcriptionAndBilling"
        element={<SubcriptionAndBilling />}
      />
      <Route path="/UsingHeadSpace" element={<UsingHeadSpace />} />
      <Route path="/AccountSetting" element={<AccountSettings />} />
      <Route path="/Troubleshooting" element={<Troubleshooting />} />
      <Route path="/HeadspaceFamilyPlan" element={<HeadspaceFamilyPlan />} />
      <Route path="/MeditationTips" element={<MeditationTips />} />
      <Route path="/HeadspaceGifts" element={<HeadspaceGifts />} />
      <Route path="/HeadspaceforWork" element={<HeadspaceForWork />} />
      <Route
        path="/ScientificBenefitsOfMeditation"
        element={<ScientificBenefitsOfMeditation />}
      />
      <Route path="/PrivacyAtHeadspace" element={<PrivacyAtHeadspace />} />
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
