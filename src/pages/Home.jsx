import React, { useEffect, useState } from 'react';
import Heroimg from '../assets/images/homehero.jpg';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollPosition = 1000;
      setScrollPosition(Math.min(window.scrollY, maxScrollPosition));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-[2500px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
            Escape. Unwind. Experience
            <br />
            <span className="font-normal">Serenity at CozyCaza.</span>
          </h1>
        </div>

        {/* Image Container */}
        <div className="relative">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <img
              src={Heroimg}
              alt="Serene pool view at CozyCaza"
              className="w-full h-[1200px] object-cover transition-transform duration-500 ease-out"
              style={{
                transform: `scale(${1 + scrollPosition * 0.0002})`,
              }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-light text-gray-800">Luxurious Comfort</h3>
            <p className="mt-2 text-gray-600">Experience premium amenities and peaceful surroundings</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-light text-gray-800">Natural Beauty</h3>
            <p className="mt-2 text-gray-600">Immerse yourself in lush greenery and tranquil waters</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-light text-gray-800">Perfect Escape</h3>
            <p className="mt-2 text-gray-600">Your sanctuary away from the everyday</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
