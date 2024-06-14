// src/components/Skills.js
import React from "react";

const Skills = () => {
  return (
    <div className=" py-20">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Skills</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex justify-center items-center">
          <i className="fas fa-code text-4xl text-gray-600" />
          <h3 className="text-2xl text-gray-900 ml-4">Programming Languages</h3>
        </div>
        <div className="flex justify-center items-center">
          <i className="fas fa-database text-4xl text-gray-600" />
          <h3 className="text-2xl text-gray-900 ml-4">Databases</h3>
        </div>
        <div className="flex justify-center items-center">
          <i className="fas fa-cloud text-4xl text-gray-600" />
          <h3 className="text-2xl text-gray-900 ml-4">Cloud Platforms</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
