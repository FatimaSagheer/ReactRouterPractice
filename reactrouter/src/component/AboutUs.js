import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec est
            pretium egestas vel eu urna. Cras ut mauris eget ante sagittis bibendum a id odio.
            Praesent vulputate, ex ut luctus.
          </p>
        </div>
        <div className="bg-white mt-8 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4">
              <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto"></div>
              <h3 className="text-xl font-semibold mt-4">John Doe</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
            <div className="p-4">
              <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto"></div>
              <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
            <div className="p-4">
              <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto"></div>
              <h3 className="text-xl font-semibold mt-4">Bob Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
