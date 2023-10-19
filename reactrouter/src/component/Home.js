import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Website</h1>
        <p className="text-gray-600 mb-4">
          We are excited to have you here! Explore our website to learn more about us and our services.
        </p>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Content</h2>
          {/* Add featured content here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
