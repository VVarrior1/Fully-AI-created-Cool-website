// src/components/Hero.js
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: 'url("https://picsum.photos/200/300")' }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">Abdelrahman Mohamed</h1>
        <p className="text-2xl text-gray-600">Software Engineer</p>
      </div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className=" justify-between items-center">
          <li className="mr-4">
            <Link to="/shapes" className="text-lg font-bold">
              Shapes
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/todolist" className="text-lg font-bold">
              TodoList
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/projects" className="text-lg font-bold">
              Projects
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/experience" className="text-lg font-bold">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-bold">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
