// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Shapes from "./components/Shapes";
import TodoBig from "./components/TodoBig";

function App() {
  return (
    <div className="App bg-gray-600">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/skills" exact element={<Skills />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/shapes" exact element={<Shapes />} />
        <Route path="/todolist" exact element={<TodoBig />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
