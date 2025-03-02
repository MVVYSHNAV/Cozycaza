import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import RoomCarousel from './pages/RoomCarousel';
import Locations from './pages/Locations';
import TruckingService from './pages/TruckingService';
import BookingSection from './components/BookingSection';
import { Dashboard } from '@mui/icons-material';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <About />
      <RoomCarousel />
      <Locations />
      <TruckingService />
      <BookingSection />
      <Dashboard/>
    </div>
  );
};

export default App;
