import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Event from "./components/event/event";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Homepage from "./components/homepage/Landing";
import Map from "./components/map/map";
import Study from "./components/studycenter/study";
import Teacher from "./components/teacher/teacher";
import "./input.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event" element={<Event />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/about" element={<About />} />

          <Route path="/study" element={<Study />} />
          <Route path="/map" element={<Map />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
