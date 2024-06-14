// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between items-center">
        <li className="mr-4">
          <Link to="/" className="text-lg font-bold">Home</Link>
        </li>
        <li className="mr-4">
          <Link to="/skills" className="text-lg font-bold">Skills</Link>
        </li>
        <li className="mr-4">
          <Link to="/projects" className="text-lg font-bold">Projects</Link>
        </li>
        <li className="mr-4">
          <Link to="/experience" className="text-lg font-bold">Experience</Link>
        </li>
        <li>
          <Link to="/contact" className="text-lg font-bold">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;