// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div className="bg-white py-20">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Projects</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex justify-center items-center">
          <img src="https://picsum.photos/200/300" alt="Project 1" className="w-full h-full object-cover" />
          <h3 className="text-2xl text-gray-900 ml-4">Project 1</h3>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://picsum.photos/200/301" alt="Project 2" className="w-full h-full object-cover" />
          <h3 className="text-2xl text-gray-900 ml-4">Project 2</h3>
        </div>
        <div className="flex justify-center items-center">
          <img src="https://picsum.photos/200/302" alt="Project 3" className="w-full h-full object-cover" />
          <h3 className="text-2xl text-gray-900 ml-4">Project 3</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;