import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import { useFormContext } from './store/FormContext';
import './App.css';

function App() {
  const { form } = useFormContext();

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route
          path='/booking-confirmation'
          element={<BookingConfirmation {...form} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
