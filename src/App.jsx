import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import Testimonials from "./pages/testinomials";
import Contact from "./pages/contact";

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
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </div>
  );
}
