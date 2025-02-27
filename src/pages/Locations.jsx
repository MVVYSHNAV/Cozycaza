import React, { useState } from 'react';
import { X } from 'lucide-react';
import locimg1 from '../assets/images/locimg1.png';
import locimg2 from '../assets/images/locimg2.png';
import locimg3 from '../assets/images/locimg3.png';
import locimg4 from '../assets/images/locimg4.png';

const Locations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      id: 1,
      title: "Mountain Dam",
      image: locimg1,
      description: "A magnificent dam nestled between mountains, where engineering meets nature. The powerful flow of water creates a mesmerizing spectacle for visitors.",
      activities: ["Sightseeing", "Photography", "Hiking"],
      bestTime: "Early morning or late afternoon"
    },
    {
      id: 2,
      title: "Lakeside Pavilions",
      image: locimg2,
      description: "Tranquil pavilions on the serene lake provide perfect spots for relaxation and contemplation. Surrounded by lush greenery, this destination offers peace away from busy life.",
      activities: ["Boating", "Meditation", "Picnic"],
      bestTime: "Midday for best lighting"
    },
    {
      id: 3,
      title: "Cloud Valley",
      image: locimg3,
      description: "Stand above the clouds and witness nature's most breathtaking phenomenon. This viewpoint allows visitors to experience walking among clouds.",
      activities: ["Trekking", "Cloud watching", "Group tours"],
      bestTime: "Early morning for cloud formation"
    },
    {
      id: 4,
      title: "Forest Waterfall",
      image: locimg4,
      description: "A majestic waterfall hidden within the dense forest, offering a refreshing escape. The sound of rushing water creates a natural symphony.",
      activities: ["Swimming", "Nature walks", "Photography"],
      bestTime: "Rainy season for maximum flow"
    }
  ];

  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
  };

  const handleClose = (e) => {
    if (e.target.id === "modal-overlay") {
      setSelectedDestination(null);
    }
  };

  const DestinationCard = ({ destination, onClick }) => (
    <div
      className="relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => onClick(destination)}
    >
      <div className="aspect-[9/16]">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-medium mb-1">{destination.title}</h3>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">Popular Destinations</h2>
        <p className="text-xl text-gray-600">
          Nature whispers in silence, yet speaks volumes to the heart.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} onClick={handleCardClick} />
        ))}
      </div>

      {selectedDestination && (
        <div 
          id="modal-overlay"
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
          onClick={handleClose}
        >
          <div 
            className="bg-white max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.title}
                className="w-full h-full object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors"
                onClick={() => setSelectedDestination(null)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                <h2 className="text-white text-3xl font-medium">{selectedDestination.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-800 text-lg mb-6">{selectedDestination.description}</p>

              <div className="mb-4">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.activities.map((activity, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Best Time to Visit</h4>
                <p className="text-gray-700">{selectedDestination.bestTime}</p>
              </div>

              <button
                className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                aria-label="Plan Your Visit"
              >
                Plan Your Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Locations;
