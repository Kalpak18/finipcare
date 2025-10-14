import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/services/services";
import Contact from "./pages/contact/contact";

export default function App() {
  return (
    <div style={{ overflowX: "hidden", width: "100%" }}>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </div>
  );
}
