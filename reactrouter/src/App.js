import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated imports

import NavBar from './component/NavBar';
import Home from './component/Home'; // Updated import
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
