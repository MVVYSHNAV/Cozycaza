import React, { useState } from "react";
import { FaCalendarAlt, FaBed, FaUser, FaChild } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Bookinimg from "../assets/images/bookingimg.jpg";

const BookingSection = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="bg-[#FAE8D9] min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-serif text-gray-800 text-center mb-4">Book CozyCaza</h1>
      <div className="bg-[#FAE8D9] p-8 max-w-4xl w-full flex flex-col md:flex-row items-center  ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-2">
          <img
            src={Bookinimg}
            alt="Cozycaza Booking"
            className="rounded-md w-full object-cover"
          />
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-serif text-gray-800 text-center md:text-left">
            Book your stay
          </h2>
          <form className="mt-4 space-y-4">
            <div className="flex items-center border-b border-gray-600 p-2">
              <FaCalendarAlt className="text-gray-600 mr-2" />
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                placeholderText="Check-in"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-600 p-2">
              <FaCalendarAlt className="text-gray-600 mr-2" />
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
                placeholderText="Check-out"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-600 p-2">
              <FaBed className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Room"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-600 p-2">
              <FaUser className="text-gray-600 mr-2" />
              <input
                type="number"
                placeholder="Adult"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b border-gray-600 p-2">
              <FaChild className="text-gray-600 mr-2" />
              <input
                type="number"
                placeholder="Children"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full text-center mt-4 border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-500 hover:text-white transition"
            >
              Check availability
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
