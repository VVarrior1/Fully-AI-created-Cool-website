// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white py-20">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Contact</h2>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="flex justify-center items-center">
          <i className="fas fa-envelope text-4xl text-gray-600" />
          <h3 className="text-2xl text-gray-900 ml-4">Email</h3>
        </div>
        <div className="flex justify-center items-center">
          <i className="fas fa-phone text-4xl text-gray-600" />
          <h3 className="text-2xl text-gray-900 ml-4">Phone</h3>
        </div>
        <div className="flex justify-center items-center">
          <i className="fas fa-linkedin text-4xl text-gray-600" />
          <h3 className="text-2xl text-gray-900 ml-4">LinkedIn</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;