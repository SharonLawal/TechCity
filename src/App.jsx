import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
// import AboutUsPage from "./components/AboutUsPage";
// import ServicesPage from "./components/ServicesPage";
// import FaqPage from "./components/FaqPage";
// import TestimonialPage from "./components/TestimonialPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        {/* <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
