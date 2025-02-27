import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop Navigation */}
        <nav className="relative h-16">
          {/* Mobile Menu Button & Logo */}
          <div className="lg:hidden flex justify-between items-center h-full px-4">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
            <Link to="/" className="text-2xl font-serif">
              CozyCaza
            </Link>
            <div className="w-8"></div>
          </div>

          {/* Desktop Centered Menu */}
          <ul className="hidden lg:flex justify-center items-center gap-12 absolute w-full h-full">
            <li>
              <Link to="/rooms" className="text-sm">
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/packages" className="text-sm">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/" className="text-2xl font-serif">
                CozyCaza
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/book" className="text-sm">
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`
            lg:hidden 
            absolute 
            w-full 
            bg-white 
            shadow-md 
            ${isOpen ? 'block' : 'hidden'}
          `}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link to="/rooms" className="text-sm" onClick={toggleMenu}>
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/packages" className="text-sm" onClick={toggleMenu}>
                Packages
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/book" className="text-sm" onClick={toggleMenu}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>
    </div>
  );
};

export default Navbar;