import React from 'react';
import aboutimg from '../assets/images/aboutland.png'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto my-5 overflow-hidden rounded-lg shadow-md">
      <div className="flex-1 bg-gray-50 p-10 flex items-center">
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          Arriving at CozyCaza, you'll be greeted by the peaceful beauty of nature, cozy rooms, exciting trekking adventures, and unforgettable experiences
        </p>
      </div>
      <div className="flex-1 bg-cover bg-center min-h-64" >
        <img src={aboutimg}/>
      </div>
    </div>
  );
};

export default About;