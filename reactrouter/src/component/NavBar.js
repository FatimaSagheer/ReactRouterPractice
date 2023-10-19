import React from 'react';

function NavBar() {
  return (
    <nav className="bg-Fatima-bg text-white py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <a href="/" className="text-xl font-semibold">Your Logo</a>
        </div>
        <ul className="flex space-x-4">
          <li><a href="/home">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          {/* Add more navigation options as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
