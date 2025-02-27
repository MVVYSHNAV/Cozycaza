import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RoomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample room data - in a real app, this would come from props or an API
  const rooms = [
    {
      id: 1,
      name: "Modern Suite",
      description: "Spacious room with elegant wardrobe solutions",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Executive Room",
      description: "Premium accommodations with custom storage",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Deluxe Suite",
      description: "Luxury space with built-in wardrobe systems",
      image: "/api/placeholder/600/400"
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Function to determine the position class
  const getPositionClass = (index) => {
    if (index === activeIndex) return "center";
    if (
      (index === activeIndex - 1) || 
      (activeIndex === 0 && index === rooms.length - 1)
    ) return "left";
    if (
      (index === activeIndex + 1) || 
      (activeIndex === rooms.length - 1 && index === 0)
    ) return "right";
    return "hidden";
  };

  return (
    <div className="bg-neutral-800 w-full p-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-white mb-6">
          <h2 className="text-2xl font-bold mb-1">Explore Your Room</h2>
          <p className="text-xl font-light">Find Rooms Based on Interests</p>
        </div>
        
        {/* Carousel container */}
        <div className="relative h-96 mb-8">
          {rooms.map((room, index) => {
            const position = getPositionClass(index);
            
            return (
              <div 
                key={room.id}
                className={`absolute transition-all duration-500 ease-in-out transform rounded-lg overflow-hidden
                  ${position === "center" ? "z-30 scale-100 left-1/4 right-1/4 opacity-100 h-full" : ""}
                  ${position === "left" ? "z-20 scale-90 left-0 w-1/3 opacity-80 h-5/6 top-8" : ""}
                  ${position === "right" ? "z-20 scale-90 right-0 w-1/3 opacity-80 h-5/6 top-8" : ""}
                  ${position === "hidden" ? "opacity-0" : ""}
                `}
                style={{
                  backgroundColor: "#FFCBA4", // Matches the peach color in the image
                }}
              >
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-4/5 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">{room.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between">
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-40"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-40"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Book Now button */}
        <div className="text-center">
          <button className="bg-white py-2 px-6 rounded-full text-gray-800 font-medium hover:bg-gray-100 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCarousel;