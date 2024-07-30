import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Book from './Component/Book';
import Membership from './Component/Membership';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Selturf from './Component/Selturf';
import Aquasel from './Component/Aquasel';
import Signup from './Component/Signup';
import Badsel from './Component/Badsel';
import TimeSlotSelector from './Component/TimeSlotSelector';
import OrderPage from './Component/OrderPage';
import './App.css';
import PaymentPage from './Component/PaymentPage';
import Admin from './Component/Admin';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Book />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/selturf" element={<Selturf searchQuery={searchQuery} />} />
          <Route path="/aquasel" element={<Aquasel />} />
          <Route path="/badsel" element={<Badsel />} />
          <Route path="/time" element={<TimeSlotSelector />} />
          <Route path="/admin" element={< Admin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
