import React, { useState } from 'react';
import { X } from 'lucide-react';
import locimg1 from '../assets/images/locimg1.jpg';
import locimg2 from '../assets/images/locimg2.jpg';
import locimg3 from '../assets/images/locimg3.jpg';
import locimg4 from '../assets/images/locimg4.jpg';

const Locations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
        id: 1,
        title: "Banasura Sagar Dam",
        image: locimg1,
        description: "The largest earthen dam in India, surrounded by misty hills and crystal-clear waters. A paradise for nature lovers and adventure seekers.",
        activities: ["Boating", "Trekking", "Nature Photography"],
        bestTime: "September to May (Pleasant weather)"
      },
      {
        id: 2,
        title: "Karlad Lake",
        image: locimg2,
        description: "A serene freshwater lake ideal for adventure activities and peaceful retreats. Surrounded by lush greenery, perfect for unwinding.",
        activities: ["Kayaking", "Zip-lining", "Picnic"],
        bestTime: "October to March (Cool and pleasant climate)"
      },
      {
        id: 3,
        title: "Kurumbalakotta Hill",
        image: locimg3,
        description: "A stunning 360-degree viewpoint offering breathtaking sunrise and sunset views. Famous for trekking and experiencing floating clouds.",
        activities: ["Trekking", "Camping", "Sunrise Viewing"],
        bestTime: "Early morning or evening (For best views and cool climate)"
      },
      {
        id: 4,
        title: "Meenmutty Waterfalls",
        image: locimg4,
        description: "One of the tallest waterfalls in Kerala, cascading through three tiers. A trekker’s delight with a thrilling jungle trail leading to the falls.",
        activities: ["Trekking", "Waterfall Viewing", "Photography"],
        bestTime: "Post-monsoon (September to February) for lush greenery and water flow"
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
            onClick={handleClose} // Close when clicking outside modal
        >
            <div 
            className="bg-white max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl relative pointer-events-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
            <div className="relative h-64 md:h-80">
                <img
                src={selectedDestination.image}
                alt={selectedDestination.title}
                className="w-full h-full object-cover"
                />
                <button
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors"
                onClick={() => setSelectedDestination(null)} // Close when clicking the button
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
                className="mt-8 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
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
