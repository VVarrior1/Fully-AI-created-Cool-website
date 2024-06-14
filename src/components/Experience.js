// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <div className="bg-white py-20">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Experience</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex justify-center items-center">
          <h3 className="text-2xl text-gray-900 ml-4">Company 1</h3>
          <p className="text-xl text-gray-600">Job Title</p>
          <p className="text-xl text-gray-600">Duration</p>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-2xl text-gray-900 ml-4">Company 2</h3>
          <p className="text-xl text-gray-600">Job Title</p>
          <p className="text-xl text-gray-600">Duration</p>
        </div>
        <div className="flex justify-center items-center">
          <h3 className="text-2xl text-gray-900 ml-4">Company 3</h3>
          <p className="text-xl text-gray-600">Job Title</p>
          <p className="text-xl text-gray-600">Duration</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;